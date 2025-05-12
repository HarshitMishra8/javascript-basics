//foreach method
// let arr=[1,2,3,4,5];

// function print(el){
//     console.log(el);
// }

// arr.forEach(print);
// // or
// arr.forEach(function(el){
//     console.log(el);
// });

// arr.forEach(function(el){
//     console.log(el);
// })

// let students=[
//   {
//      name:"aman",
//      marks:95,
//   },
//   {
//     name:"naman",
//     marks:94,
//   },
//   {
//     name:"chaman",
//     marks:98,
//   }
// ];

// arr.forEach((student)=>{
//     console.log(student.marks);
// })

// map method
// double array
// let a=[1,2,3,4];
// let double=a.map((el)=>{
//     return el*2;
// });

// console.log(double);

// gpa calculator
// let students=[
//     {
//        name:"aman",
//        marks:95,
//     },
//     {
//       name:"naman",
//       marks:94,
//     },
//     {
//       name:"chaman",
//       marks:98,
//     }
// ];

// let gpa=students.map((el)=>{
//     return el.marks/10;
// });

// filter method
// even number checking
// let nums=[1,2,35,54,34,55,6,75,85];
// let even=nums.filter((num)=>(num%2==0));
// console.log(even);

// every method
// returns true or false
// let nums=[1,2,35,54,34,55,6,75,85];
// let even=nums.every((num)=>(num%2==0))
// console.log(even);

// some 
// returns true or false 
// let nums=[1,2,35,54,34,55,6,75,85];
// let even=nums.some((num)=>(num%2==0))
// console.log(even);

// reduce method
// let nums=[1,2,3,4];
// let finalValue=nums.reduce((res,el)=>res+el);
// console.log(finalValue);
// check the image reduce.jpg

// max element in an array using reduce
// method 1
// let nums=[2,3,4,54,5,6,7,7,8,88,56,45];

// let result=nums.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(result);

// method 2 (using loops)
// let nums=[2,3,4,54,5,6,7,7,8,88,56,45];
// let max=-1;
// for(let i=0;i<nums.length;i++){
//     if(max<nums[i]){
//         max=nums[i];
//     }
// }
// console.log(max);

// q check if all elements in aray are multiples of 10 or not
// a=[12,34,20,443,304,32020];
// let multiple=a.every((el)=>(el%10==0));
// console.log(multiple);

// q create a fn to find minimum no in an array
// function GetMin(nums){
//     let min=nums.reduce((min,el)=>{
//     if(el<min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
//   return min;
// }

// let nums=[234,43556,6,35,45];
// console.log(GetMin(nums));

// default parameters
// function sum(a,b=2) {
//     return a+b;
// }// }format aisa hi rkhna hai
// // jispe value assigned hai wohi rhega unless user asks something else
// sum(1,4);
// sum(435,3);

// spread method
// a=[1,2,3,4,45,5,6,7,8,3,4,4,34,5,6,54,434];
// console.log(a);
// console.log(...a); //spreading shows individual characters
// console.log(..."harshitmishra");

// spread with array literals
// let arr=[1,2,3,4,5];
// let newArr=[...arr];
// console.log(newArr);

// let chars=[..."hello"];
// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];

// let nums=[...odd,...even];

// spread with object literals
// const data={
//     email:"sjdjssf@gmail.com",
//     password:"abcd",
// };

// const dataCopy={...data,id:123,country:"india"}; 

// rest
// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us:",args[i]);
//     }
// }

// function min(a,b,c,d){
//     console.log(arguments);
// } 

// function sum(...args){
//     return args.reduce((sum,el)=>sum=el);
// }

// function min(...args){
//     return args.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }
//         else{
//             return min;
//         }
//     });
// }

// destructuring
// let names=["tony",'bruce',"wayne","pakrer"];
// // let winner=names[0];
// // let runnerup=names[1];
// // let secondrunnerup=names[2];


// let [winner,runnerup,secondrunnerup]=names;


// const student={
//     name:"karna",
//     age:14,
//     class:9,
//     username:"karan@gmail.com",
//     password:"abcd"
// };
// // let username=student.username;
// // let password=student.password;

// let {username:user,password:secret,city="mumbai"}=student;
// console.log(user,secret);

// assignment qs
// q1
// let a=[1,2,3,4,5,6];

// const square=a.map((num)=>num*num);
// console.log(square);

// let sum=square.reduce((acc,cur)=>acc+cur,0);
// let avg=sum/a.length;
// console.log(avg);

// q2
// let a=[1,2,3,4,5,6];
// let newA=a.map((el)=>{
//     return el+5;
// });

// console.log(newA);

// q3 uppercase converter
// let a=["abcd","bcde","cdef","defg"];
// let newA=a.map((String)=>String.toUpperCase());
// console.log(newA);

// q4
// const doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,
//     ...args.map((v)=>v*2),
// ];

// doubleAndReturnArgs([1,2,3,4],4,5,5);


// q5 object merger
// const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
// mergeObjects({a:1,b:2},{c:3,d:4});
