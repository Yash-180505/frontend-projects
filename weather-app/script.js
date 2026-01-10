const input = document.getElementById("input")
const searchbtn = document.getElementById("searchbtn")
const output = document.getElementById("output")

async function getWeather() {
    if(input.value.trim() === "") return

    let city = input.value
    let apiKey = "API HERE"

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    let response = await fetch(url)
    let data = await response.json()

    if(data.cod === "404") {
        output.innerHTML = "City not found ❌"
        return
    }

    output.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
    `
}

searchbtn.onclick = function() {
    getWeather()
}
