import {getJavascriptQuestion,getNodeQuestion, getPythonQuestion} 
from "../data/qna.js"




/*-------------------------------- Constants ----------------------------*/
const  




/*---------------------------- Variables (state) ------------------------*/

let winner, currentQuestion, correctAnswer, score, questionCounter, answerChoices, idx, timer, seconds

// let currentQuestion = {};
// let correctAnswer = true;
// let availableQuestion = [];
// let questionCounter = 0;
// let score = 0;
// let questions = (quizQuestions)
// let endQuiz = availableQuestion> MAX_QUESTION;




/*------------------------ Cached Element References --------------------*/
const startBtn = document.querySelector("#start-button")
const modeContainer=document.querySelector('.mode-container');
const selected=document.querySelector('.selected');
const quizModes=document.querySelectorAll('.modes');
const questionContainter = document.querySelector('.question-container')
const startGame=document.querySelector('.start-btn');
const question=document.getElementById('question')
const scores=document.querySelector('#score')





























/*----------------------------- Event Listeners -------------------------*/

// selected.addEventListener('click', () => {
//   modeContainer.classList.toggle('active');
// })
// quizModes.forEach( modeElement => {
//   modeElement.addEventListener('click', () => {
//     selected.innerHTML=modeElement.querySelector('label').innerHTML;
//     modeContainer.classList.remove('active');
//   })
// })
// startGame.addEventListener('click', () => {
//   startGame.style.display='none';
//   questionContainter.style.display="block";
// })















/*-------------------------------- Functions ----------------------------*/
// init()

// function init () {
//   questionCounter = 0
//   score = 0
//   availableQuestion = [...questions]


//   newQuestions()
//   render()
  
// }

// newQuestions= () => {
  
//   const questionsIndex=Math.floor(Math.random() * availableQuestion.length)
//   currentQuestion = availableQuestion[questionsIndex]
//   question.innerText = currentQuestion


//   answerChoices.forEach(choice => {
//   const number = choice.dataset['number']
//   choice.innerText = currentQuestion['choice' + number]
// })

//   availableQuestion.splice(questionsIndex, 1)

//   correctAnswer= true

// }

// answerChoicesCounter= () => {
//   choice.addEventListener('click', evt => {
//     if (!correctAnswer) 
//     return

//     correctAnswer = false
//     const choicePicked = evt.target
//     const answerPicked = choicePicked.dataset['number']
//     let classToApply = answerPicked == currentQuestion.answer ? 'correct': 'incorrect'
//     choicePicked.parentElement.classList.add(classToApply)
    
//     setInterval(() => {
//       choicePicked.parentElement.classList.add(classToApply)
//       newQuestions()
//     })

//   })
  

// }





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


