const questionsNode = 
[
  {
    question: "How are Node based web servers are different from traditional web servers?",
    choices: ["Node based server process request much faster than traditional server.","Node based server uses a single threaded model and can services much larger number of requests than traditional server like Apache HTTP Server.","There is not much difference between the two.", "None of the above."],
    answer:1
  },
  {
    question: "By default, npm installs any dependency in the local mode.",
    choices: ["True", "False"],
    answer:0
  },
  {
    question: "Which of the following is true with respect to Node.",
    choices: ["Every API of Node js are asynchronous.","Node being a single thread, and uses async function calls to maintain the concurrency.","Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.","All of the above."],
    answer:3
  },
  {
    question: " Which of the following is true about global objects in Node applications?",
    choices: ["Global objects are global in nature and they are available in all modules.","Global objects are nore required to be included in application, rather they can be used directly.","Both of the above.","None of the above."],
    answer:2
  }
]

const questionsJavascript = 
[
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["js tag","script tag","body tag","javascript tag"],
    answer:1
  },



  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
    choices: ["document.getElementById('demo').innerHTML='hello world!';","#demo.innerHTML='hello world!';" ],
    answer:0
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script href = 'xxx.js'>","<script name = 'xxx.js'>", "<script src = 'xxx.js'>"],
    answer:0
  },
  {
    question: "",
    choices: "",
    answer:1
  }
]

const questionsPython = 
[
  {
    question: "",
    choices: "",
    answer:1
  },
  {
    question: "",
    choices: "",
    answer:1
  },
  {
    question: "",
    choices: "",
    answer:1
  },
  {
    question: "",
    choices: "",
    answer:1
  }
]



const questionsReact = 
[
  {
    question: "",
    choices: "",
    answer:1
  },
  {
    question: "",
    choices: "",
    answer:1
  },
  {
    question: "",
    choices: "",
    answer:1
  },
  {
    question: "",
    choices: "",
    answer:1
  }
]

function getQuestionNode() {
  for ( let i = 0; i < questionsNode.length; i++ ) {
    let question = questions[i].question;
  }
}