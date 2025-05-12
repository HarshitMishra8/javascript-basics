// let btn=document.querySelector("button");
// btn.addEventListener("click",async()=>{
//    let fact= await getFacts();
//    console.log(fact);
//    let p=document.querySelector("#res");
//    p.innerText=fact;
// });

// let url="https://catfact.ninja/fact";


// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log("error-",e);
//        return "NO FACT FOUND";
//     }
 
// }

// let url2="https://dog.ceo/api/breeds/image/random";
// btn.addEventListener("click",async()=>{
//    let link=await getImage();
// //    console.log(link);
//    let img=document.querySelector("#res2");
//    img.setAttribute(src,link);
// });

// async function getImage(){
//     try{
//         let res2=await axios.get(url2);
//         return res2.data.message;
//     }
//     catch(e){
//         console.log("error-",e);
//         return "No image found";
//     }
// }

let url="http://universities.hipolabs.com/search?name=";

let country="nepal";
async function getColleges(){
    try{
        let res=await axios.get(url+country);
        console.log(res);
    }catch(e){
      console.log("error:",e);
    }
}



