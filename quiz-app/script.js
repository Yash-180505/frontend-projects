const questions = [
  {
    question: "What is FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctIndex: 1
  },
  {
    question: "Time complexity of Binary Search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctIndex: 1
  },
  {
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Array", "Stack", "Graph"],
    correctIndex: 2
  }
]

let currentIndex = 0
let selectedAnswer = null
let score = 0

const questionEl = document.getElementById("question")
const optionsEl = document.getElementById("options")
const optionBtns = document.querySelectorAll(".choice")
const progressEl = document.getElementById("progress")
const nextBtn = document.getElementById("next")

function loadQuestion() {
  const q = questions[currentIndex]

  questionEl.innerText = q.question
  progressEl.innerText = `Question ${currentIndex + 1} / ${questions.length}`

  optionBtns.forEach((btn, i) => {
    btn.innerText = q.options[i]
    btn.className = "choice"
    btn.disabled = false
  })

  selectedAnswer = null
}

optionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    selectedAnswer = index

    optionBtns.forEach(b => {
      b.classList.remove("selected")
      b.disabled = true
    })

    btn.classList.add("selected")
  })
})

nextBtn.addEventListener("click", () => {
  if (selectedAnswer === null) return

  const correct = questions[currentIndex].correctIndex

  if (selectedAnswer === correct) {
    score++
  }

  currentIndex++

  if (currentIndex < questions.length) {
    loadQuestion()
  } else {
    showResult()
  }
})

function showResult() {
  document.getElementById("app").innerHTML = `
    <h1>Quiz Completed</h1>
    <p>Your Score: ${score} / ${questions.length}</p>
  `
}

loadQuestion()
