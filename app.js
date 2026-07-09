// app.js — the brain of the quiz.
//
// This is a skeleton. The comments tell you WHAT to build in each task,
// but YOU write the code. Look things up when you're stuck — that's the job.
//
// Tip: open the browser console (F12 → Console) and use console.log to see
//      what your code is doing. Just remember to delete the logs before you
//      commit (rule #5: read your own diff).

// ---- State: the few facts the app needs to remember ----
let index = 0; // which question we're on (0 = first)
let score = 0; // how many correct so far
let selected = 0; // check if works or not

// ---- Grab the elements from the page once, up top ----
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextButton = document.getElementById("next");
const scoreEl = document.getElementById("score");

// ================= TASK 1: render one question =================
// Write a function that takes a question and shows its text + a button
// per option. QUESTIONS comes from questions.js.
//
function renderQuestion() {
    nextButton.hidden = true;
    selected = false;
    questionEl.textContent = QUESTIONS[index].text;
    answersEl.innerHTML = '';
    for (let i = 0; i < QUESTIONS[index].options.length; i++) {
        const button = document.createElement('button');
        button.textContent = QUESTIONS[index].options[i];
        button.classList.add('answerButtons');
        button.addEventListener('click', () => {
            checkAnswer(i)
        });
        answersEl.appendChild(button);
    }
}

renderQuestion(); // => This line is to test out if renderQuestion works or not.

// ================= TASK 2: handle answer clicks =================
function checkAnswer(selectedAnswer) {
    buttonEl = document.getElementsByClassName('answerButtons');
    if (selected == 0) {
        for (let i = 0; i < QUESTIONS[index].options.length; i++) {
            if (i != QUESTIONS[index].correctIndex) {
                buttonEl[i].style.color = 'red';
            } else {
                buttonEl[i].style.color = 'green';
            }
        }
        if (selectedAnswer == QUESTIONS[index].correctIndex) {score++;}
        selected = 1;
        nextButton.hidden=false;
        index++;
    }
}



// ================= TASK 3: next question =================
// Show the Next button after an answer is picked. When clicked,
// currentIndex++ and show the next question. If there are no more
// questions, call showResults() (Task 5).

// ================= TASK 5 & 6 live in the results section =================
// showResults(): hide #quiz, show #results, fill in the final score,
// wire up "Play again", and save/show the best score with localStorage.

// ---- Start the quiz ----
// Once showQuestion exists, kick it off:
// showQuestion(QUESTIONS[currentIndex]);
