import { getJavascriptQuestion, getNodeQuestion, getPythonQuestion, getReactQuestion} 
from "../data/qna.js"



/*-------------------------------- Constants ----------------------------*/




/*---------------------------- Variables (state) ------------------------*/




/*------------------------ Cached Element References --------------------*/

// console.log(questionsReact)
// console.log(questionsPython)
// console.log(questionsNode)
// console.log(questionsJavascript)





const startGame = document.querySelector("#start-button")
const changeMode = document.querySelector("#quiz-button")
const questionContainer = document.getElementById("question-container")
const playerInput = document.querySelector('player-input')









/*----------------------------- Event Listeners -------------------------*/

changeMode.addEventListener('click', () => {
  console.log(getJavascriptQuestion())
})
startGame.addEventListener('click', () => {
  console.log('yalla')

})








/*-------------------------------- Functions ----------------------------*/

























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


