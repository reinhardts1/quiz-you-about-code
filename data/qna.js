// const quizQuestions = {

const questionsNode = [
  {
    question: " Which of the following command will show version of npm?",
    choices: ["$ npm --version", "$ node --version", "$ npm getVersion", "$ node getVersion"],
    answer: "$ npm --version",
  },
  {
    question: "By default, npm installs any dependency in the local mode.",
    choices: ["True", 'False', 'Ben loves horses', 'David hates css',],
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
    question: "Does Ben like Python",
    choices: ["Hates it just like he hates horses", "Loves it more than his cats", " Its meh", "All of the above"],
    answer: " Its meh",
  },
  {
    question: "Why does David have an obsession with CSS",
    choices: ["He loves himself some styling sheets", "Makes him happy", "Because he's a geek", "All of the above"],
    answer: "He loves himself some styling sheets",
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
    choices: ["8080","5000","3000","3000"],
    answer: "3000"
  },
  {
    question: "Which keyword creates a constant in JavaScript?",
    choices: ["let","constant","const","var"],
    answer: "const"
  },
  {
    question: "A copy of the 'real' DOM that is kept in memory is called what?",
    choices: ["Shadow DOM","DOM","React DOM","Virtual DOM"],
    answer: "Virtual DOM"
  },

]




export {
  questionsJavascript,
  questionsNode,
  questionsPython,
  questionsReact
}