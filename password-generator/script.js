const length=document.getElementById("length")
const ABC=document.getElementById("ABC")
const abc=document.getElementById("abc")
const number=document.getElementById("number")
const symbol=document.getElementById("symbol")
const generate=document.getElementById("generate")
const outer_div=document.getElementById("outer")
const copy =document.getElementById("copy")
const main=document.getElementById("App")
let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
let Lowercase="abcdefghijklmnopqrstuvwxyz" 
let num="0123456789" 
let sym=`!@#$%^&*()_+-={}[]|:;"'<>,.?/`
let allchars=""
generate.onclick=function(){
    allchars=""
    if( 
   length.value === "" 
   || Number(length.value) <= 0 
   || ( !ABC.checked && !abc.checked && !number.checked && !symbol.checked )
)
{
   alert("Enter the correct length and select checkbox")
   return;

}else{
      if(ABC.checked) allchars+=upperCase
      if(abc.checked)   allchars+=Lowercase
      if(number.checked) allchars+=num
      if(symbol.checked) allchars+=sym
     
      let len= Number(length.value)
      let password=""
       while(password.length <len){
           let randomIndex=Math.floor(Math.random()*allchars.length)
           let  randomChar=allchars[randomIndex]
           password+=randomChar;
       } 
       let inner_div=document.createElement("div")
       inner_div.className="inner"
       let copy=document.createElement("button")
       copy.textContent="Copy"
       copy.className="copyBtn"
        copy.addEventListener("click",function(){
              navigator.clipboard.writeText(password).then(() => {
   outer_div.innerHTML = ""
   outer_div.appendChild(inner_div)
})


    
        })
        let Gen_password= document.createElement("span")
        Gen_password.textContent=password
        inner_div.append(Gen_password, copy)

        outer_div.appendChild(inner_div)
   
}
      


}