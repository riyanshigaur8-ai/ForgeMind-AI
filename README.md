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

> Note: an earlier prototype router (`forgemind_ai/core/router.py`, `core/orchestrator.py`) only forwarded every request to SkillLens and predates the ADK sub-agent setup. It's no longer used by the live API and is kept for reference — safe to delete before final submission to avoid confusing reviewers.

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

---

## 🌐 Deployability

* **Frontend:** live on Vercel (`vercel.json` configured for SPA routing), with a second preview deployment URL also whitelisted in CORS.
* **Backend:** runs via FastAPI/Uvicorn locally; no `Procfile`/`Dockerfile`/`render.yaml` is committed yet, so document your exact backend run command (or add one) so judges can reproduce it.

---

## 📅 Development Roadmap

### Phase 1 — Done
* [x] Project setup, ADK configuration, Gemini integration, repo created

### Phase 2 — Done
* [x] SkillLens, ProjectScout, SprintPlanner, PortfolioForge built and wired into root agent

### Phase 3 — Partially done
* [x] Multi-agent orchestration (ADK sub-agent delegation)
* [x] Core security (JWT + bcrypt auth)
* [ ] MCP integration

### Phase 4 — Partially done
* [x] Frontend built (React, deployed to Vercel)
* [ ] Backend deployment config committed
* [ ] Kaggle capstone submission

---

## 📈 Project Status

Core multi-agent system, backend API, auth, and frontend are functional. Remaining work before submission: MCP (or reframe scope), clean up dead prototype code, document backend deployment, and record the demo video.

---

## 👩‍💻 Author

Riyanshi Gaur — B.Tech AIML Student, Google ADK & Agentic AI Enthusiast
