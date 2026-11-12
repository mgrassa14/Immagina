---
name: risk-aware-commit-notation
description: Use Arlo's Risk-Aware Commit Notation when writing or reviewing commit summary lines.
---

Use the notation described in [Arlo's Commit Notation](https://github.com/RefactoringCombos/ArlosCommitNotation):

1. Start the commit summary with three characters: a risk symbol, a space, and an intention letter. For example: `^ B Fix the market search bug`.
2. Choose the risk symbol based on evidence:
   - `.` means proven safe, including protection of unknown invariants; do not use it just because tests pass.
   - `^` means the intended change and known invariants were validated.
   - `!` means the intended change was checked, but some known risks remain unverified.
   - `@` means there is no risk attestation, such as for unfinished or unchecked work.
3. Use `F` for a feature, `B` for a bugfix, `R` for a refactoring, and `D` for documentation. Follow the project's convention for upper- and lowercase; if none is established, explain the choice rather than implying a universal meaning.
4. Keep each commit focused on one intended behavior change. If it combines multiple behavior changes or the evidence does not justify a safer label, choose a more cautious risk symbol.
5. Treat the prefix as a concise statement of intent and verification, not a substitute for reviewing the diff or getting approval to commit.
