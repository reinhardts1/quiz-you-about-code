const quizQuestions = {

  questionsNode:[
  {
    question: "How are Node based web servers are different from traditional web servers?",
    choices:["Node based server process request much faster than traditional server.","Node based server uses a single threaded model and can services much larger number of requests than traditional server like Apache HTTP Server.","There is not much difference between the two.","There is not much difference between the two.","None of the above."],
    answer:"Node based server uses a single threaded model and can services much larger number of requests than traditional server like Apache HTTP Server.",
  },
  {
    question: "By default, npm installs any dependency in the local mode.",
    choices:["true",'false','Ben loves horses','David hates css',],
    answer:"True",
  },
  {
    question: "Which of the following is true with respect to Node.",
    choices:["Every API of Node js are asynchronous.","Node being a single thread, and uses async function calls to maintain the concurrency." ,"Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.","All of the above."],
    answer:"All of the above.",
  },
  {
    question: " Which of the following is true about global objects in Node applications?",
    choices:["Global objects are global in nature and they are available in all modules.","Global objects are nore required to be included in application, rather they can be used directly.","Both of the above.","None of the above."],
    answer:"Both of the above.",
  },
],
  questionsJavascript:[

  {
    question:"Inside which HTML element do we put the JavaScript?",
    choices:["js tag","script tag","body tag","javascript tag"],
    answer:"script tag",
  },

  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
    choices:["document.getElementById('demo').innerHTML='hello world!';","#demo.innerHTML='hello world!';","document.querySelector('demo').innerHTML = 'hello world';","None of the above"],
    answer:"document.getElementById('demo').innerHTML='hello world!';",
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices:["<script href = 'xxx.js'>","<script name = 'xxx.js'>","<script src = 'xxx.js'>","<link src = 'xxx.js'>"],
    answer:"<script href = 'xxx.js'>",
  },
  {
    question: "How does a FOR loop start?",
    choices:["for i = 1 to 5","for (i <= 5; i++)","for (i = 0; i <= 5; i++)  ","for (i = 0; i <= 5)"],
    answer:"for (i = 0; i <= 5; i++)  ",
  },
],
  questionsPython: [
  {
    question:"What is a correct syntax to output 'Hello World' in Python?",
    choices:["echo 'Hello World'","echo('Hello World');","print('Hello World')","p('Hello World')"],
    answer:"print('Hello World')  ",
  },
  {
    question:"What is the correct file extension for Python files?",
    choices:[".pyt",".py",".pyth",".pt"],
    answer:".py",
  },
  {
    question:"Does Ben like Python",
    choices:["Hates it just like he hates horses","Loves it more than his cats"," Its meh","All of the above"],
    answer:" Its meh",
  },
  {
    question:"Why does David have an obsession with CSS",
    choices: ["He loves himself some styling sheets","Makes him happy","Because he's a geek","All of the above"],
    answer:"He loves himself some styling sheets",
  }
  
]
}

function getNodeQuestion() {
  return quizQuestions.questionsNode[Math.floor(Math.random() * quizQuestions.questionsNode.length)]
}
function getPythonQuestion() {
  return quizQuestions.questionsPython[Math.floor(Math.random() * quizQuestions.questionsPython.length)]
}
function getJavascriptQuestion() {
  return quizQuestions.questionsJavascript[Math.floor(Math.random() * quizQuestions.questionsJavascript.length)]
}

// function getNodeQuestion() {
//   return quizQuestions.questionsNode[Math.floor(Math.random() * quizQuestions.questionsNode.length)]
// }
// function getJavascriptQuestion() {
//   return quizQuestions.questionsJavascript[Math.floor(Math.random() * quizQuestions.questionsJavascript.length)]
// }
// function getPythonQuestion() {
//   return quizQuestions.questionsPython[Math.floor(Math.random() *
//     quizQuestions.questionsPython.length)]
// }


export {
  getNodeQuestion,
  getJavascriptQuestion,
  getPythonQuestion
}