// // functions
// function hello(){
//     console.log("hello");
// }
// hello();

// function printName(){
//     console.log("Harshit Mishra");
// }
// printName();

// function print1to5(){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }

// print1to5();

// function isAdult(){
//     let age=12;
//     if(age>=18){
//         console.log("adult");
//     }
//     else{
//         console.log("not adult");
//     }
// }

// isAdult();

// q1
// function printPoem(){
//     console.log("Twinkle Twinkle little star, how i wonder what you are!");
// }

// printPoem();

// q2 roll a dice and display its value all via functions
// function dice(){
//     let num=Math.floor(Math.random()*6)+1;
//     console.log(num);
// }


// dice();
// dice();

// dice();
// dice();

// functions with arguments
// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("harshit",19);

// function calculateSum(a,b){
//     console.log(a+b);
// }

// calculateSum(32423453,34534543);

// q3 average function
// function average(a,b,c){
//     console.log((a+b+b)/3);
// }

// average(34,245,234);

// q4 multiplication table 
// function table(a){
//     for(let i=1;i<=10;i++){
//         let b=a*i;
//       console.log(b);
//     }
// }

// table(8);


// return keyword
// function calculateSum(a,b){
//     return a+b;
// }

// let s=calculateSum(3,4);
// console.log(s);

// let z=calculateSum(calculateSum(3,4),6);
// console.log(z);

// console.log(calculateSum(435,234));

// q5 function that returns sum of numbers from 1 to n
// function getSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;
        
//     }return sum;
// }

// console.log(getSum(5));

// q6 concatenator of arrays
// let a=["hi","bye","!","hello"];
// function concatenator(a){
//      let result;
//      for(let i=0; i<a.length;i++){
//         result += a[i];
//      }
//      return result;
// }

// console.log(concatenator(a));

// lexical scope
// function outerFunc(){
//     let x=5;
//     let y=6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }
// outerFunc();
// refer to the lexical image in this folder for a beter understanding

// q7
// let greet="hello"; //global scope

// function changeGreet(){
//     let greet="namaste"; //function scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);   //lexical scope
//     }
//     console.log(greet);
// }

// console.log(greet);
// changeGreet();

// function expression
// let name="harshit";

// let sum=function(a,b){
//     return a+b;
// }

// sum(1,2); //would be accessed this way
 
// let hello=function(){
//     console.log("hello");
// }

// higher order function
// function multipleGreet(func,n){
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }

// let greet=function(){
//     console.log("hello");
// }

// multipleGreet(greet,3);

// higher order return function
// function oddEvenTest(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("wrong request");
//     }
// }


// methods = functions in an object
// const calculator={
//      add: function(a,b){
//         return a+b;
//      },
//      sub: function(a,b){
//         return a-b;
//      },
//      mul: function(a,b){
//         return a*b;
//      }
// };

// console.log(calculator.sub(45,43));
// console.log(calculator.add(324,43));
// console.log(calculator.mul(76,4));

// q1 Writ e a JavaScript function that returns array elements larger than a number.
// let a=[2,3,5,768,98,34,6];
// let num=20;
// function large(a,num){
//     for(i=0;i<=a.length-1;i++){
//         if(a[i]>num){
//             console.log(a[i]);
//         }
//         else{
//             console.log('smaller than number');
//         }
//     }
// }

// large(a,num);

// q2 Write a JavaScript function to extract unique characters from a string
// let str="abcdefghabchdfsz";
// let ans="";
// function unique(str){
//     for(i=0;i<=str.length-1;i++){
//        let currChar=str[i];
//        if(ans.indexOf(currChar)==-1){
//         ans+=currChar;
//        }
//     }
//     return ans;
// }

// unique(str);

// q3 Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output
// let countries=["India","USA","Germany","Australia","England"];
// function longestname(countries){
//    let ansidx=0;
//    for(i=0;i<countries.length;i++){
//     let ansLen=countries[ansidx].length;
//     let currlen=countries[i].length;
//     if(currlen>ansLen){
//         ansidx=i;
//     }
//    }
//    return countries[ansidx];
// }

// longestname(countries);

// q4 Write a JavaScript function to count the number of vowels in a String argument
// let str="abcsdefasfjsdfsdioudsfjnoiu";
// function vowelCount(str){
//     let num=0;
// for(let i=0;i<str.length;i++){
//     if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//        num +=1;
//     }
// }
// console.log(num);
// }

// vowelCount(str);

// let str1="acbeabsiousadbasfoiuaevcbadsdouesaoiuoiuoiu";
// vowelCount(str1);

// q5 generate a random number within a range(start,end)
// Math.floor(Math.random()*6)+1; generates a random number
// let start;
// let end;
// function NoGenerator(start,end){
    
//     let range=end-start;
//     let num=Math.floor(Math.random()*range)+start;
//     console.log(num);
// }

// NoGenerator(4,14)
