const btns = document.querySelectorAll(".expenses")
const rows = document.querySelector("#rows")
const salaryInput = document.querySelector("#salaryInput")
const totalExpenseEl = document.querySelector("#totalExpense")
const balanceEl = document.querySelector("#balance")

const symbols = {
  Grocery: "🛒",
  Electricity: "⚡",
  Loan: "💳",
  Saving: "💰",
  Other: "📦"
}

/* ---------- LOAD FROM localStorage ---------- */
window.addEventListener("load", loadData)

/* ---------- BUTTON CLICK ---------- */
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.disabled = true
    btn.classList.add("disabled-btn")

    createRow(btn.innerText, 0)
    saveData()
  })
})

salaryInput.addEventListener("input", () => {
  calculate()
  saveData()
})

/* ---------- CREATE ROW ---------- */
function createRow(type, amountValue) {
  const row = document.createElement("div")
  row.className = "row"

  const symbol = document.createElement("div")
  symbol.className = "row-symbol"
  symbol.innerText = symbols[type]

  const input = document.createElement("input")
  input.className = "row-input"
  input.type = "number"
  input.min = "0"
  input.value = amountValue

  input.addEventListener("input", () => {
    calculate()
    saveData()
  })

  const del = document.createElement("button")
  del.className = "delete-btn"
  del.innerText = "🗑"

  del.addEventListener("click", () => {
    row.remove()
    enableButton(type)
    calculate()
    saveData()
  })

  row.append(symbol, input, del)
  rows.appendChild(row)
}

/* ---------- CALCULATE ---------- */
function calculate() {
  let total = 0

  document.querySelectorAll(".row-input").forEach(input => {
    let val = Number(input.value)
    if (val < 0) val = 0
    total += val || 0
  })

  totalExpenseEl.innerText = total
  balanceEl.innerText = (Number(salaryInput.value) || 0) - total
}

/* ---------- ENABLE BUTTON AFTER DELETE ---------- */
function enableButton(type) {
  btns.forEach(btn => {
    if (btn.innerText === type) {
      btn.disabled = false
      btn.classList.remove("disabled-btn")
    }
  })
}

/* ---------- SAVE DATA ---------- */
function saveData() {
  const data = {
    salary: salaryInput.value,
    expenses: []
  }

  document.querySelectorAll(".row").forEach(row => {
    const symbol = row.querySelector(".row-symbol").innerText
    const amount = row.querySelector(".row-input").value

    const type = Object.keys(symbols).find(
      key => symbols[key] === symbol
    )

    data.expenses.push({ type, amount })
  })

  localStorage.setItem("expenseTracker", JSON.stringify(data))
}

/* ---------- LOAD DATA ---------- */
function loadData() {
  const saved = localStorage.getItem("expenseTracker")
  if (!saved) return

  const data = JSON.parse(saved)

  salaryInput.value = data.salary || ""

  data.expenses.forEach(exp => {
    disableButton(exp.type)
    createRow(exp.type, exp.amount)
  })

  calculate()
}

/* ---------- DISABLE BUTTON ---------- */
function disableButton(type) {
  btns.forEach(btn => {
    if (btn.innerText === type) {
      btn.disabled = true
      btn.classList.add("disabled-btn")
    }
  })
}
