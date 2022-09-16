import {getJavascriptQuestion,getNodeQuestion, getPythonQuestion} 
from "../data/qna.js"
const quizModes = ['JAVASCRIPT','NODE','PYTHON']
let winner, currentQuestion, correctAnswer, score, questionCounter, answerChoices, idx, timer, seconds, availableQuestions, quizMode
const quizModeBtn=document.querySelector('.select-box')
const quizContainer=document.querySelector('.question-container')
const ansChoices=Array.from(document.querySelectorAll('.choice'))
const resetBtn=document.querySelector('#reset-btn')
const winContainer=document.querySelector('#winner-container')
const selectMsg=document.querySelector('#quiz-selected')
const scoreCollector=document.querySelector('#score-title')
const scoreMsg=document.querySelector('#score-number')
const winDisplay=document.querySelector('#winner-msg')
const totalScoreMsg=document.querySelector('#total')
const queDisplay=document.querySelector('#question-board')
const questionTimer=document.querySelector('#timer')
const userAnswer=document.querySelector('.question-value')
const textAnimations=document.querySelector('.text')

quizModeBtn.addEventListener('click', quizModes)
resetBtn.addEventListener('click', init)

init()

function init() {
  if (timer) {
    clearInterval(timer)
  }
score=0
winner=null
questionCounter=0
correctAnswer=0
availableQuestions=[]
seconds=80
resetBtn.style.visibility='hidden'
selectMsg.style.visibility='hidden'
scoreCollector.style.visibility='hidden'
totalScoreMsg.style.visibility='hidden'
queDisplay.style.visibility='hidden'
userAnswer.style.display="none"
questionTimer.style.visibility='hidden'



}
function selectQuiz(evt) {
  if (evt.target.textContent !== 'random') {
    mode=evt.target.textContent
    selectMsg.textContent=`${evt.target.textContent.toUpperCase()}`
  } else {
    idx=Math.floor(Math.random() * quizModes.length)
    mode=quizModes[idx]
    selectMsg.textContent=`${mode.toUpperCase()}`
    scoreCollector.style.visibility='visible'
    quizContainer.style.display='none'
  }
  startTimer()
}
function startTimer()  {
  clearInterval(timer)
  timer= (setInterval(function () {
    seconds-- 
    if(seconds<30) {
      questionTimer.textContent=`0${seconds}`
    } else if (seconds>=30) {
      questionTimer.textContent=`${seconds}`
    } if (seconds===0) {
      getWinner()
      
    }
  }, 100))
  renderQuestion()
}
function renderQuestion() {
  scoreCollector.textContent=`SCORE ${score}`
  if (mode==='JAVASCRIPT') {
    currentQuestion=getJavascriptQuestion()
  } else if (mode==='NODE') {
    currentQuestion=getNodeQuestion()
  } else if (mode==='PYTHON') {
    currentQuestion=getPythonQuestion()
  }
  if (availableQuestions.length===4) {
    setTimeout(getWinner(),100)
  }
    if(!availableQuestions.includes(currentQuestion)) {
      availableQuestions.push(currentQuestion) 
    } else renderQuestion()
}
queDisplay.textContent=currentQuestion.questions
for(let i=0; i<ansChoices.length; i++) {
  ansChoices[i].textContent=currentQuestion.choice[i]
  ansChoices[i].addEventListener('click', onChooseOption)
}


// console.log(quizModes);

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


