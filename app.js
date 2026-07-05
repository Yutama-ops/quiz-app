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
if (!localStorage.getItem("highScore")) {
    localStorage.setItem("highScore", 0);
}

// ---- Grab the elements from the page once, up top ----
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");
const nextButtonEl = document.getElementById("next");
const resultBoardEl = document.getElementById("results");
const bestScoreEl = document.getElementById('best-score');
document.getElementById('play-again').addEventListener('click', () => {quizReplay()});
nextButtonEl.addEventListener('click', () => {renderQuestion();});


// ================= TASK 1: render one question =================
// Write a function that takes a question and shows its text + a button
// per option. QUESTIONS comes from questions.js.
//

function renderQuestion() {
    nextButtonEl.hidden = true;
    selected = false;
    questionEl.innerHTML = '';
    answersEl.innerHTML = '';
    if (index < QUESTIONS.length) {
        questionEl.textContent = QUESTIONS[index].text;
        for (let i = 0; i < QUESTIONS[index].options.length; i++) {
            const button = document.createElement('button');
            button.textContent = QUESTIONS[index].options[i];
            button.classList.add('answerButtons');
            button.addEventListener('click', () => {
                checkAnswer(i)
            });
            answersEl.appendChild(button);
        }
    } else {
        showResults();
    }
}


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
        nextButtonEl.hidden=false;
        index++;
        scoreEl.textContent = `${score}/${index}`
    }
}

function showResults() {
    if (localStorage.getItem("highScore") < score) {
        localStorage.setItem("highScore", score);
    }
    scoreEl.hidden=true;
    resultBoardEl.hidden = false;
    bestScoreEl.textContent = `Highest Score:${localStorage.getItem("highScore")}`;
    document.getElementById('final-score').textContent = `You scored ${score}/${index}`;
}

function quizReplay() {
    index = 0;
    score = 0;
    selected = 0;
    resultBoardEl.hidden = true;
    scoreEl.textContent = '';
    scoreEl.hidden=false;
    renderQuestion();
}

renderQuestion(); // => This line starts the program


// ================= TASK 5 & 6 live in the results section =================
// showResults(): hide #quiz, show #results, fill in the final score,
// wire up "Play again", and save/show the best score with localStorage.

// ---- Start the quiz ----
// Once showQuestion exists, kick it off:
// showQuestion(QUESTIONS[currentIndex]);
