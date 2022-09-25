import {
  questionsJavascript,
  questionsNode,
  questionsPython,
  questionsReact
} from "../data/qna.js"

let winner, currentQuestion, correctAnswer, score, answerChoices, idx, timer, seconds, availableQuestions, quizQuestions
let quizModeBtn = document.querySelectorAll('.radio1, .radio2, .radio3, .radio4',);
const quizBtns = document.querySelector('.btn-container')
const quizContainer = document.querySelector('.question-container')
const ansChoices = Array.from(document.querySelectorAll('.choices'))
const resetBtn = document.querySelector('#reset-btn')
const winContainer = document.querySelector('#winner-container')
const scoreMsg = document.querySelector('#score-msg')
const winDisplay = document.querySelector('#winner-msg')
const totalScoreMsg = document.querySelector('#total-score')
const queDisplay = document.querySelector('#question-board')
const questionTimer = document.querySelector('#timer')
const startGame = document.querySelector('#start-btn')
const clickMessage = document.querySelector('.click-msg')
const header = document.querySelector('#header')

const correctSound = new Audio('../assets/audios/correct sound.wav')
const inccorectSound = new Audio('../assets/audios/incorrect sound.mp3')

startGame.addEventListener('click', () => {
  quizBtns.style.visibility = ''
  startGame.style.display = 'none'
})
quizModeBtn.forEach(function (button) {
  button.addEventListener('click', selectQuiz)
})
resetBtn.addEventListener('click', resetGame)

init()

function init() {
  score = 0
  winner = null
  correctAnswer = 0
  availableQuestions = []
  seconds = 30
  resetBtn.style.visibility = 'hidden'
  totalScoreMsg.style.display = 'none'
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
    quizQuestions = questionsPython
  } if (event.target.textContent === 'Javascript') {
    quizQuestions = questionsJavascript
  } if (event.target.textContent === 'Node') {
    quizQuestions = questionsNode
  } if (event.target.textContent === 'React') {
    quizQuestions = questionsReact
  }
  startTimer()
  renderQuestion()
}

function startTimer() {
  clearInterval(timer)
  timer =
    setInterval(function () {
      questionTimer.textContent = seconds + ' seconds left'
      seconds -= 1
      if (seconds < 0) {
        questionTimer.textContent = "You're out of time."
        getWinner()
      }
    }, 1000)
}

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

function getReactQuestions() {
  idx = Math.floor(Math.random() * questionsReact.length)
  return questionsReact[idx]
}

function renderQuestion() {
  if (quizQuestions === questionsJavascript) {
    currentQuestion = getJavascriptQuestion()

  } else if (quizQuestions === questionsNode) {
    currentQuestion = getNodeQuestion()

  } else if (quizQuestions === questionsPython) {
    currentQuestion = getPythonQuestion()

  } else if (availableQuestions.length === 4) {

  } else if (quizQuestions = questionsReact) {
    currentQuestion = getReactQuestions()

  } setTimeout(getWinner(), 1000)
  if (quizQuestions.length > 0) {
    queDisplay.textContent = currentQuestion.question
    for (let i = 0; i < ansChoices.length; i++) {
      ansChoices[i].textContent = currentQuestion.choices[i]
      ansChoices[i].addEventListener('click', handleClick)
    }
    quizQuestions.splice(idx, 1)
    correctAnswer = currentQuestion.answer
  }
}

function handleClick(evt) {
  const currentAttribute = evt.target.getAttribute('class')
  if (currentAttribute !== 'question-value') {
    if (evt.target.textContent === correctAnswer) {
      evt.target.setAttribute('class', currentAttribute)
      correctSound.play()
      score += 25
      answerChoices += 1
      clickMessage.textContent = 'Nice Work'
    } else {
      if (score >= 25) {
        score -= 25
      }
      inccorectSound.play()
      clickMessage.textContent = 'Unlucky'
    }
  }
  renderQuestion()
}

function resetGame() {
  header.style.visibility = ''
  startGame.style.visibility = ''
  quizBtns.style.display = 'none'
  window.location.reload()
}

function getWinner() {
  if (quizQuestions.length <= 0) {
    if (score == 100) {
      winner = true
    }
    else {
      winner = false
    }
  }
  else if (questionTimer.textContent === "You're out of time.") {
    winner = false
  }
  renderWinner()
}

function renderWinner() {
  if (winner === true) {
    winContainer.style.display = 'flex'
    quizContainer.style.visibility = 'hidden'
    winDisplay.textContent = 'Congratulations, You got 4/4 correct!'

  } else if (winner === false) {
    winContainer.style.display = 'flex'
    quizContainer.style.visibility = 'hidden'
    winDisplay.textContent = 'You Lose! Maybe you need a bit more practice!'
  }
  scoreMsg.textContent = `Your score: ${score}`
}


















