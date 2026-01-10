const input=document.getElementById("input")
const addbtn=document.getElementById("add")
const main=document.getElementById("App")
let editnote=null;
window.onload = function() {
    let saved = JSON.parse(localStorage.getItem("notes"))
    if(saved) {
        saved.forEach(textVal => {
            input.value = textVal
            addbtn.click()
        })
    }
}

addbtn.onclick=function(){
      if(input.value.trim() === "") return;
if(editnote!==null){
      editnote.querySelector("span").textContent=input.value

      editnote=null;
      addbtn.textContent="Add"
      saveNotes()

}
else{
    let note=document.createElement("div")
    note.className="notes"

  let text=document. createElement("span")
    text.textContent=input.value

   let del=document.createElement("button")
    del.textContent="❌"
    del.onclick=function(){
        note.remove()
        saveNotes()

    }
  
    let edit=document.createElement("button")
    edit.textContent="✏"
    edit.onclick=function(){
    
         input.value=text.textContent
              editnote=note
         addbtn.textContent="Save"
        
        

    }
  

    note.append(text,edit,del)

    main.appendChild(note)
 saveNotes()

}
    
   input.value=""
}
function saveNotes() {
    let notes = []
    document.querySelectorAll(".notes span").forEach(note => {
        notes.push(note.textContent)
    })
    localStorage.setItem("notes", JSON.stringify(notes))
}
