let buttons = document.querySelectorAll("button")
let display = document.querySelector("#display")

buttons.forEach(btn => {
    btn.onclick = () => {
        if (btn.id === "equals") {
            display.value = eval(display.value)
        }
        else if (btn.id === "clear") {
            display.value = ""
        }
        else {
            display.value += btn.value
        }
    }
})
