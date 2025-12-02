// JavaScript Quiz Game - Lab Assignment 4
// This quiz runs fully in the browser console using prompt() and alert()

// 1. Array of quiz questions
const quizQuestions = [
  { 
    question: "What does HTML stand for?", 
    answer: "hypertext markup language" 
  },
  { 
    question: "Which CSS property is used to change text color?", 
    answer: "color" 
  },
  { 
    question: "What keyword is used to declare a variable in JavaScript?", 
    answer: "let" 
  },
  { 
    question: "What is the output of: 2 + 2?", 
    answer: "4" 
  },
  { 
    question: "Which function is used to print messages to the console?", 
    answer: "console.log" 
  }
];

// 2. Function that runs the quiz
function runQuiz() {
  let score = 0; // Score starts at 0

  // Loop through all questions
  for (let i = 0; i < quizQuestions.length; i++) {

    let userAnswer = prompt(quizQuestions[i].question);

    // If user cancelled prompt, treat as empty string
    if (!userAnswer) userAnswer = "";

    // Normalize input
    userAnswer = userAnswer.toLowerCase().trim();

    // Check correctness
    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct! 🎉");
      score++;
    } else {
      alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
    }
  }

  // Final score
  alert("Quiz Finished!\nYour score: " + score + "/" + quizQuestions.length);
}

// Start the quiz automatically
runQuiz();