---
name: risk-aware-commits
description: Use before preparing a commit or when asked to assess commit risk; inspect the exact changes and recommend safe next steps.
---

When preparing a commit or assessing its risk:

1. Check the working tree status and inspect the full diff, including staged changes.
2. Identify unrelated changes, generated or unusually large files, and possible secrets or sensitive data. Do not copy secret values into reports.
3. Summarize what would be included in the commit and call out specific risks or uncertainty.
4. Do not discard, rewrite, stage, or commit changes unless Maria explicitly asks for that action. Never commit without her approval.
5. If changes are mixed or risky, recommend a small, safe next step and wait for Maria to choose before acting.
