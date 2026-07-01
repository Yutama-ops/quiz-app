// The quiz data. Each question has the text, a list of options,
// and the index (0-based) of the correct option.
//
// You can add, remove, or change these questions freely.
// Start by getting Task 1 working with just this data.

const QUESTIONS = [
  {
    text: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "High Text Machine Language",
    ],
    correctIndex: 0,
  },
  {
    text: "Which CSS property changes text color?",
    options: ["font-style", "color", "text-color", "background"],
    correctIndex: 1,
  },
  {
    text: "In JavaScript, which keyword declares a value that never changes?",
    options: ["var", "let", "const", "static"],
    correctIndex: 2,
  },
  {
    text: "What does git switch -c do?",
    options: [
      "Deletes a branch",
      "Creates a new branch and moves to it",
      "Commits your changes",
      "Pushes to GitHub",
    ],
    correctIndex: 1,
  },
];
