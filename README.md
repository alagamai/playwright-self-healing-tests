🤖 AI-Powered Playwright Automation
Ask AI to Write Your Playwright Tests — and Auto-Heal Them!


This project demonstrates how Playwright Agents can automate the entire testing workflow — creating the test plan, generating Playwright test scripts, and automatically healing flaky tests.

The sandbox app includes intentionally flaky, dynamic UI elements (changing IDs, changing text, duplicate buttons) to showcase the Healer Agent in action.

📊 Agent Workflow Diagram
,,,
┌──────────────┐       ┌──────────────────┐       ┌──────────────────┐
│   Planner     │       │    Generator     │       │     Healer       │
│  (Explores)   │  -->  │ (Writes Tests)   │  -->  │ (Fixes Failures) │
└──────────────┘       └──────────────────┘       └──────────────────┘
         ↑                         ↓                         ↑
         └────────────── Agentic Loop ───────────────────────┘

,,,
🚀 Features

🤖 Planner Agent — explores the app & generates a Markdown test plan

✍️ Generator Agent — turns the plan into runnable Playwright tests

🔧 Healer Agent — auto-fixes failing tests (dynamic IDs, hidden elements, duplicates)

🎯 Flaky demo app — built with changing text, IDs, and duplicate buttons

🔁 Agentic loop — Plan → Generate → Heal → Rerun

📂 Project Structure
Playwright-Agents/
├── sandbox/              # Demo app with flaky UI
├── tests/                # AI-generated Playwright tests
├── test_plan.md          # AI-generated test plan
├── playwright-report/    # HTML test reports
├── test-results/         # Screenshots, traces, videos
├── playwright.config.ts  # Playwright configuration
└── README.md

🧰 Tech Stack

Playwright

Playwright Agents

Node.js

TypeScript / JavaScript

Agentic AI (Planner → Generator → Healer)

🛠️ Setup Instructions

Run these two commands to recreate this project:

1️⃣ Initialize Playwright
npm init playwright@latest

2️⃣ Initialize Playwright Agents
npx playwright init-agents --loop=vscode


Agents are bundled into Playwright, so no additional dependencies appear in package.json.

▶️ Running the Demo App
Start the flaky sandbox app:
cd sandbox
python3 -m http.server 8000

Execute tests:
npx playwright test

View reports:
npx playwright show-report

🎯 What This Project Demonstrates

AI exploring a UI

AI writing a full test plan

AI generating real test scripts

AI auto-healing broken tests

Hands-free, low-maintenance, modern test automation
