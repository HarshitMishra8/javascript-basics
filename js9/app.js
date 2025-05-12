// let smallImages=document.getElementsByClassName("oldImg");

// for (let i=0;i<smallImages.length;i++){
//     smallImages[i].src="assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed`);
// }

// getelementbyid getelementbyclassname getelementbytags


// console.dir(document.querySelector("h1")); //selects first h1 element
// console.dir(document.querySelector("#description")); //selects first element with id=#description
// console.dir(document.querySelector(".oldImg")); //selects first element with class=oldImg

// console.dir(document.querySelectorAll("p")); //selects all p elements

// DOM MANIPULATION
// inner text- hme jo screen pr dikhega wohi dikhayega.
//innerhtml- poora html markup dikhayega yeh
// innercontent- woh sb dikhayega jo hmne index.html m kiya hai

// ATTRIBUTE MANIPULATION
// getters and setters
// get the id and all using query selector and all and then set the attirbute to whatever you wanna set it to   

// STYLE MANIPULATION
//let links= document.querySelectorAll(".box a");
//for(let i=0;i<links.length;i++){
//links[i].style.color="green";
//}

// CLASS MANIPULATION
// let heading=document.querySelector("h1");
// heading.classList.add("green");
// heading.classList.remove("green");
// heading.classList.add("underline");
// another method 
// heading.setAttribute("class","green");
// classlist.toggle("")- this acts as a swithc, agr on hai toh off krdega and agar off hai toh on krdega.
// heading.classList.toggle("underline");

// NAVIGATION
// .parentElement .children .previousElementSibling .nextElementsibling

// Adding Elements
//box.appendChild(newP); adds a new content in a box
// p.append(newP); adds a new content in paragraph


// practice q
// let para1=document.createElement("p");
// para1.innerText="hey I'm red!";
// document.querySelector('body').append(para1);
// para1.classList.add("red");

// let h3=document.createElement("h3");
// h3.innerText="hey I'm a blue!";
// document.querySelector('body').append(h3);
// h3.classList.add("blue");

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para2=document.createElement("para2");

// h1.innerText="Im in a div";
// para2.innerText="ME TOO!";

// div.append(h1);
// div.append(para2);
// div.classList.add("box");

// document.querySelector('body').append(div);

// assignment
// q4
// let h1=document.createElement("DOM Practice");
// h1.innerText="DOM Practice";
// document.querySelector("body").append(h1);
// h1.classList.add("h1");

// q4 aliter method
// let h1=document.createElement("h1");
// h1.innerHTML="<u>DOM Practice</u>";
// document.querySelector("body").append(h1);


// q5
// let p=document.createElement("p");
// p.innerHTML="Apna College <b>Delta</b> Practice";
// document.querySelector("body").append(p);

// q1
// let button=document.createElement("button");
// let input=document.createElement("input");
// button.innerText="click me";

// document.querySelector("body").append(button);
// document.querySelector("body").append(input);

// q2
// button.setAttribute("id","btn");
// input.setAttribute("placeholder","username");

// q3
// let btn=document.querySelector("#btn");
// btn.classList.add("btnstyle");
