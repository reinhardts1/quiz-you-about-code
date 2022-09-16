import {quizQuestions} 
from "../data/qna.js"




/*-------------------------------- Constants ----------------------------*/
const HIGH_SCORE = 100
const MAX_QUESTION = 10   




/*---------------------------- Variables (state) ------------------------*/
let currentQuestion = {};
let correctAnswer = true;
let availableQuestion = [];
let questionCounter = 0;
let score = 0;
let questions = (quizQuestions)
let endQuiz = availableQuestion> MAX_QUESTION;




/*------------------------ Cached Element References --------------------*/







// const startGame = document.querySelector("#start-button")


const selected=document.querySelector('.selected');
const modeContainer=document.querySelector('.mode-container');
const quizModes=document.querySelectorAll('.modes');
const startGame=document.querySelector('.start-btn');
const question=document.getElementById('question')
const scoreTitle=document.querySelector('#scoring-container')
const questionContainter = document.querySelector('.question-container')
const answerChoices=Array.from(document.querySelectorAll(".choice-value"))

















/*----------------------------- Event Listeners -------------------------*/

selected.addEventListener('click', () => {
  modeContainer.classList.toggle('active');
})
quizModes.forEach( modeElement => {
  modeElement.addEventListener('click', () => {
    selected.innerHTML=modeElement.querySelector('label').innerHTML;
    modeContainer.classList.remove('active');
  })
})
startGame.addEventListener('click', () => {
  startGame.style.display='none';
  questionContainter.style.display="block";
})















/*-------------------------------- Functions ----------------------------*/
init()

function init () {
  questionCounter = 0
  score = 0
  availableQuestion = [...questions]
  newQuestion()
  render()
}

newQuestion= () => {
  if (availableQuestion.length === 0 || questionCounter > MAX_QUESTION ) {
    questionCounter++
  }
}







// startGame () {
//   questionCounter = 0;
//   score = 0;
//   availableQuestion = [...getGameQuestions];
//   console.log(availableQuestion);
// }

// startGame ();





















// PSEUDOCODE FOR CODE QUIZ 

// Add HTML for a START BUTTON.
// Add HTML for a PLAYER NAME INPUT.
// Add HTML for a DROP DOWN GAME MODE MENU.
// Add HTML for a SCORE PROGRESS BAR.
// Add HTML for QUESTIONS.
// Add HTML for YOUR PERFORMANCE
// Add HTML for PLAYER PERFORMANCES
// Add a container card for elements to be appended to. 
// Add cached element references for each of the starting game state elements in the JS file.
// Attach event listeners.
// Write and export functions to access the answers and questions data file.
// Recheck every function to make sure they are working properly as intended for its use. 
// Store answers in variables by tweaking with the event listeners.
// Create a render function. 
// Make a function to handle appending a card to the container element.
// Add a button to reset the quiz. 
// Add styling to ensure the quiz looks different for different media, (desktop and phone).
// Add Dark/Light Mode & a Favicon.  


