---
name: risk-aware-commits
description: Write git commit messages in the team's risk-aware notation (Arlo's Commit Notation). Use whenever you commit, or when asked to write or fix a commit message.
---

# Risk-aware commit messages

The first three characters of the summary line say how risky the commit is and what kind
of change it is. Then a plain description in the imperative, under 60 characters.

```
<risk> <intent> <description>
```

## Risk (first character)

| Mark | Meaning         | It applies when                                                                                                                                                                                                                            |
| ---- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.`  | Safe            | Provably safe: a refactoring done by a tool, or developer-only code such as build scripts and logging. Covers known and unknown risks.                                                                                                     |
| `^`  | Validated       | All known risks are covered. For a feature or fix: 8 lines or fewer, the behaviour was fully unit-tested before the change, and the tests were updated to match. For a refactoring: one named refactoring, done by hand, with tests green. |
| `!`  | Risky           | Some known risks remain unverified. A feature or fix that ships with new tests for the new behaviour. A refactoring without whole-project test coverage.                                                                                   |
| `@`  | Probably broken | No tests, unfinished, may not compile, or more than one behaviour change in one commit.                                                                                                                                                    |

One commit holds at most one intended behaviour change. More than one makes it `@`. Split it.

## Intent (third character)

| Mark      | Meaning       |
| --------- | ------------- |
| `F` / `f` | Feature       |
| `B` / `b` | Bug fix       |
| `R` / `r` | Refactoring   |
| `D` / `d` | Documentation |

Uppercase means the change is visible to users (goes in the changelog). Lowercase means internal.

## Examples

```
^ r Extract settle() from the balances route
^ B Round transfer amounts to cents
! F Add balances page that shows who owes whom
@ f Start wiring the balances page, template missing
. d Explain the risk notation in the README
```

## How to pick the risk

1. A new feature or fix with new tests that cover it: `!`.
2. A tiny change (8 lines or fewer) to code that was already fully tested, tests updated: `^`.
3. A refactoring by hand with the tests still green: `^`. A refactoring the IDE did for you: `.`.
4. Any behaviour change with no tests, or a commit you know is unfinished: `@`.

When the mark is `!` or `@`, the body says what is tested and what is not.
