


const username=document.querySelector(".login--username");
const password=document.querySelector(".login-password");
const button =document.querySelector(".btn");
const appContainer=document.querySelector(".app")
const q1=document.querySelector(".q1")
const q2=document.querySelector(".q2")
const q3=document.querySelector(".q3")
const q4=document.querySelector(".q4")
const q5=document.querySelector(".q5")
const q6=document.querySelector(".q6")
const q7=document.querySelector(".q7")
const quesDiv=document.querySelector(".app_ques-ans")



const ansList=[];
button.addEventListener("click",(e)=>{
    e.preventDefault();
    ansList.push(q1.value,q2.value,q3.value,q4.value,q5.value,q6.value,q7.value)
    console.log(ansList)
    sessionStorage.setItem("Array",JSON.stringify(ansList))
     window.location.href="2nd.html"
})





