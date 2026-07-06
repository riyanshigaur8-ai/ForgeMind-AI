# ForgeMind AI

## 🚀 AI Career Operating System — Multi-Agent Mentor Platform

ForgeMind AI is a multi-agent system built with **Google ADK** and **Gemini** that helps students and aspiring developers turn their skills into portfolio-ready projects and internship-ready careers. Instead of a single generic chatbot, a root orchestrator agent routes each request to one of four specialist agents that collaborate to guide the user from "what do I know" to "what should I build and ship."

---

## 📌 Problem Statement

Many students complete courses and tutorials but still struggle to:

* Choose the right projects for their career goals
* Identify their real skill gaps
* Break a project into manageable milestones
* Build a resume- and GitHub-ready portfolio
* Prepare for internships and placements

ForgeMind AI addresses this with a team of specialized AI agents that collaborate to guide users from *learning* to *building* to *presenting*.

---

## 🏗️ Multi-Agent Architecture (Implemented)

A root agent (`forgemind_ai/agent.py`) built on **Google ADK's native sub-agent delegation** reads the user's intent and hands the conversation to the right specialist:

| Agent | Status | Responsibility |
|---|---|---|
| **SkillLens** | ✅ Built | Analyzes skills, finds gaps, recommends technologies, internship prep |
| **ProjectScout** | ✅ Built | Recommends portfolio-worthy projects, GitHub ideas, tech stacks |
| **SprintPlanner** | ✅ Built | Turns a project into a weekly/milestone execution roadmap |
| **PortfolioForge** | ✅ Built | Reviews resumes, GitHub profiles, and LinkedIn for ATS/portfolio quality |
| **ResumeLens** | 🚧 Stubbed | Reserved for deeper resume-parsing; not yet implemented |

Each specialist is a real ADK `Agent` with its own model config and dedicated prompt module (`forgemind_ai/prompts/`), and all four are registered as `sub_agents` of the root orchestrator — so routing is handled natively by ADK rather than hand-rolled if/else logic.

> Note: an earlier prototype router (`forgemind_ai/core/router.py`, `core/orchestrator.py`) only forwarded every request to SkillLens and predates the ADK sub-agent setup. It's no longer used by the live API.

---

## 🛠️ Technology Stack

**Backend**
* Google ADK (Agent Development Kit) + Gemini 2.5 Flash
* FastAPI + Uvicorn
* SQLAlchemy + SQLite (`forgemind.db`)
* JWT auth (`python-jose`) + bcrypt password hashing (`passlib`)

**Frontend**
* React + Vite
* React Router, protected routes, auth context
* Dashboard, career chat, profile, login/register pages
* Deployed on Vercel

---

## 🔒 Security Features (Implemented)

* User registration/login with **bcrypt-hashed passwords** (`auth/security.py`)
* **JWT access tokens** for session auth (`auth/routes.py`)
* CORS restricted to known frontend origins (localhost + the two deployed Vercel domains)
* Graceful handling of upstream Gemini errors (503/429) without leaking internals to the client

One known issue to fix going forward: `SECRET_KEY` in `auth/security.py` is currently a hardcoded placeholder string. It should be moved to an environment variable (`.env`, already gitignored) rather than sitting in the code.

---

## 🌐 Deployability (Live)

* **Frontend:** deployed on Vercel → **https://forgemind-ai-two.vercel.app/**
  (`vercel.json` configured for SPA routing; a second preview deployment URL is also whitelisted in CORS)
* **Backend:** deployed on Render → **https://forgemind-ai-ll9v.onrender.com**
  FastAPI + Uvicorn service backing the frontend's auth and agent chat calls.

> ⚠️ **Render free-tier note:** the backend spins down after ~15 min of inactivity and takes 30–60 seconds to wake on the first request after a period of no traffic.

No `Procfile`/`Dockerfile`/`render.yaml` is committed to the repo yet — build/start commands and environment variables (`SECRET_KEY`, `GEMINI_API_KEY`, etc.) are currently configured directly in the Render/Vercel dashboards. Adding one would make it easier for someone else to redeploy the exact setup from the repo alone.

---

## 🔭 Known Limitations & Future Work

* **MCP Server** — not yet implemented; a natural next integration for connecting agents to external tools/data sources.
* **Tools directory is scaffolded but empty** — `tools/github_tool.py`, `pdf_reader.py`, `resume_parser.py`, and `web_search.py` are placeholders for future capabilities (GitHub browsing, PDF/resume parsing, live web search).
* **No CLI entrypoint** yet for direct agent invocation outside the web app.
* **ResumeLens** agent is stubbed but not implemented.

---

## 🔗 Live Links

* **Frontend (try it live):** https://forgemind-ai-two.vercel.app/
* **Backend API:** https://forgemind-ai-ll9v.onrender.com

---

## 📈 Project Status

Core multi-agent system, backend API, auth, and frontend are functional and **both are live in production**.

---

## 👩‍💻 Author

Riyanshi Gaur — B.Tech AIML Student, Google ADK & Agentic AI Enthusiast
