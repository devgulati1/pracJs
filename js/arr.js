
const ans=document.querySelector(".ans")
const ol=document.createElement("ol");

let data=sessionStorage.getItem("Array")

let arr=JSON.parse(data)
console.log(arr)

arr.forEach((val)=>{
const li=document.createElement("li")
li.innerText=`${val}`
ol.appendChild(li);
ans.appendChild(ol);
li.classList.add("text")

})
//   sessionStorage.clear()
console.log(arr)