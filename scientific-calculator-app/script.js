let buttons = document.querySelectorAll("button")
let display = document.querySelector("#display")

buttons.forEach(btn => {
    btn.onclick = () => {

        let val = display.value

        if (btn.id === "clear") {
            display.value = ""
        }

        else if (btn.id === "equals") {
            display.value = eval(val)
        }

        else if (btn.value === "sin") {
            display.value = Math.sin(val * Math.PI / 180)
        }

        else if (btn.value === "cos") {
            display.value = Math.cos(val * Math.PI / 180)
        }

        else if (btn.value === "tan") {
            display.value = Math.tan(val * Math.PI / 180)
        }

        else if (btn.value === "log") {
            display.value = Math.log10(val)
        }

        else if (btn.value === "sqrt") {
            display.value = Math.sqrt(val)
        }

        else {
            display.value += btn.value
        }
    }
})
