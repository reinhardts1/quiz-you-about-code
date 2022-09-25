// const quizQuestions = {

const questionsNode = [
  {
    question: " Which of the following command will show version of npm?",
    choices: ["$ npm --version", "$ node --version", "$ npm getVersion", "$ node getVersion"],
    answer: "$ npm --version",
  },
  {
    question: "By default, npm installs any dependency in the local mode.",
    choices: ["True", 'False', 'Npm installs on both local and cloud', 'None of the above',],
    answer: "True",
  },
  {
    question: "Which of the following module is required for path specific operations?",
    choices: ["os module","fs module","path module","none of the above"],
    answer: "path module",
  },
  {
    question: "Which of the following is true about EventEmitter.on property?",
    choices: ["on property is used to fire event.","on property is used to bind a function with the event.","on property is used to locate an event handler.","none of the above"],
    answer: "on property is used to bind a function with the event.",
  },
]
const questionsJavascript = [

  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["js tag", "script tag", "body tag", "javascript tag"],
    answer: "script tag",
  },

  {
    question: "How to write an IF statement in JavaScript?",
    choices: ['if i = 5 then','if (i == 5)','if i == 5 then','if i = 5'],
    answer: "if (i == 5)",
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script href = 'xxx.js'>", "<script name = 'xxx.js'>", "<script src = 'xxx.js'>", "<link src = 'xxx.js'>"],
    answer: "<script src = 'xxx.js'>",
  },
  {
    question: "How does a FOR loop start?",
    choices: ["for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)  ", "for (i = 0; i <= 5)"],
    answer: "for (i = 0; i <= 5; i++)  ",
  },
]
const questionsPython = [
  {
    question: "What is a correct syntax to output 'Hello World' in Python?",
    choices: ["echo 'Hello World'", "echo('Hello World');", "print('Hello World')", "p('Hello World')"],
    answer: "print('Hello World')  ",
  },
  {
    question: "What is the correct file extension for Python files?",
    choices: [".pyt", ".py", ".pyth", ".pt"],
    answer: ".py",
  },
  {
    question: "What is the correct way to create a function in Python?",
    choices: ["create myFunction():", "def myFunction():", "function myfunction():", "None of the above"],
    answer: "def myFunction():",
  },
  {
    question: "What is a correct syntax to return the first character in a string?",
    choices: ["x = 'Hello'[0]", "x = 'Hello'.sub(0, 1)", "x = sub('Hello', 0, 1)", "x = ('hello'.sub, 0, 1)"],
    answer: "x = 'Hello'[0]",
  }

]
const questionsReact = [
  {
    question: "What command is used to start the React local development server?",
    choices: ["npm serve","npm run dev","npm build","npm start"],
    answer: "npm start"
  },
  {
    question: "What is the default local host port that a React development server uses?",
    choices: ["8080","5000","3000","3500"],
    answer: "3000"
  },
  {
    question: "In React.js, how we can pass the data from one component to another in React.js ?",
    choices: ["	SetState","Render with arguments","Props","PropTypes"],
    answer: "Props"
  },
  {
    question: "Which of the following function is true about changing the state in React.js ?",
    choices: ["this.State{}","this.setState","this.setChangeState","All of the above"],
    answer: "this.setState"
  },

]

export {
  questionsJavascript,
  questionsNode,
  questionsPython,
  questionsReact
}