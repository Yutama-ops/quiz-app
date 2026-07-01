# Tasks — do these in order

Each task = one branch = one PR = one merge. Commit as many small steps inside a branch as you want.
Check the box when the PR is merged.

---

- [ ] **Task 0 — Setup**
  Branch: none (do this on `main`)
  - Commit `.gitignore` **alone** first: `chore: add gitignore`
  - Then commit the starter files: `chore: add quiz app skeleton`
  - Push `main` to GitHub.

- [ ] **Task 1 — Render one question**
  Branch: `feat/render-question`
  Show the first question's text and its answer buttons on the page. No clicking logic yet — just get it on screen from the data in `questions.js`.
  Likely commits: `feat: render question text`, `feat: render answer buttons`

- [ ] **Task 2 — Handle answer clicks**
  Branch: `feat/answer-clicks`
  When a button is clicked, mark it green if correct, red if wrong. Disable the buttons after a choice so you can't click twice.
  Likely commits: `feat: detect clicked answer`, `style: color correct and wrong answers`

- [ ] **Task 3 — Next question**
  Branch: `feat/next-question`
  Add a "Next" button that loads the following question. When there are no more questions, move to results (Task 5).
  Likely commits: `feat: add next button`, `feat: advance to next question`

- [ ] **Task 4 — Score**
  Branch: `feat/score`
  Count correct answers. Show the running score somewhere on screen.
  Likely commits: `feat: track score`, `feat: display score`

- [ ] **Task 5 — Results screen + play again**
  Branch: `feat/results`
  After the last question, hide the quiz and show a results screen: "You scored X / Y". Add a "Play again" button that restarts from question 1 with score reset to 0.
  Likely commits: `feat: show results screen`, `fix: reset score on play again`

- [ ] **Task 6 — Remember best score**
  Branch: `feat/best-score`
  Save the best score in `localStorage` so it survives a page refresh. Show "Best: N" on the results screen.
  Likely commits: `feat: save best score to localStorage`, `feat: display best score`

---

## After all 6 merge — the boss level
- [ ] **Merge conflict drill.** Ask your brother to help. On two branches, edit the *same line* of the same file differently, merge both into main, and resolve the conflict by hand. Do it once now while it's safe — so it doesn't scare you on a real project later.
