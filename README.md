# Quiz App

A small quiz you build with plain HTML, CSS, and JavaScript. No frameworks, no build tools — just open `index.html` in a browser.

This project is not really about the quiz. It's about learning to work like a software engineer: small commits, clear messages, one feature per branch, review your own diff before you ship.

## How to run

Double-click `index.html`, or right-click → "Open with" → your browser. That's it. Refresh the page to see changes.

## What you're building

A quiz that:
1. Shows one question at a time with multiple-choice answers
2. Reacts when you click an answer (right = green, wrong = red)
3. Moves to the next question
4. Keeps a score
5. Shows a final results screen with a "Play again" button
6. Remembers your best score using `localStorage`

The features are broken into small tasks in **[TASKS.md](./TASKS.md)** — do them in order, one branch each.

---

## The rules (this is the real lesson)

Read these once now, then keep them open while you work.

### 1. First commit = `.gitignore`
Before anything else. Git tracks whatever you tell it — including junk like `.DS_Store`. The `.gitignore` file tells git what to ignore. Commit it *first*, alone:
```bash
git add .gitignore
git commit -m "chore: add gitignore"
```

### 2. One feature = one branch = one Pull Request
Never build on `main` directly. For each task:
```bash
git switch -c feat/render-question    # make + switch to a branch
# ...write code, commit as you go...
git push -u origin feat/render-question
# then open a PR on GitHub, review it yourself, merge it
```

### 3. One logical change = one commit
If your commit message needs the word **"and"**, you probably should have made two commits.
Bad: `finished questions and score and styling`
Good: three commits — `feat: render question text`, `feat: track score`, `style: center quiz card`

### 4. Write commit messages like this (Conventional Commits)
```
<type>: <what changed, imperative mood>
```
- **Types:** `feat` (new feature), `fix` (bug fix), `style` (CSS/formatting), `refactor` (restructure, no behavior change), `chore` (setup/tooling), `docs` (docs)
- **Imperative mood:** "add score counter", not "added" or "adding"
- **Keep the subject under ~50 characters**

Examples from this project:
```
feat: show next question on click
fix: reset score when restarting quiz
style: turn selected answer green
```

### 5. Read your own diff before every commit
```bash
git diff
```
Look at every line. Did you leave junk in? A stray tag? A `console.log`? This one habit catches most beginner bugs before they ship. (The last project shipped an empty `<img src="" alt="">` — `git diff` would have caught it.)

### 6. Prove it works — don't just assume
Before you say a feature is "done": open the page, click through it, watch it actually work. A screen that renders is not the same as a feature that works.

---

## Your git cheat sheet

| Command | What it does |
|---|---|
| `git status` | What's changed / what branch am I on |
| `git switch -c feat/name` | Make a new branch and move to it |
| `git switch main` | Go back to main |
| `git add <file>` | Stage a file for the next commit |
| `git diff` | See unstaged changes (**do this before every commit**) |
| `git diff --staged` | See what you're about to commit |
| `git commit -m "feat: ..."` | Save a commit |
| `git push -u origin feat/name` | Push a new branch to GitHub |
| `git log --oneline` | See your commit history |

---

## Stretch goals (once the 6 features work)
- Add a timer per question
- Add categories
- Pull questions from a free API instead of the local file
