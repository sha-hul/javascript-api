// Promise in JavaScript

// Basic for promise

// let wwcd=false;
// let promise= new Promise(
//     (resolve,reject)=>{
//         if(wwcd){
//             resolve("This is true Value");
//         }
//         else{
//             reject("This is a false Value");
//         }
//     }
// );
// console.log(promise);

// Promise very difficult

// let condition=(check)=>{
//    return new Promise ((resolve,reject)=>{
//     if(check){
//         resolve("This is true condition ");
//     }
//     else{
//         reject("This is false condition");
//     }
//    })
// };
// let onFullfill=(resolve)=>{
//     console.log(resolve);
// }
// let onReject=(reject)=>{
//     console.log(reject);
// }
// condition(false).then(onFullfill).catch(onReject);

// Divide the two numbers

// let condition =(a,b)=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Three Two One Boom");
//         setTimeout(()=>{
//             c=a/b;
//             if(a,b){
//                 resolve(`your answer : ${c}`);
//             }
//             else{
//                 reject(`This is not dividend`)
//             }
//             },3000)
//         }
//     )
// }
// let onFulfill=(result)=>{
//     console.log(result);
// }
// let onReject=(reject)=>{
//     console.log(reject);
// }
// condition(10,0).then(onFulfill).catch(onReject);

//  Task in Promise

// We can use the promise function in the API also

// Don't Known

// Ajax in JavaScript
// Ajax is the techinique for update our website without reloading.It makes our website fast and dynamic

// function loadData(){ 
//     let xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//         if(this.readyState==4 && this.status==200){
//             document.getElementById("mes").innerHTML=this.responseText;
//         }
//         else if(this.readyState==4 && this.status==404){
//             document.getElementById("mes").innerHTML="File not Found";
//         }
//     }
//     xhttp.open("GET","content/ajax.txt",true);
//     xhttp.send();
// }

// Fetch API

// Instead of Ajax and Jquerry we are using the Fetch API

// For text

// function loadData(){
// fetch("content/ajax.txt")
// .then((response)=>response.text())
// .then((data)=>document.getElementById("mes").innerHTML=data);
// .catch((onReject)=>console.log("This Data is Not Found"));
// }

// For json

// function loadData(){
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((data)=>document.getElementById("mes").innerHTML=data)
// .catch((onReject)=>console.log("This Data is Not Found"));
// }

// fetch API in the My JSON File

function loadData(){
    fetch("content/fetch.json")
    .then((response)=>response.json())
    .then((data)=>console.log(data[0].name))
    .catch(()=>console.log("This is Not Found"))
}
// async and await in JavaScript

// The word "async" before the function means that function always returns the promise .

async function data(){

}