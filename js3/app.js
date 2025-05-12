// let msg="    hello    ";
// let password=prompt("set your password");
// let newpass= password.trim();
// console.log(password.trim());

// password.trim(); first method in a string in javascript

// let name= "apnacollege";
// console.log(name);
// name.toLowerCase() and name.toUpperCase() 2nd method

// 3rd method- string.indexOf(""); brings the first index of the required character in a string.

// method chaining
// let msg="  hello   " ;
// let newMsg= msg.trim();
// console.log(newMsg);
// newMsg= newMsg.toUpperCase();
// console.log(newMsg);
// let newMsg=msg.trim().toUpperCase();

// slicing
// let msg= "harshit";
// console.log(msg.slice(4,5));
// console.log(msg.slice(-2));
// console.log(msg.slice(3));

// replace 
// let msg1="ilovecoding";
// let msg2="ilovehyderabad";
// msg1.replace("love", "hate");
// console.log(msg1);
// first occurence change ho jayega.

// repeat
// let str="mango";
// str.repeat(3);
// console.log(str);

// q1
// let msg="help!";
// msg.trim().toUpperCase();
// console.log(msg);

// ARRAYS
// let students=["aman","shraddha","rajat"];
// mutability
// let me="rohit";
// me[0]='n';
// console.log(me);

// array adding push method. adds element to the last.
// let car=["audi","bmw"];
// car.push("benz");
// console.log(car);
// pop deletes the last element
// car.pop();
// console.log(car);
// unshift adds new element to the first.
// car.unshift("maruti");
// console.log(car);
// shift deletes element from the start
// car.shift(car);
// console.log(car);

// q1
// let month=['jan','july','march','aug'];

// method1
// month[0]='july';
// month[1]='june';
// console.log(month);

// method2
// month.shift();
// month.shift();
// month.unshift('june');
// month.unshift('july');
// console.log(month);

// car=['bmw','benz','xuv'];
// car.indexOf('bmw'); searches for the index of an element.
// car.includes('bmw'); tells us if this element exist in the array or not

// concatenation of 2 arrays
// let fb=['mci','rma','liv'];
// let fb2=['liv','mun','fcb'];
// let fb3=fb.concat(fb2);
// console.log(fb3);
// let fb4=fb2.concat(fb);
// console.log(fb4);

// reverse of an array
// fb5=fb4.reverse();
// console.log(fb5);

// slicing of an array
// fb5.slice(3,6);
// fb5.slice(2);
// fb5.slice(-2);

// splicing in arrays
// let colors=['red','yel','blue','pink'];
// colors.splice(3);
// now colors=red yel blue
// colors.splice(0,1); iska matlab ki 0th index se leke 1 element delete ho jayega.
// now colors=yel,blue;
// colors.splice(0,1,"black","grey");
// now colors=black grey yel blue.
// let car=toy,xuv,ben;
// car.splice(1,0,"mercedez"); iska mtlb 1st index se 0 elements delete krke usme mercedez add krna
// car=toy,mercedez,xuv,ben;
// agar kisi element of replace krna hai toh uske index ko delete krna pdega.

// sorting an array
// let car=['ab','re','rfee','gr']
// car.sort();
// console.log(car);

// q1
// let months=['jan','jun','march','aug'];
// months.splice(0,2,"july","june");
// console.log(months);

//  tictactoe
// let arr=[["X",null,"O"],[null,"X",null],["O",null,"X"]];

// q1-funtion to print till element no n 
// let a=[1,2,3,4,5];
// let n=3;
// let ans=a.slice(0,n);
// console.log(ans);

// q2-print last n digits of an array
// let a=[1,2,3,4,5];
// let n=3;
// let ans=a.slice(a.length-n);
// console.log(ans);

// q3 blank string or not
// let a=prompt("please enter a string");
// if(a.length==0){
//     console.log("this is a blank string");
// }
// else{
//     console.log("its not blank");
// }

// q4 if the starting alphabet is lowercased.
// let a="HarsSHiTMisHra";
// let idx=4;
// if(a[4]==a[4].toLowerCase){
//     console.log("this is a lowercased index")
// }
// else{
//     console.log("this is an uppercased index");
// }

