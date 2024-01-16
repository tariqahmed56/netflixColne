const quizData = [
  {
		question: "What is the difference between asexual and sexual reproduction?",
		options: [
		  { text: "Asexual reproduction involves the fusion of gametes, while sexual reproduction does not.", isCorrect: false },
		  { text: "Asexual reproduction produces offspring that are genetically identical to the parent, while sexual reproduction produces offspring that are genetically diverse.", isCorrect: true },
		  { text: "Asexual reproduction is only found in plants, while sexual reproduction is only found in animals.", isCorrect: false },
		  { text: "Asexual reproduction does not involve the fusion of gametes, while sexual reproduction does.", isCorrect: false }
		]
	  },
    {
      question: "What is the difference between spermatogenesis and oogenesis?",
      options: [
        { text: "Spermatogenesis produces four haploid cells, while oogenesis produces one haploid cell.", isCorrect: false },
        { text: "Spermatogenesis occurs in the testes, while oogenesis occurs in the ovaries.", isCorrect: false },
        { text: "Spermatogenesis produces sperm cells, while oogenesis produces egg cells.", isCorrect: false },
        { text: "All of the above.", isCorrect: true }
      ]
      },
      {
      question: "What is the menstrual cycle?",
      options: [
        { text: "The process by which an egg is released from the ovary.", isCorrect: false },
        { text: "The process by which the uterus sheds its lining.", isCorrect: false },
        { text: "The process by which the egg is fertilized by sperm.", isCorrect: false },
        { text: "The monthly cycle of changes that occur in the female reproductive system, including the release of an egg and the buildup and shedding of the uterine lining.", isCorrect: true }
      ]
      },
      {
      question: "What is the role of the placenta?",
      options: [
        { text: "To produce hormones that regulate the menstrual cycle.", isCorrect: false },
        { text: "To produce milk for the newborn.", isCorrect: false },
        { text: "To protect the developing embryo from harm.", isCorrect: false },
        { text: "To provide oxygen and nutrients to the developing fetus and remove waste products.", isCorrect: true }
      ]
      },
  {
    topic: "Quadratic Equations",
    question: "What is the standard form of a quadratic equation?",
    options: [
      { text: "ax^2 + bx + c = 0", isCorrect: true },
      { text: "mx + b = 0", isCorrect: false },
      { text: "x^2 + 2x - 1 = 0", isCorrect: false },
      { text: "3x - 5 = 0", isCorrect: false },
    ],
  },
  {
    topic: "Area Related to Circle",
    question: "What is the formula for the area of a circle?",
    options: [
      { text: "A = πr", isCorrect: false },
      { text: "A = 2πr", isCorrect: false },
      { text: "A = πr^2", isCorrect: true },
      { text: "A = 0.5πr", isCorrect: false },
    ],
  },
  {
    topic: "Matrices",
    question: "What is the identity matrix?",
    options: [
      { text: "A matrix with all elements equal to 1", isCorrect: false },
      { text: "A matrix with all elements equal to 0", isCorrect: false },
      {
        text: "A square matrix with diagonal elements equal to 1 and others equal to 0",
        isCorrect: true,
      },
      { text: "A matrix with random elements", isCorrect: false },
    ],
  },
  {
    topic: "Quadratic Equations",
    question: "What is the quadratic formula?",
    options: [
      { text: "x = (-b ± √(b^2 - 4ac)) / 2a", isCorrect: true },
      { text: "x = a + b + c", isCorrect: false },
      { text: "x = 2a - b", isCorrect: false },
      { text: "x = √(a^2 + b^2)", isCorrect: false },
    ],
  },
  {
    topic: "JavaScript Fundamentals",
    question: 'What is the result of the expression 5 + "10" in JavaScript?',
    options: [
      { text: "510", isCorrect: true },
      { text: "15", isCorrect: false },
      { text: "501", isCorrect: false },
      { text: "undefined", isCorrect: false },
    ],
  },
  {
    topic: "Promises in JavaScript",
    question:
      "Explain the difference between Promises and Callbacks in JavaScript.",
    options: [
      {
        text: "Promises are more readable and avoid callback hell.",
        isCorrect: true,
      },
      {
        text: "Callbacks are synchronous, while Promises are asynchronous.",
        isCorrect: false,
      },
      {
        text: "Promises are only used in front-end development.",
        isCorrect: false,
      },
      {
        text: "Callbacks are a modern feature, and Promises are deprecated.",
        isCorrect: false,
      },
    ],
  },
  {
    topic: "ES6 Arrow Functions",
    question:
      "What is an arrow function in JavaScript, and how does it differ from regular functions?",
    options: [
      {
        text: "Arrow functions have a shorter syntax and don’t bind their own `this`.",
        isCorrect: true,
      },
      { text: "Arrow functions cannot have parameters.", isCorrect: false },
      {
        text: "Regular functions are deprecated in favor of arrow functions.",
        isCorrect: false,
      },
      {
        text: "Arrow functions can only be used for asynchronous operations.",
        isCorrect: false,
      },
    ],
  },
  {
    topic: "Closures in JavaScript",
    question: "Explain what a closure is in JavaScript and provide an example.",
    options: [
      {
        text: "A closure is a function bundled with its lexical environment.",
        isCorrect: true,
      },
      {
        text: "Closures are only applicable to classes in JavaScript.",
        isCorrect: false,
      },
      { text: "A closure is a type of loop in JavaScript.", isCorrect: false },
      {
        text: "Closures are used for creating random numbers in JavaScript.",
        isCorrect: false,
      },
    ],
  },
  {
    topic: "DOM Manipulation",
    question:
      'How would you select all elements with the class name "example" using JavaScript?',
    options: [
      { text: 'document.querySelectorAll (".example")', isCorrect: true },
      { text: 'document.getElementByClassName ("example")', isCorrect: false },
      { text: 'document.selectElementsByClass ("example")', isCorrect: false },
      { text: 'document.find (".example")', isCorrect: false },
    ],
  },
  {
    topic: "Area Related to Circle",
    question: "What is the circumference formula of a circle?",
    options: [
      { text: "C = πd", isCorrect: false },
      { text: "C = 2πr", isCorrect: true },
      { text: "C = 0.5πr^2", isCorrect: false },
      { text: "C = √(r^2 + h^2)", isCorrect: false },
    ],
  },
  {
    topic: "Matrices",
    question:
      "What is the result of multiplying a matrix by the identity matrix?",
    options: [
      { text: "The original matrix", isCorrect: true },
      { text: "A matrix of zeros", isCorrect: false },
      { text: "A matrix of ones", isCorrect: false },
      { text: "An empty matrix", isCorrect: false },
    ],
  },
  {
    topic: "Quadratic Equations",
    question: "What are the roots of the equation x^2 - 9 = 0?",
    options: [
      { text: "x = 3 and x = -3", isCorrect: true },
      { text: "x = 9", isCorrect: false },
      { text: "x = 0", isCorrect: false },
      { text: "x = 1 and x = -1", isCorrect: false },
    ],
  },
  {
    topic: "Area Related to Circle",
    question: "What is the area of a sector in a circle?",
    options: [
      { text: "A = πr", isCorrect: false },
      { text: "A = 2πr", isCorrect: false },
      { text: "A = 0.5πr^2", isCorrect: false },
      { text: "A = (θ/360) * πr^2", isCorrect: true },
    ],
  },
  {
    topic: "Cube roots of unity.",
    question: "what are Cube roots of unity?",
    options: [
      {text: "1" , isCorrect: false},
      {text: "-1+i(sqrt3)/2", isCorrect: false},
      {text: "-1-i(sqrt3)/2", isCorrect:false},
      {text: "All are correct", isCorrect: true}
    ]
  },
  {
    topic: "Properties of omega",
    question: "What is the sum of all cube roots of unity?",
    options:[
      {text: 'w(omega)', isCorrect:false},
      {text: "1", isCorrect:false},
      {text: "0", isCorrect: true},
      {text:'6',isCorrect:false}
    ]
  },
  {
    topic: "Properties of omega",
    question: "Product Of complex roots of unity is ____?",
    options: [
      {text: "w.w", isCorrect:false},
      {text:'1', isCorrect:true},
      {text: 'w<sup>2<sup/>', isCorrect:false},
      {text:"0", isCorrect: false}
    ]
  }
];
console.log(quizData)
let container = document.querySelector(".container");
let button = document.createElement("button");
button.textContent = "Start Quiz";
container.appendChild(button);

