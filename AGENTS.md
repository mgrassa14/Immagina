# AGENTS.md — Immagina

These rules are loaded at the start of every Copilot chat. Follow them for every change.

## The app

- **Name:** Immagina — learn Italian by seeing.
- **What it is:** an offline-first web app for iPhone, iPad, and desktop. Open it in a browser, then Share > Add to Home Screen.
- **Scope:** Italian only for now. Sicilian is deferred — do NOT add Sicilian content yet, but keep the data shape able to add a Sicilian phrase later without rebuilding.
- **Learning method:** associate images, objects, and scenes directly with Italian phrases and sentences. English is only a small hidden hint if the user gets stuck — never the main route, and never as a test question.
- **Levels:** CEFR, starting at A1 as if learning as a child, then A2, B1, B2, C1/C2. Each level is 8–12 thematic units. Each unit is a scenario, not a grammar chapter — e.g. A1 Unit 4 is "At the Market", not "Plurals".
- **Practice in every unit:** visual, verbal, and written.
  - Visual: hear a phrase and tap the matching picture; label objects in a photo; put storyboard pictures in order.
  - Verbal: listen and repeat / shadow; record and compare; speak from a picture cue, with no text to read out.
  - Written: build a sentence from word tiles; fill in the missing word; dictation; write a caption for a picture.
- **Expandable by the user:** Maria can add a word and add a topic from the front end, without rebuilding the app. Added words must appear in flashcards, quizzes, and the review queue.

## How to work — agentic, in small steps

- Work in **one small step at a time**, then stop and wait for Maria to check it. Do not build all of Phase 1, all of A1, or multiple exercises in one go.
- Before starting a step, say in plain English what you will do and how Maria can test it.
- After every step, explain in plain English what each file does and what happens if it is removed. Keep files small, add comments, and give one way to test that step.
- If a step produces code Maria cannot explain back, do not move on. Rewrite it more simply first.
- Ask for a test or a way to check each feature. Run the app and try to break that feature.

## Git and safety

- **Never commit without Maria's say-so.**
- Use git. Make a commit after each checked step, only when Maria says to.
- Write commit messages in proper sentences.
- Do not change files outside this project. Do not add secrets, API keys, or passwords. Do not add a paid service or a new dependency without asking first.

## Code style

- Keep it simple and readable over clever. Plain HTML, CSS, and JavaScript for the starter — no build step, no framework, unless Maria explicitly asks for one.
- Keep data in JSON files under `data/` — one file per unit, plus `topics.json` for user topics.
- Images live in `assets/images/`. Use a real photo or a clear picture for every word. Use emoji only as a temporary placeholder, and say so in the code comment.
- Audio: use the device's built-in Italian voice (speech synthesis) for the starter. Do not add recorded audio files yet without asking.

## Notes file

- Keep `NOTES.md` up to date after every checked step: decisions made, what is done, what is next.
- If context gets long, ask Maria to start a fresh Copilot chat and re-read `AGENTS.md` and `NOTES.md` first.

## What "done" means for a step

Say yes to expanding only if all of these are true:
- It opens on iPhone, iPad, and desktop, and works offline after the first online load.
- A1 Unit 1 teaches from pictures/scenes, with visual, verbal, and written practice.
- You can add a word and a topic from the front end, and they appear in practice.
- Maria can explain back, in plain English, what each main file does.
