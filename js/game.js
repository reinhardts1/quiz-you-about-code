import {getNodeQuestion, getJavascriptQuestion, getPythonQuestion} 
from "../data/qna.js"


// console.log(getJavascriptQuestion);
// console.log(getNodeQuestion);
// console.log(getPythonQuestion);
let winner, currentQuestion, correctAnswer, score, questionCounter, answerChoices, idx, timer, seconds, availableQuestions, quizMode
const quizModeBtn=document.querySelector('.btn-container');
const quizContainer=document.querySelector('.question-container')
// console.log(quizContainer);
const ansChoices=Array.from(document.querySelectorAll('.choices'))
// console.log(ansChoices);
const resetBtn=document.querySelector('#reset-btn')
const winContainer=document.querySelector('#winner-container')
// const selectMsg=document.querySelector('#quiz-selected')
const scoreCollector=document.querySelector('#score-title')
const scoreMsg=document.querySelector('#score-number')
const winDisplay=document.querySelector('#winner-msg')
const totalScoreMsg=document.querySelector('#total-score')
const queDisplay=document.querySelector('#question-board')
const questionTimer=document.querySelector('#timer')
const questionChoices=document.querySelector('.question-value')
const startGame=document.querySelector('#start-btn')
// const selectContainer=document.querySelector('.select-box')




const quizSelections = ['Javascript','Node','Python']



startGame.addEventListener('click', () => {
  quizModeBtn.style.visibility="";
  startGame.style.visibility='hidden'
})
quizModeBtn.addEventListener('click', selectQuiz)
resetBtn.addEventListener('click', init)





init()

function init() {
  score=0
  winner=null
  questionCounter=0
  correctAnswer=0
  availableQuestions=[]
  seconds= 30
  resetBtn.style.visibility='hidden'
  scoreCollector.style.visibility='hidden'
  totalScoreMsg.style.visibility='hidden'
  queDisplay.style.visibility='hidden'
  questionChoices.style.visibility="hidden"
  questionTimer.style.visibility='hidden'
  quizModeBtn.style.visibility='hidden'
  if (timer) {
    clearInterval(timer)
  }
}


function selectQuiz(event) {
  quizContainer.style.display='flex'
// function selectQuiz(evt) {
//   scoreCollector.style.visibility='visible'
//   quizContainer.style.display='none'
//   selectMsg.style.visibility='visible'
//   resetBtn.style.visibility='visible'
//   scoreCollector.style.visibility='visible'
//   quizContainer.style.display='flex'
//   selectContainer.style.display='none'

  if (event.target.textContent !== "something") {
    quizQuestions = event.target.textContent
  } else {
    idx = Math.floor(Math.random() * quizSelections.length)
    quizQuestions = quizSelections[idx]
  }
  startTimer()
  renderQuestion()
}
function startTimer() {
  clearInterval(timer)
  timer= 
    (setInterval(function() {
    seconds-- 
    if (seconds===0) {
      getWinner()
    }
  }, 1000))
}




//<------------------------------------------------------------->

function renderQuestion() {
  if  (quizQuestions = 'Javascript') {
    currentQuestion = getJavascriptQuestion()
  } else if (quizQuestions = 'Node') {
    currentQuestion = getNodeQuestion()
  } else if (quizQuestions = 'Python') {
    currentQuestion = getPythonQuestion()
  }
  renderQuestion()
    

}

// function renderQuestion() {
//   scoreCollector.textContent=`SCORE ${score}`
//   if (quizQuestions==='Javascript') {
//     currentQuestion=getJavascriptQuestion()
//   } else if (quizQuestions==='Node') {
//     currentQuestion=getNodeQuestion()
//   } else if (quizQuestions==='Python') {
//     currentQuestion=getPythonQuestion()
//   }
//   if (availableQuestions.length===4) {
//     setTimeout(getWinner(),100)
//   }
//     if(!availableQuestions.includes(currentQuestion)) {
//       availableQuestions.push(currentQuestion) 
//     } else {
//       renderQuestion()
//       // console.log();
// }
// queDisplay.textContent=currentQuestion
// for(let i=0; i<ansChoices.length; i++) {
//   ansChoices[i].textContent=currentQuestion.choices[i]
//   ansChoices[i].addEventListener('click', checkOptions)

//   }
//   correctAnswer=currentQuestion.answer
// }





//<------------------------------------------------------------->

// function checkOptions(evt) {
//   const currentAttribute=evt.target.getAttribute('class')
//   if(currentAttribute!== 'question-value') {
//     if(evt.target.textContent=== correctAnswer) {
//       evt.target.setAttribute('class',currentAttribute)
//       score += 25
//       answerChoices += 1
//     } else {
//       if (score >= 25) {
//         score -= 25
//       }
//     }
//   }
//   setTimeout(resetGame, 100)
//   questionCounter++
// }
// <---------------------------------------------------------->
// function resetGame() {
//   let newQuiz=''
//   for (let i=0; i<ansChoices.length; i++) {
//     const currentQuiz=ansChoices[i].getAttribute('class')
//     if(currentQuiz.includes('wrong')) {
//       answerChoices[i].setAttribute('class', newQuiz)
//     }
//   }
//   renderQuestion()
// }
// function getWinner() {
//   clearInterval(timer) 
//   if(ansChoices > 2) {
//     winner = true
//   } else {
//     winner = false
//   }
//   renderWinner()
// }
// function renderWinner() {
//   if (winner===true) {
//     winDisplay.style.display=`Good Job!`
//   } else if (winner===false) {
//     winDisplay.style.display=`Maybe next time!`
//   }
  
// scoreMsg.textContent=`Your score: ${score}`
// }























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


