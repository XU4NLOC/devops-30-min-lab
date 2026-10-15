import express from 'express';
import cors from 'cors';
import { randomUUID } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const app = express();
const PORT = Number(process.env.PORT || 3001);
const DATA_DIR = process.env.DATA_DIR || path.resolve('data');
const DATA_FILE = path.join(DATA_DIR, 'tasks.json');
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173').split(',').map(s => s.trim());
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '16kb' }));

async function readTasks() {
  try { return JSON.parse(await readFile(DATA_FILE, 'utf8')); }
  catch (err) { if (err.code === 'ENOENT') return []; throw err; }
}
async function saveTasks(tasks) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(tasks, null, 2) + '\n');
}
// Serialize mutations to avoid lost writes when requests arrive concurrently.
let queue = Promise.resolve();
function mutate(operation) {
  const result = queue.then(async () => {
    const tasks = await readTasks();
    const { next, response, status = 200 } = operation(tasks);
    if (next) await saveTasks(next);
    return { response, status };
  });
  queue = result.then(() => undefined, () => undefined);
  return result;
}

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/api/tasks', async (_req, res, next) => {
  try { await queue; res.json(await readTasks()); } catch (e) { next(e); }
});
app.post('/api/tasks', async (req, res, next) => {
  const title = typeof req.body?.title === 'string' ? req.body.title.trim() : '';
  if (!title || title.length > 120) return res.status(400).json({ error: 'Title must contain 1–120 characters.' });
  try {
    const result = await mutate(tasks => {
      const task = { id: randomUUID(), title, completed: false, createdAt: new Date().toISOString() };
      return { next: [task, ...tasks], response: task, status: 201 };
    });
    res.status(result.status).json(result.response);
  } catch (e) { next(e); }
});
app.patch('/api/tasks/:id', async (req, res, next) => {
  const fields = Object.keys(req.body || {});
  if (!fields.length || fields.some(field => !['title', 'completed'].includes(field))) {
    return res.status(400).json({ error: 'Only title and completed can be updated.' });
  }
  const update = {};
  if ('title' in req.body) {
    if (typeof req.body.title !== 'string' || !req.body.title.trim() || req.body.title.trim().length > 120) return res.status(400).json({ error: 'Title must contain 1–120 characters.' });
    update.title = req.body.title.trim();
  }
  if ('completed' in req.body) {
    if (typeof req.body.completed !== 'boolean') return res.status(400).json({ error: 'completed must be boolean.' });
    update.completed = req.body.completed;
  }
  try {
    const result = await mutate(tasks => {
      const index = tasks.findIndex(task => task.id === req.params.id);
      if (index === -1) return { response: { error: 'Task not found.' }, status: 404 };
      const changed = { ...tasks[index], ...update };
      const next = [...tasks]; next[index] = changed;
      return { next, response: changed };
    });
    res.status(result.status).json(result.response);
  } catch (e) { next(e); }
});
app.delete('/api/tasks/:id', async (req, res, next) => {
  try {
    const result = await mutate(tasks => {
      if (!tasks.some(task => task.id === req.params.id)) return { response: { error: 'Task not found.' }, status: 404 };
      return { next: tasks.filter(task => task.id !== req.params.id), response: null, status: 204 };
    });
    res.status(result.status).end();
  } catch (e) { next(e); }
});
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});
app.listen(PORT, '0.0.0.0', () => console.log(`API listening on ${PORT}`));
