const quizQuestions = 
[
  {
    question: "How are Node based web servers are different from traditional web servers?",
    choice1: "Node based server process request much faster than traditional server.",
    choice2:"Node based server uses a single threaded model and can services much larger number of requests than traditional server like Apache HTTP Server.",
    choice3:"There is not much difference between the two.",
    choice4:"None of the above.", 
    answer:2,
  },
  {
    question: "By default, npm installs any dependency in the local mode.",
    choice1:"True",
    choice2:"False",
    choice3:"Ben Loves horses",
    choice4:"David hates css",
    answer:1,
  },
  {
    question: "Which of the following is true with respect to Node.",
    choice1:"Every API of Node js are asynchronous.",
    choice2:"Node being a single thread, and uses async function calls to maintain the concurrency." ,
    choice3:"Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.",
    choice4:"All of the above." ,

    answer:4,
  },
  {
    question: " Which of the following is true about global objects in Node applications?",
    choice1:"Global objects are global in nature and they are available in all modules.",
    choice2:"Global objects are nore required to be included in application, rather they can be used directly.",
    choice3:"Both of the above.",
    choice4:"None of the above.",
    answer:3,
  },

  {
    question:"Inside which HTML element do we put the JavaScript?",
    choice1: "js tag",
    choice2:"script tag",
    choice3:"body tag",
    choice4:"javascript tag",
    answer:2,
  },

  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
    choice1:"document.getElementById('demo').innerHTML='hello world!';",
    choice2:"#demo.innerHTML='hello world!';",
    choice3:"document.querySelector('demo').innerHTML = 'hello world';",
    choice4:"None of the above",
    answer:1,
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1:"<script href = 'xxx.js'>",
    choice2:"<script name = 'xxx.js'>",
    choice3:"<script src = 'xxx.js'>",
    choice4:"<link src = 'xxx.js'>",
    answer:1,
  },
  {
    question: "How does a FOR loop start?",
    choice1:"for i = 1 to 5",
    choice2:"for (i <= 5; i++)",
    choice3:"for (i = 0; i <= 5; i++)  ",
    choice4:"for (i = 0; i <= 5)",
    answer:3,
  },

  {
    question:"What is a correct syntax to output 'Hello World' in Python?",
    choice1: "echo 'Hello World'",
    choice2:"echo('Hello World');",
    choice3:"print('Hello World')  ",
    choice4:"p('Hello World')",
    answer:3,
  },
  {
    question:"What is the correct file extension for Python files?",
    choice1: ".pyt",
    choice2:".py",
    choice3:".pyth",
    choice4:".pt",
    answer:2,
  },
]





export {
  quizQuestions
}