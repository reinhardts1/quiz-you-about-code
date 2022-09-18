import {
  questionsJavascript,
  questionsNode,
  questionsPython
}
  from "../data/qna.js"


// console.log(getJavascriptQuestion);
// console.log(getNodeQuestion);
// console.log(getPythonQuestion);
let winner, currentQuestion, correctAnswer, score, questionCounter, answerChoices, idx, timer, seconds, availableQuestions, quizMode, quizQuestions
let quizModeBtn = document.querySelectorAll('.radio1, .radio2, .radio3');
const quizBtns = document.querySelector('.btn-container')
const quizContainer = document.querySelector('.question-container')
// console.log(quizContainer, 'g');
// console.log(quizContainer);
const ansChoices = Array.from(document.querySelectorAll('.choices'))
// console.log(ansChoices, 'array');
const resetBtn = document.querySelector('#reset-btn')
const winContainer = document.querySelector('#winner-container')
// const selectMsg=document.querySelector('#quiz-selected')
const scoreCollector = document.querySelector('#score-title')
const scoreMsg = document.querySelector('#score-msg')
const winDisplay = document.querySelector('#winner-msg')
const totalScoreMsg = document.querySelector('#total-score')
const queDisplay = document.querySelector('#question-board')
const questionTimer = document.querySelector('#timer')
const qChoices = document.querySelector('.question-value')
const startGame = document.querySelector('#start-btn')
const clickMessage = document.querySelector('.click-msg')
const header = document.querySelector('#header')
// const selectContainer=document.querySelector('.select-box')
// const quizSelections = ['Javascript', 'Node', 'Python']








startGame.addEventListener('click', () => {
  quizBtns.style.visibility = ''
  startGame.style.visibility = 'hidden'
})
quizModeBtn.forEach(function (button) {
  button.addEventListener('click', selectQuiz)

})
resetBtn.addEventListener('click', resetGame)





init()

function init() {


  score = 0
  winner = null
  questionCounter = 0
  correctAnswer = 0
  availableQuestions = []
  seconds = 30
  resetBtn.style.visibility = 'hidden'
  scoreCollector.style.visibility = 'hidden'
  totalScoreMsg.style.visibility = 'hidden'
  quizContainer.style.display = 'none'
  questionTimer.style.visibility = ''
  quizBtns.style.visibility = 'hidden'
  if (timer) {
    clearInterval(timer)
  }
}


function selectQuiz(event) {

  quizContainer.style.display = 'flex'
  quizBtns.style.display = 'none'
  resetBtn.style.visibility = ''
  header.style.visibility = 'hidden'
  if (event.target.textContent === 'Python') {
    console.log(event.target.textContent, 'button text');
    quizQuestions = questionsPython
  } if (event.target.textContent === 'Javascript') {
    console.log(event.target.textContent, 'button text');
    quizQuestions = questionsJavascript
  } if (event.target.textContent === 'Node') {
    console.log(event.target.textContent, 'button text');
    quizQuestions = questionsNode

    console.log(quizQuestions, 'Yalla Habib')
  }
  startTimer()
  renderQuestion()

}

function startTimer() {
  clearInterval(timer)

  console.log(timer, 'hello');
  timer =
    setInterval(function () {
      questionTimer.textContent = seconds + 'seconds left'
      seconds -= 1
      if (seconds < 0) {
        questionTimer.textContent = "You're out of time."
        getWinner()
      }
    }, 1000)
}




//<------------------------------------------------------------->
function getNodeQuestion() {
  idx = Math.floor(Math.random() * questionsNode.length)
  return questionsNode[idx]
}
function getPythonQuestion() {
  idx = Math.floor(Math.random() * questionsPython.length)
  return questionsPython[idx]

}
function getJavascriptQuestion() {
  idx = Math.floor(Math.random() * questionsJavascript.length)
  return questionsJavascript[idx]
}


function renderQuestion() {
  if (quizQuestions === questionsJavascript) {
    currentQuestion = getJavascriptQuestion()
    console.log(currentQuestion, typeof currentQuestion, "here")
  } else if (quizQuestions === questionsNode) {
    currentQuestion = getNodeQuestion()
    console.log(currentQuestion, typeof currentQuestion, "here")
  } else if (quizQuestions === questionsPython) {
    // currentQuestion = getPythonQuestion() 
    currentQuestion = getPythonQuestion()
    console.log(currentQuestion, typeof currentQuestion, "here")
  } if (availableQuestions.length === 4) {
    setTimeout(getWinner(), 100)
  }
  // if(!availableQuestions.includes(currentQuestion)) {
  //   availableQuestions.push(currentQuestion)
  // } else {

  if (quizQuestions.length > 0) {
    queDisplay.textContent = currentQuestion.question


    for (let i = 0; i < ansChoices.length; i++) {

      ansChoices[i].textContent = currentQuestion.choices[i]
      ansChoices[i].addEventListener('click', handleClick)

    }

    quizQuestions.splice(idx, 1)
    correctAnswer = currentQuestion.answer
  }


  // console.log(quizQuestions.length);
}

function handleClick(evt) {
  const currentAttribute = evt.target.getAttribute('class')
  if (currentAttribute !== 'question-value') {
    if (evt.target.textContent === correctAnswer) {
      evt.target.setAttribute('class', currentAttribute)
      score += 25
      answerChoices += 1
      clickMessage.textContent = "Nice Work"
    } else {
      if (score >= 25) {
        score -= 25

      }
      clickMessage.textContent = 'Unlucky'
    }
  }
  // startTimer()
  renderQuestion()
  // setTimeout(clearInterval(timer), 1000)
  questionCounter++
}





//<------------------------------------------------------------->


// <---------------------------------------------------------->
function resetGame() {

  // quizContainer.style.display = 'hidden'
  // quizBtns.style.display = 'hidden'
  // resetBtn.style.visibility = 'hidden'
  header.style.visibility = ''
  startGame.style.visibility = ""
  quizBtns.style.display = 'none'
  // quizContainer.style.display='flex'



  // let newQuiz=''
  // for (let i=0; i<ansChoices.length; i++) {
  //   const currentQuiz=ansChoices[i].getAttribute('class')
  //   if(currentQuiz.includes('wrong')) {
  //     answerChoices[i].setAttribute('class', newQuiz)
  //   }
  // }

  window.location.reload()
}
function getWinner() {
  if (quizQuestions.length <= 1) {
    if (totalScoreMsg == 100) {
      winner = true
    }
    else {
      winner = false
    }
    renderWinner()
  }
  else if (questionTimer.textContent=== "You're out of time.") {
    winner= false
    renderWinner()
  }
  
}


function renderWinner() {
    if (winner === true) {
      winDisplay.style.display = `Good Job!`
    } else if (winner === false) {
      winDisplay.style.display = `Maybe next time!`
    }

    scoreMsg.textContent = `Your score: ${score}`
  }



















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


