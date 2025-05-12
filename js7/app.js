// this keyword refers to an object that is executing a current code
// const student={
//     name:"shraddha",
//     age:20,
//     phy:97,
//     math:98,
//     chem:99,
//     eng:98,
//     getavg(){
//         let avg=(this.eng + this.phy +this.math + this.chem)/4;
//         console.log(avg);
//         console.log(`${this.name} got avg marks=${avg}`);
//     }
// }

// try and catch statements
//  try mein we put those code lines jo hme lgte error denge and catch mein we put an alternative line for try.
// console.log("hello");
// console.log("hello");
// console.log("hello");
// // let a=24;
// try{
//     console.log(a);
// }
// catch{
//     console.log("A wasnt defined, what were you expecting dumbo?")
// }
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");
// console.log("hello2");

// miscellaneous topics
//1. arrow functions
// const sum=(a,b)=>{
//     console.log(a+b);
// }

// const cube=(n)=>{
//     return n**3;
// }

// let c=cube(8);
// console.log(c);

// const pow=(x,y)=>{
//    return x**y;
// }

// console.log(pow(3,4));

// 2.setTimeout time ke baad print hoga
// console.log("hi there!");
// setTimeout(() => {
//     console.log("Apna College");
//     console.log("all the best harshit for your betc lab");
// }, 5000);

// console.log("welcome to....");

// 3.setInterval 
// console.log("hi sanvi <3.");
// let id=setInterval(()=>{
//     console.log("You're the best");
// },2000);
// console.log(id);
// to stop this interval.... write clearInterval(id);

// q1 an arrow function that returns the square of a number n
// let n;
// const square=(n)=>{
//     return n**2;
// }
// console.log(square(8));
//aliter
// const square=(n)=n*n;
// console.log(square(34));

// q2 function that prints hello world 5 times at intervals of 2s each
// let id=setInterval(()=>{
//     console.log("hello world");
// },2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("clear interval ran succesfully");
// }, 10000);

// assignment
// q1 arrayAverage using arrow function
// const arrayAverage=(arr)=>{
//     let total=0;
//     for(let number of arr){
//         total+=number;
//     }
//     return total/arr.length;
// };

// let arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arrayAverage(arr));

// q2 even tes using arrow function
// let num=4;
// const isEven=(num)=>num%2==0;
// console.log(isEven(50));

// q3 output guessing
// const object={
//     message:'Hello,World!',
//     logMessage(){
//         console.log(object.message);
//     }
// };
//     setTimeout(object.logMessage,1000);

