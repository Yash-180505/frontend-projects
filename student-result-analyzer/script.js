let addbtn = document.getElementById("addBtn");
let marks = document.getElementById("marks");
let analyzeBtn = document.getElementById("analyzeBtn");
let result = document.getElementById("result");
let cnt = document.getElementById("count");
let resetBtn=document.getElementById("resetBtn")
let student_mark = [];
window.addEventListener("load", () => {
  addbtn.disabled = false;
});
addbtn.addEventListener("click", () => {
  if (marks.value === "") return;
  let val = Number(marks.value);

  if (val < 0 || val > 100) {
    alert("please Enter the marks between 0 t0 100");
    return;
  }

  if (val >= 0 && val <= 100) {
    student_mark.push(val);
    cnt.innerText = `${student_mark.length}/5 Subject marks added`;
    marks.value = "";
  }
  if (student_mark.length === 5) {
    addbtn.disabled = true;
  }
});

resetBtn.addEventListener("click",()=>{
    result.innerText="";
  student_mark.length = 0;
  cnt.innerText=""
  addbtn.disabled = false;
  resetBtn.style.display="none"

})

function gradeCalculate(percentage) {
  if (percentage > 90) return "O";
  else if (percentage > 80 && percentage <= 90) return "A";
  else if (percentage > 70 && percentage <= 80) return "B";
  else if (percentage > 60 && percentage <= 70) return "C";
  else if (percentage > 50 && percentage <= 60) return "P";
  else return "F";
}
function display() {
  let sum = 0;
  for (let x of student_mark) {
    sum += x;
  }
  let avg = sum / student_mark.length;

  let percentage = (sum / 500) * 100;

  let grade = gradeCalculate(percentage);

  if(grade==="O" || grade==="A"){
      result.style.color="green"
  }
  else if( grade==="B" ||grade==="C" || grade=="D") {
      result.style.color="orange"
  }
  else{
      result.style.color="red"
  }
  result.innerText = `Marks:${student_mark.join(" ") } \n Average:${avg}\n Percentage:${percentage.toFixed(2)}% \n Grade:${grade}\n
     
   `;

   resetBtn.style.display = "inline-block";
}

analyzeBtn.addEventListener("click",display)