let j = 0;
let scoreNum = 0;
let i = -1;
function GenerateHTML() {
  i++;
  return `  <div class="total">Total Questions:${quizData.length}</div>
<div class="score">Score: <span class="Score">${scoreNum}</span></div>
<div class="questions-container">
    <h3>${i}. ${quizData[j].question}</h3>
</div>
<div class="optionsContainer">

    <form>
        <label for="op1" class='label' data-correct='${
          quizData[j].options[0].isCorrect
        }'>
          <input type="radio" name="group1" id="op1"> <span class="Option">${
            quizData[j].options[0].text
          }</span> 
          <div class="hide"></div>
        </label>
        <label for="op2" class='label' data-correct='${
          quizData[j].options[1].isCorrect
        }'>
          <input type="radio" name="group1" id="op2"> <span class="Option">${
            quizData[j].options[1].text
          }</span>
          <div class="hide"></div>
        </label>
        <label for="op3" class='label' data-correct='${
          quizData[j].options[2].isCorrect
        }'>
          <input type="radio" name="group1" id="op3"> <span class="Option">${
            quizData[j].options[2].text
          }</span>
          <div class="hide"></div>
        </label>
        <label for="op4" class='label' data-correct='${
          quizData[j].options[3].isCorrect
        }'>
          <input type="radio" name="group1" id="op4"> <span class="Option">${
            quizData[j].options[3].text
          }</span>
          <div class="hide"></div>
        </label>
        <div class="showans"></div>
      </form>
      
      </div>
      <button onclick='nextquestion()'>Next</button>`;
}

