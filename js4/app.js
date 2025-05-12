//for loop
// increasing loop
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// decreasing loop
// for(let i=5;i>=1;i--){
//    console.log(i);
// }

// odd numbers
// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }
 
// even numbers
// for(let i=2;i<=10;i=i+2){
//     console.log(i);
// }

// 5 table
// for(let i=5;i<=50;i=i+5){
//    console.log(i);
// }

// user defined table
// let n=prompt("write your number");
// n=parseInt(n);
// // parseint is a prompt jo string se number extract krke dega
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// nested loops
// for(let i=1;i<=3;i++){
//     console.log("outer loop:",i);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// while loop
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let j=5;
// while(j>=1){
//     console.log(j);
//     j--;
// }

// movie guessing game
// const favmovie="sanvi";

// let guess=prompt("guess my favourite person");


// while((guess!=favmovie)){
//     if(guess=="quit"){
//         console.log("you quit.");
//         break;
//     }
//     prompt("your guess is wrong, try again!");
// }

// if(guess==favmovie){
//     console.log("Congrats you've guessed it right");
// }


// // break keyword
// let i=1;
// while(i<=6){
//     if(i==4){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log("we used break at 4.");

// loops x arrays
// let fruits=["apple","mango","cherry","pineapple","guava"];
// // normal print
// fruits.push("raspberry");
// for(let i=0;i<fruits.length;i++){
//     console.log(i+1,fruits[i]);
// }

// // reverse print
// for(let j=fruits.length;j>=0;j--){
//     console.log(j+1,fruits[j]);
// }

// nested arrays x loops
// let clubs=[["mci","mun","liv","ars"],["rma","fcb","atm","rbe"]];
// for(let i=0;i<clubs.length;i++){
//     console.log(`List #${i}`);
//     for(let j=0;j<clubs[i].length;j++){
//         console.log(clubs[i][j]);
//     }
// }

// let student= [["aman",95],["harshit",100],["rohit",95]];
// for(let i=0;i<student.length;i++){
//     console.log("info of student:",i+1)
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j]);
//     }
// }

// for of loop
// let fruits=["apple","mango","cherry","pineapple","guava"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "apnacollege"){
//     console.log(char);
// }

// // nested for of loops
// let clubs=[["mci","mun","liv","ars"],["rma","fcb","atm","rbe"]];

// for(list of clubs){
//     for(name of list){
//         console.log(name);
//     }
// }

// To Do App
let todo=[];

let req=prompt("please enter your request.");

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }

    if(req=="list"){
        console.log("---------");
        for(let i=0;i<=todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-------------");
    }

    else if(req=="add"){
        let task= prompt("please enter the task you wanna add");
        todo.push(task);
        console.log("task added");
    }
   
    else if(req=="delete"){
       let idx=prompt("please enter the task index");
       todo.splice(idx,1);
       console.log("task deleted.")
    } 
    else {
        console.log("invalid request.");

    }

    req=prompt("please enter your request");
}

// q1 delete a number from an array
// let arr=[1,2,3,4,5,6,2,3];
// let num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// q2 find no of digits (do it by yourself once again)
// let num=234567;
// let count=0;
// let copy=num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

//q3 find sum of digits in a number
// let number=287152;
// let sum=0;
// let copy=number;
// while(copy>0){
//     digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);

// q4 factorial (beware of what you are putting in loop)
// let num=7;
// let fact=1;
// for(let i=1;i<=num;i++){
//     fact=fact*i;
//     console.log("the factorial of",i,"is",fact);
// }

// q5 largest number in an array
// let a=[23,32,55,454,65];
// let big;
// for(i=0;i<=a.length;i++){
//     if(a[i+1]>a[i]){
//         big=a[i+1];
//     }

//     else{
//         console.log("largest element is:",big);
//         break;
//     }
// }
