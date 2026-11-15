# Immagina

**This file changes only when Maria asks for the change, or says yes to one you propose.**

## Where to look

Read the skill file yourself before doing the work it covers. If the file does not exist, say so and do not invent it. Load a skill for no other reason. Add a skill here only when Maria agrees.

| When                                               | Read                                         |
| -------------------------------------------------- | -------------------------------------------- |
| Finishing a step, before moving on                 | `.github/skills/explain-back/SKILL.md`       |
| Finishing a lesson or unit, before calling it done | `.github/skills/italian-unit-check/SKILL.md` |
| Maria asks for a commit or commit message          | `.github/skills/risk-aware-commits/SKILL.md` |

## How to work

**Where things go.** How Copilot works: this file. Decisions, what is done, what is next: `NOTES.md`, updated after every checked step. If a chat gets long, ask Maria to start a fresh one and re-read this file and `NOTES.md`.

**How to talk to Maria.** Short replies in plain words. One question per message, with a recommendation first. Before a step, say what you will do and how Maria can test it. After a step, explain each file in plain English and what happens if it is removed. If she cannot explain the code back, rewrite it more simply.
**Language.** Always reply to Maria in English. Italian is only the app's content, never the language of the chat.

**Small steps.** One step at a time, then stop and wait for Maria to check it. Keep files small and commented. Give one way to test each step, then try to break it.

**Permissions.** Assisted mode. Usually Allow Once. Never Allow All outside a sandbox Maria does not mind losing.

## The app

Immagina: learn Italian by seeing. Offline-first web app for iPhone, iPad and desktop (Share > Add to Home Screen).

- **Italian content only.** The app teaches Italian. Sicilian is deferred: add none, but keep the data shape able to hold it later.
- **Method:** pictures, objects and scenes go straight to Italian phrases. English is a small hidden hint, never the main route or a test question.
- **Levels:** CEFR, A1 as if learning as a child, then A2, B1, B2, C1/C2. 8 to 12 units per level. A unit is a scenario ("At the Market"), not a grammar chapter.
- **Every unit has:** visual practice (tap the picture, label a photo, order a storyboard), verbal (listen and repeat, record and compare, speak from a picture), and written (word tiles, fill the gap, dictation, caption).
- **Expandable:** Maria can add a word and a topic from the front end without rebuilding. They appear in flashcards, quizzes and the review queue.

## Where we are

Git and the scaffold exist. Do not redo them. Next is Step 2 only: define the data shape for A1 Unit 1, using `data/a1-unit1.json` as examples. Do not change its words, because the Unit 1 scene is not picked. No exercises, A2, B1 or rest of A1 yet.

## Git and safety

Never commit without Maria's say-so. Commit after each checked step, only when she says to. Commit messages are proper sentences. Stay inside this project. No secrets or keys. No paid service or new dependency without asking.
**Pushing.** After each commit, ask Maria if she wants to push to the GitHub remote. Push only when she says yes.

## Code style

- Plain HTML, CSS and JavaScript. No build step or framework unless Maria asks. Simple over clever.
- JSON under `data/`: one file per unit, plus `topics.json` for user topics.
- Images in `assets/images/`: a real photo or clear picture per word. Emoji is a temporary placeholder, and the code comment says so.
- Audio is the device's Italian speech synthesis. No recorded audio without asking.

## Done means

It opens on iPhone, iPad and desktop and works offline after the first load. A1 Unit 1 teaches from pictures with visual, verbal and written practice. A word and a topic can be added from the front end and show up in practice. Maria can explain what each main file does.