let ui = `${GenerateHTML()}`;

function nextquestion() {
  if (j < quizData.length - 1) {
    j++;
    showquestions();
  }else{
   container.innerHTML =  `Your Score is ${scoreNum}`;
   container.style.display = 'flex'
   container.classList.add('center');

   let reStart = document.createElement('button');
   button.textContent = 'Play again';
   container.appendChild(button);
   button.addEventListener('click', ()=>{
    window.location.reload();
   })
  }
}
button.addEventListener("click", () => {
  container.style.display = "block";
  showquestions();
});

function showquestions() {
  ui = GenerateHTML();

  container.innerHTML = ui;

  let options = document.querySelectorAll(".Option");

  options.forEach((op, i) => {
    op.dataset.correct = quizData[j].options[i].isCorrect;
  });

  let optionsContainer = document.querySelector(".optionsContainer");
  optionsContainer.addEventListener("click", validation);
}
function validation(e) {
  let optionsContainer = document.querySelector('.optionsContainer');
  optionsContainer.addEventListener('click',()=>{
    let clicked = e.target.parentNode;
    if (optionsContainer.classList.contains("clicked")) {
      return;
    }
    let options = document.querySelectorAll(".Option");
    let isCorrect = clicked.dataset.correct;
    optionsContainer.classList.add('clicked');
    if (isCorrect === "true") {
      clicked.style.border = "2px solid green";
  
      scoreNum++;
      let score = (document.querySelector(".Score").innerHTML = scoreNum);
    } else {
      clicked.style.border = "2px solid red";
      let labels = document.querySelectorAll(".label");
      labels.forEach((label) => { 
        if (label.dataset.correct === "true") {
          label.style.border = "2px solid green";
  
        }
      });
    }
  })
}