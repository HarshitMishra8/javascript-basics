// CALL STACKS

// ex 1
// function hello(){
//     console.log("inside hello function");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello function");
//     hello();
// }
// console.log("calling demo function")
// demo();
// console.log("done, bye!");

// ex2 debugging is done in the source tab via inspect
// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans= two()+ one();
//     console.log(ans);
// }

// three();

// ----------single threaded JS

// synchronous code

// let a=25;
// console.log(a);
// let b=10;
// console.log(b);
// console.log(a+b); 

// asynchronous code

// setTimeout(()=>{
//     console.log("apna college")
// },2000);
// setTimeout(()=>{
//     console.log("hello world")
// },2000);
// console.log("hello....");

// CALLBACK HELL= CALLBACK NESTING
h1= document.querySelector("h1");

function changeColor(color,delay,nextColorChange){
    setTimeout(() => {
         h1.style.color=color;
         if(nextColorChange) nextColorChange();
    }, delay);  
}

// setTimeout(() => {
//     h1.style.color="red";
// }, 1000);
// setTimeout(() => {
//     h1.style.color="orange";
// }, 2000);
// setTimeout(() => {
//     h1.style.color="green";
// }, 3000);

// setTimeout(changeColor("red",1000));
// setTimeout(changeColor("blue",2000));
// setTimeout(changeColor("green",3000));

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("pink",1000,()=>{
//                     changeColor("brown",1000);
//                 });
//             });
//         });
//     });
// });


//BELOW IS A CALLBACK HELL. PROMISES WILL COME TO OUR HELP NOW.
// function savetoDb(data,resolve,failure){
//    let internetSpeed=Math.floor(Math.random()*10)+1;
//    if(internetSpeed>4){
//     resolve();
// }  else{
//     failure();
// }
// }

// savetoDb("apnacollege",
//     ()=>{
//     console.log("resolve:your data was saved");
//     savetoDb("hello world",()=>{
//         console.log("resolve2: data2 saved");
//         savetoDb("better feeling",
//             ()=>{
//                 console.log("yess three saved in a row!");
//             },
//             ()=>{
//                 console.log("sorry for missing your hattrick");
//             }
//         )
//     },
//     ()=>{
//         console.log("failure2: weak connection.");
//     }
// );
// },
//     ()=>{
//     console.log("failure:weak connection. data not saved.");
// }
// );

// function savetoDb(data){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     return new Promise((resolve,reject)=>{
//         if(internetSpeed>4){
//             resolve("success:data was saved");
//         } else{
//             reject("failure: weak connection");
//         }
//     });
// }


// THEN AND CATCH METHOD
// savetoDb("apnacollege").then(()=>{ //req=promise object
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })


// promise chaining  //req=promise object
// savetoDb("apnacollege")
// .then((result)=>{ 
//     console.log("promise1 was resolved");
//     console.log("result:",result);
//     return savetoDb("helloworld");
   
// })
//  .then((result)=>{
//         console.log("promise2 was resolved");
//         console.log("result:",result);
//         return savetoDb("harshit");
//     })
//     .then((result)=>{
//         console.log("promise3 was resolved");
//         console.log("result:",result);
//     })
// .catch((error)=>{
//     console.log("promise1/2/3 was rejected");
//     console.log("error:",error);
// })

// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         let num=Math.floor(Math.random()*5)+1;
//         if(num>3){
//             reject("promise rejected");
//         }
//          h1.style.color=color;
//          console.log("color changed");
//          resolve("color changed");
//     }, delay);
//     }); 
// }

// async function demo(){
//     try{
//         await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("yellow",1000);
//     await changeColor("pink",1000);
//     await changeColor("brown",1000);
//     }
//     catch(err){
//         console.log(err);
//         console.log("error caught");

//     }
    

//     let a =5;
//     console.log(a);
//     console.log("new number:",a+3);

// }
// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("grey",1000);
// })
// .then(()=>{
//     console.log("grey color was completed");
// })
// .catch(()=>{
//     console.log("color couldnt be changed");
// })