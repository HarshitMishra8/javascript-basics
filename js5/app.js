// object literals
// const student={
//   name:"shradhha",
//   age:23,
//   marks:94.4,
//   height:164,
// }

// const post={
//    username:"@mishramaxxin",
//    content:"this is my first post",
//    likes: 150,
//    reposts:5,
//    tags:["@apnacollege","sigma"]
// }

// // get values from an object
// console.log(post.username);
// let prop="reposts";
// console.log(post[prop]);

// // update/add new props
// const student={
//     name:"shradhha",
//     age:23,
//     marks:94.4,
//     height:164,
//   }

// // to update
// student.age=26;
// console.log(student);

// // to add
// student.gender="female";
// console.log(student);

// student.marks=98.5
// console.log(student);

// object of objects
// const clubs={
//     mancity:{
//         goat:true,
//         trophies:115,
//         color:"skyblue"
//     },

//     realmadrid:{
//         goat:false,
//         trophies:321,
//         color:"white"
//     },

//     barca:{
//         goat:true,
//         trophies:234,
//         color:"red and blue"
//     }
// }

// array of objects
// const clubs=[
//     {
//         goat:true,
//         trophies:115,
//         color:"skyblue"
//     },

//     {
//         goat:false,
//         trophie:321,
//         color:"white"
//     },

//     {
//         goat:true,
//         trophies:234,
//         color:"red and blue"
//     }
// ];

// math object
// math.abs() modulus jaisa kaam krta hai
// math.pow(a,b) = a**b
// math.floor() is greatest integer function
// math.ceil() is lowest integer function
// math.random() gives us a random value apart from 1

// usage
// let num=Math.random();
// console.log(num);
// num=num*10;
// console.log(num);
// num=Math.floor(num);
// console.log(num);
// num=num+1;
// console.log(num);

// directly create a random number btw 1 to 10
// let num1=Math.floor(Math.random()*10)+1;
// console.log(num1);

// q1 create a no btw 1 to 100
// let num1=Math.floor(Math.random()*100)+1;
// console.log(num1);

// q2 generate a random no btw 1 and 5
// let num=Math.random();
// console.log(num);
// num=num*5;
// console.log(num);
// num=Math.floor(num);
// console.log(num);
// num=num+1;
// console.log(num);

// best method to remember how to generate random numbers
// Math.floor(Math.random()*x)+y;
// x=how many of different random numbers you wanna choose From
// y=minimum konsa number hona chahiye

// guessing game
// user enter a max number and then tries to guess a random generated number btw 1 to max
// let max=prompt("enter the max number");
// // console.log(max);

// const random=Math.floor(Math.random()*max)+1;
// // console.log(random);

// let guess=prompt("guess the correct number");

// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }

//     if(guess==random){
//         console.log("you did it!");
//         break;
//     }
//     else if(guess<random){
//         guess=prompt("hint:your guess was too small, try again <3");
//     }
//     else if(guess>random){
//        guess=prompt("hint:your guess was too large, guess a smaller number.");
//     }
// }

// assignment
// q1 generate number in a dice
// let num=Math.floor(Math.random()*6)+1;
// console.log(num);

// q2
// const car={
//     name:"Hyundai",
//     model:"eon",
//     color:"blazing red"
// }

// console.log(car.name);

// q3
// const person={
//     name:"Harshit",
//     age:19,
//     city:"hyderabad"
// }

// console.log(person);
// person.city="New York";
// console.log(person);

// person.country='United states';
// console.log(person);