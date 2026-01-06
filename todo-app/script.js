let input = document.querySelector("#task-input")
let addbtn = document.querySelector("#add-btn")
let task_div = document.querySelector("#task")
let completed = document.querySelector("#completed")
let clear = document.querySelector("#clear")

addbtn.addEventListener("click", () => {
    let text = input.value.trim()
    if (text === "") return

    const wrapper = document.createElement("div")

    const task = document.createElement("div")
    task.innerText = text

    const actions = document.createElement("div")

    const done = document.createElement("button")
    done.innerText = "✔"

    const cancel = document.createElement("button")
    cancel.innerText = "✖"

    done.addEventListener("click", () => {
        const p = document.createElement("p")
        p.innerText = text
        completed.insertBefore(p, clear)
          clear.style.display="block"
        wrapper.remove()
    })

    cancel.addEventListener("click", () => {
        wrapper.remove()
    })

    actions.append(done, cancel)
    wrapper.append(task, actions)
    task_div.appendChild(wrapper)
  

    input.value = ""
})

clear.addEventListener("click", () => {
    completed.querySelectorAll("p").forEach(p => p.remove())
    clear.style.display="none"
})
