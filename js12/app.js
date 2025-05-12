// ASYNC KEYWORD

// async function greet(){
//     return hello;
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was:",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected");
//     console.log("error:",err);
// })

// let demo = async ()=>{
//     throw "some mishap occured";
//     return 5;
// }

// AWAIT KEYBOARD

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//         },1000)
//     });
// }

// async function demo(){
//    await getNum();
//    await getNum();
//    getNum();
// }

// previous color changing example
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//      setTimeout(() => {
//         h1.style.color=color;
//          resolve("color changed");
//     }, delay);
//     }); 
// }

// async function demo(){
//    await changeColor("red",1000);
//    await changeColor("blue",1000);
//    await changeColor("yellow",1000);
//    await changeColor("pink",1000);
//    await changeColor("brown",1000);

// };

// let jsonRes='{"fact":"A cats normal temperature varies around 101 degrees Fahrenheit.","length":64}';
// let validRes=JSON.parse(jsonRes);
// console.log(validRes);

// let student={
//     name:"harshit",
//     marks:75,
// };

// let jsonString= JSON.stringify(student);
// console.log(jsonString);

// MY FIRST API REQUEST
let url="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     // console.log(response);
//    return response.json();

// })
// .then((data)=>{
//     console.log("data1=",data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data2)=>{
//     console.log("data2=",data2.fact);
// })
// .catch((error)=>{
//     console.log("ERROR-",error);
// })

async function getFacts(){
    try{
        let res=await fetch(url);
    let data= await res.json();
    console.log(data.fact);
    
    let res2=await fetch(url);
    let data2= await res2.json();
    console.log(data2.fact);

    }
    catch(e){
        console.log("error-",e);

    }
    console.log("bye");
}

// HW
// fetch(url)
// .then((Response)=>{
//    return Response.json();
// })
// .then((data)=>{
//     console.log("data1=",data.fact);
//     return fetch(url);
// })
// .then((Response)=>{
//     return Response.json();
// })
// .then((data2)=>{
//     console.log("data2=",data2.fact);
// })
// .catch((error)=>{
//     console.log("error occured:",error);
// })