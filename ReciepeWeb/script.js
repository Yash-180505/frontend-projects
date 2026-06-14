const url="https://dummyjson.com/recipes"

const display=document.getElementById("display")
const show=document.getElementById("show")


async function getData() {
    

    let response= await fetch(url)
    let data=await response.json()
   
    let recipe=data.recipes[Math.floor(Math.random()*data.recipes.length)]
    
   
        let name=document.createElement("h3")
        name.innerText=recipe.name

        let image=document.createElement("img")
        image.src=recipe.image

        let ingredients=document.createElement("p")
       
        let instructions=document.createElement("p")
       
         ingredients.innerText = "Ingredients: " + recipe.ingredients.join(", ");

instructions.innerText = "Instructions: " + recipe.instructions.join(" → ");
        let difficulty=document.createElement("p")
        difficulty.innerText=recipe.difficulty

        let cuisine=document.createElement("p")
        cuisine.innerText=recipe.cuisine

        let container=document.createElement("div")
        container.classList.add("container")

        
        container.append(image)
        container.append(name)
        container.append(cuisine)
        container.append(difficulty)
        container.append(ingredients)
        container.append(instructions)

        display.append(container)

    }




show.onclick=()=>{
    display.innerHTML=""
    getData()
}