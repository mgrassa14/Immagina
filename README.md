# Immagina — Learn Italian by seeing

**Immagina** (Italian for "imagine") — learn Italian by associating pictures, objects, and scenes directly with Italian phrases, not by translating from English.

- Italian only for now. Sicilian is deferred as a future layer — keep the data shape able to add a Sicilian phrase later.
- CEFR, starting at A1 as if you are a child learning the world.
- Visual, verbal, and written practice in every unit.
- Offline-first web app: add it to the Home Screen on iPhone / iPad.

## Start here in VS Code

1. Open this `immagina` folder in VS Code.
2. Install the GitHub Copilot extension and sign in with Copilot Free.
3. Open Copilot Chat, switch to **Agent** mode, and set permissions to **Assisted** (or approve each tool call — Allow Once).
4. Paste the brief from `docs/copilot-starter-brief.md` — A1 Unit 1 only, one step at a time, then stop and check.
5. Run it locally:
   - Easiest: VS Code extension **Live Server** — right-click `pages/index.html` → Open with Live Server.
   - Or in a terminal: `python3 -m http.server 8000` then open http://localhost:8000/pages/
   - Or: `npm start` (same Python server, see `package.json`)

## What is in this starter

```
immagina/
  AGENTS.md                  Rules Copilot reads at the start of every chat
  NOTES.md                   Decisions, done, next — keep this up to date
  README.md                  This file
  pages/                     The app and settings HTML pages
    index.html               The app shell
    settings.html            Saved speech and appearance settings
  manifest.json              Add to Home Screen name, icons, colours
  sw.js                      Basic service worker for offline caching
  css/styles.css             Styles
  js/app.js                  Small starter logic: loads data, shows cards
  js/preferences.js          Shared saved settings
  js/settings.js             Settings page behavior
  data/a1-unit1.json         A1 Unit 1 starter words — pictures first
  data/topics.json           Your own topics (empty starter)
  assets/images/             Put your photos here, one per word if you can
  docs/plan-summary.md       The approved CEFR plan, short version
  docs/copilot-starter-brief.md  Copy-paste brief for Copilot Agent mode
  .vscode/                   Recommended settings + extensions
  .github/copilot-instructions.md  Short pointer to AGENTS.md
```

## The rule for code you do not understand

Do not accept what you cannot explain back in plain English. Ask Copilot:
- "Explain this file to me like I'm new — what does it do, and what happens if I remove it?"
- "Why did you choose this approach, and what's a simpler alternative?"
- "Add comments and break this into smaller pieces I can follow."

Work in small steps. Ask for a test or a way to check each step. Keep git so you can undo a step.

## Next steps (in order)

1. `git init`, first commit — see the starter brief.
2. Data shape for A1 Unit 1 only.
3. One visual exercise: hear a phrase, tap the matching picture.
4. One verbal and one written exercise.
5. Add a Word and Add a Topic from the front end.
6. Stop after Unit 1. Check actual Copilot credit use before expanding.
