// let btn=document.querySelector("button");
// console.dir(btn);

// btn.onclick=function (){
//     console.log("button was clicked");
// };



let btns=document.querySelectorAll("button");
for (btn of btns){
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("you entered a button!");
    }
    console.dir(btn);
}
function sayHello(){
    alert("hello");
}

// EVENT LISTENERS
// let btns=document.querySelectorAll("button");

// for(btn of btns){
//     // btn.onclick=sayHello;
//     // btn.onclick=sayName;

//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }

// function sayHello(){
//     alert("Hello!");
// }

// function sayName(){
//     alert("Apna college");
// }

// ACTIVITY
// let btn=document.querySelector("button");

// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;

//     let div=document.querySelector("div");
//     div.style.backgroundColor=getRandomColor;

//     console.log("color updated");
// })

// function getRandomColor(){
//     let red= Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`(rgb ${red},${green},${blue})`;
//     return color;
// }

// div entering 
// let p=document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("para was clicked");
// })

// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse entered the div");
// })

// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");
// let h3=document.querySelector("h3");
// let p=document.querySelector("p");

// function changeColor(){
//     console.log(this.innerText);
//     this.style.border="1px solid yellow";
//     this.style.backgroundColor="black";
//     this.style.color="white";
// }

// // method 1
// // btn.addEventListener("click",function(){
// //     console.log(this.innerText);
// //     this.style.border="1px solid yellow";
// //     this.style.backgroundColor="black";
// //     this.style.color="white";
// // })

// // method 2
// btn.addEventListener("click",function(){
//     console.log("button clicked");
// });

// // h1.addEventListener("click",function(){
// //     console.log(this.innerText);
// //     this.style.border="1px solid yellow";
// //     this.style.backgroundColor="black";
// //     this.style.color="white";
// // })

// h1.addEventListener("click",changeColor);

// // h3.addEventListener("click",function(){
// //     console.log(this.innerText);
// //     this.style.border="1px solid yellow";
// //     this.style.backgroundColor="black";
// //     this.style.color="white";
// // })

// h3.addEventListener("click",changeColor);

// // p.addEventListener("click",function(){
// //     console.log(this.innerText);
// //     this.style.border="1px solid yellow";
// //     this.style.backgroundColor="black";
// //     this.style.color="white";
// // })

// p.addEventListener("click",changeColor);

// keyboard events
// let input=document.querySelector("input");
// input.addEventListener("keydown",function(event){
//     console.log(event.code);//arrowup,arrowdown,arrowleft,arrowright
//     if(event.code="ArrowUp"){
//         console.log("character moves forward");
//     }
//    else if(event.code="ArrowDown"){
//         console.log("character moves backward");
//     }
//     else if(event.code="ArrowLeft"){
//         console.log("character moves left");
//     }
//     else{
//         console.log("character moves right");
//     }
// })

// input.addEventListener("keyup",function(){
//     console.log("key was pressed");
// })

// form events
// let form=document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.dir(form);
    
//     let user= this.elements[0]; //form elements[0]
//     let pass= this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);


//     alert(`hi, ${user.value}, your password is set to ${pass.value}`); 
// })

// change event
// let user=document.querySelector("#user");

// user.addEventListener("change",function(event){
//     event.preventDefault;
//     console.log("change value =", this.value);
// })

// user.addEventListener("input",function(event){
//     event.preventDefault;
//     console.log("input value =", this.value);
// })

// let inp=document.querySelector("#text");
// let p= document.querySelector("p");

// inp.addEventListener("input",function(){
//     p.innerText=inp.value;
//     console.log(inp.value);
// })

// mouseout event
// const test=document.getElementById("test");
// test.addEventListener("mouseleave",(event)=>{
//     test.style.color="purple";
//     setTimeout(() => {
//         test.style.color="";
//     }, 1000);
// },
// );

// keypress event
// let log=document.getElementById("log");
// let input=document.querySelector("input");

// input.addEventListener("keypress",logkey);

// function logkey(e){
//     log.textContent += `${e.code}`;
// }


// assignment
// q1 create a button using javascript add event lostener that changes its color when clicked
// const button=document.querySelector("button");
// button.addEventListener("click",(event)=>{
//     event.preventDefault;
//     button.style.backgroundColor="green";
//     console.log("button was clicked");
// });

// q2 create a placeholder that can only detect alphabets
const inputField=document.getElementById("text");
const heading=getElementById("displayName");

inputField.addEventListener("input",function(){
const filteredValue=inputField.ariaValueMax.replace(/[^a-zA-Z\s]/g, '');
heading.textContent=filteredValue||"your name will appear here";
});



