# Taskboard

A small full-stack CRUD task tracker, intentionally split into two services so you can write your own Dockerfiles and Compose configuration.

## Stack
- React 18 + Vite (frontend, default port 5173)
- Express (backend, default port 3001)
- JSON file persistence (`backend/data/tasks.json`, created automatically)
- Node.js 20+

## Run locally

From the project root:

```bash
npm install
npm run install:all
npm run dev
```

Visit http://localhost:5173. Alternatively run `npm install && npm run dev` inside each of `backend/` and `frontend/` in separate terminals.

## API

| Method | Route | Body | Response |
| --- | --- | --- | --- |
| GET | `/api/health` | — | `{ "status": "ok" }` |
| GET | `/api/tasks` | — | Task array |
| POST | `/api/tasks` | `{ "title": "Read a book" }` | Created task, 201 |
| PATCH | `/api/tasks/:id` | `{ "completed": true }` and/or `{ "title": "..." }` | Updated task |
| DELETE | `/api/tasks/:id` | — | 204 |

Validation errors return 400 with an `error` field. Missing tasks return 404.

## Containerization notes (no Dockerfiles/Compose supplied)

- Build frontend via `npm run build --prefix frontend`; static output goes to `frontend/dist/`.
- Backend starts with `npm start --prefix backend` and listens on `0.0.0.0:${PORT:-3001}`.
- Mount a persistent volume at your chosen `DATA_DIR` (default relative to backend's working directory, `./data`).
- Set `CORS_ORIGIN` to the browser-facing frontend origin; comma-separated origins are supported.
- In Vite development, `/api` proxies to `API_PROXY_TARGET` (default `http://localhost:3001`). If the frontend runs in its own container and Vite runs there, set `API_PROXY_TARGET=http://backend:3001` (or your backend service name).
- For a built static frontend, configure your reverse proxy to forward `/api/*` to the backend, **or** build with `VITE_API_URL` pointing to the browser-accessible API URL. Vite env variables are embedded at build time; a Compose-only runtime value will not change the compiled JS.
- This is a demo JSON-file store suitable for a single backend instance, not multi-replica shared writes. Use a database for that use case.
