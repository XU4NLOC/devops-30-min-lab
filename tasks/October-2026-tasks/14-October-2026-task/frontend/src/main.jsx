import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Check,
  Plus,
  Trash2,
  ClipboardList,
  Circle,
  CheckCircle2,
} from "lucide-react";
import "./style.css";

const API = import.meta.env.VITE_API_URL || "/api";
async function request(path, options) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return res.status === 204 ? null : res.json();
}
function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    request("/tasks")
      .then(setTasks)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  const completed = tasks.filter((t) => t.completed).length;
  const visible = tasks.filter(
    (t) =>
      filter === "all" || (filter === "active" ? !t.completed : t.completed),
  );
  async function add(e) {
    e.preventDefault();
    if (!title.trim() || busy) return;
    setBusy(true);
    setError("");
    try {
      const task = await request("/tasks", {
        method: "POST",
        body: JSON.stringify({ title }),
      });
      setTasks((old) => [task, ...old]);
      setTitle("");
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  }
  async function toggle(task) {
    setError("");
    try {
      const updated = await request(`/tasks/${task.id}`, {
        method: "PATCH",
        body: JSON.stringify({ completed: !task.completed }),
      });
      setTasks((old) => old.map((t) => (t.id === updated.id ? updated : t)));
    } catch (err) {
      setError(err.message);
    }
  }
  async function remove(task) {
    setError("");
    try {
      await request(`/tasks/${task.id}`, { method: "DELETE" });
      setTasks((old) => old.filter((t) => t.id !== task.id));
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <main className="shell">
      <header className="top">
        <div className="logo">
          <ClipboardList size={21} />
        </div>
        <span>
          taskboard<span className="dot">.</span>
        </span>
        <span className="top-right">A LITTLE SPACE TO GET THINGS DONE</span>
      </header>
      <section className="hero">
        <div className="eyebrow">
          <span className="eyebrow-line" /> YOUR PERSONAL WORKSPACE
        </div>
        <h1>
          Make room for
          <br />
          <em>what matters.</em>
        </h1>
        <p>
          Less noise, more progress. Keep your day in focus, one task at a time.
        </p>
      </section>
      <section className="panel">
        <div className="panel-head">
          <div>
            <div className="eyebrow small">THE OVERVIEW</div>
            <h2>
              Your tasks <span className="count">{tasks.length}</span>
            </h2>
          </div>
          <div className="progress">
            <span>
              {tasks.length ? Math.round((completed / tasks.length) * 100) : 0}%
              COMPLETE
            </span>
            <div className="track">
              <div
                style={{
                  width: `${tasks.length ? (completed / tasks.length) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        </div>
        <form className="add" onSubmit={add}>
          <Plus size={20} />
          <input
            aria-label="New task"
            maxLength={120}
            placeholder="What needs to get done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button disabled={!title.trim() || busy}>
            Add task <span>↗</span>
          </button>
        </form>
        <div className="filters">
          {[
            ["all", "All tasks"],
            ["active", "In progress"],
            ["completed", "Completed"],
          ].map(([key, label]) => (
            <button
              key={key}
              className={filter === key ? "selected" : ""}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
          <span className="remaining">
            {tasks.length - completed} remaining
          </span>
        </div>
        {error && (
          <div role="alert" className="error">
            {error}
          </div>
        )}
        <div className="task-list">
          {loading ? (
            <div className="empty">Loading tasks…</div>
          ) : visible.length === 0 ? (
            <div className="empty">
              <Circle size={27} strokeWidth={1.3} />
              <strong>Nothing here yet.</strong>
              <span>
                {filter === "all"
                  ? "Add a task above to get started."
                  : "No tasks match this filter."}
              </span>
            </div>
          ) : (
            visible.map((task) => (
              <div
                className={`task ${task.completed ? "done" : ""}`}
                key={task.id}
              >
                <button
                  className="check"
                  aria-label={
                    task.completed ? "Mark incomplete" : "Mark complete"
                  }
                  onClick={() => toggle(task)}
                >
                  {task.completed ? <Check size={15} /> : null}
                </button>
                <span className="task-title">{task.title}</span>
                {task.completed && (
                  <span className="done-label">
                    <CheckCircle2 size={13} /> DONE
                  </span>
                )}
                <button
                  className="delete"
                  aria-label={`Delete ${task.title}`}
                  title="Delete task"
                  onClick={() => remove(task)}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="panel-foot">
          <span>
            <span className="status-dot" /> YOUR WORK IS SAVED AUTOMATICALLY
          </span>
          <span>ONE THING AT A TIME ✳</span>
        </div>
      </section>
      <footer>
        BUILT FOR THE LITTLE WINS <span>© TASKBOARD</span>
      </footer>
    </main>
  );
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
