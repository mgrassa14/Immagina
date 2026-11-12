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

## Current status — do not redo this

- Git is initialised and the scaffold already exists. Do NOT redo `git init`, do NOT make the first commit again, and do NOT recreate the scaffold.
- Next step is Step 2 only: define the data shape for A1 Unit 1. Use the starter words already in `data/a1-unit1.json` as examples only; do not change the words yet, because the Unit 1 scene has not been picked.
- Do not move on to any exercise yet, and do not build A2, B1, or the rest of A1.

## How to work — agentic, in small steps

- Work in **one small step at a time**, then stop and wait for Maria to check it. Do not build all of Phase 1, all of A1, or multiple exercises in one go.
- Before starting a step, say in plain English what you will do and how Maria can test it.
- After every step, explain in plain English what each file does and what happens if it is removed. Keep files small, add comments, and give one way to test that step.
- If a step produces code Maria cannot explain back, do not move on. Rewrite it more simply first.
- Ask for a test or a way to check each feature. Run the app and try to break that feature.

## Permissions and context — from Daniel's overview

- Use Assisted mode. For permissions, usually choose Allow Once — never use Allow All except in a sandbox you don't mind losing.
- Work in small steps. As a chat gets long, Copilot forgets details (context rot) and makes more mistakes. If that happens, start a fresh chat and re-read AGENTS.md and NOTES.md first.
- Keep NOTES.md up to date after every checked step: decisions made, what is done, what is next. That file is what survives when a chat is summarised (compaction).
- Skills (saved prompts in a folder) and MCP servers (extra tools, e.g. a browser driver to test the app's UI) come later, one at a time — not now, except for the four skills listed below.

## Skills — use these automatically

Skills live in `.github/skills/<skill-name>/SKILL.md`. They are NOT loaded at the start of a chat. You must read the skill file yourself when its trigger below matches, before you do that work. If the skill file does not exist, say so and do not invent it.

- **When you finish a step, before you move on — use `explain-back`:**
  Read `.github/skills/explain-back/SKILL.md` and follow it. Explain every file changed in that step in plain English, ask Maria to explain it back in her own words, and do not move on until she can.
- **When you finish a new lesson or unit, before you call it done — use `italian-unit-check`:**
  Read `.github/skills/italian-unit-check/SKILL.md` and follow it. Check the unit against the approved plan: Italian only, picture / object / scene first, no English as the main route, visual + verbal + written practice all present, A1 words that fit the scene. List what passes and what fails, fix only the failures, then stop.
- **When Maria asks you to commit — use `risk-aware-commits`:**
  Read `.github/skills/risk-aware-commits/SKILL.md` and follow it before staging or committing anything. Check the risk first, do not commit without her say-so, and stop if the change is risky or unclear.
- **When you write a commit message — use `risk-aware-commit-notation`:**
  Read `.github/skills/risk-aware-commit-notation/SKILL.md` and follow it. Use its notation for the message itself — what the change is, how risky it is, and why it is safe to commit. Write the message in proper sentences.
  Note: `risk-aware-commits` is the process (when / whether to commit). `risk-aware-commit-notation` is only the message format. If those two files turn out to say the same thing, keep one and delete the other — do not load both for the same commit.
- Do not load a skill for any other reason, and do not paste a whole skill file into AGENTS.md. Keep this list short — add a new skill here only when Maria agrees to it.

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
