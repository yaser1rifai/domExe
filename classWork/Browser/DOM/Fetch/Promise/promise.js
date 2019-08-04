/* let promise=new Promise(function(resolve, reject){
resolve(
    setTimeout(function(){
       console.log("Job is done")
    },1000 )

)
})

let promise3=new Promise(function(resolve,reject){
    resolve(console.log("Job Done!"))  // Job Done!

    reject(new Error("Job Not done")) //ignored
}) */
//--------------consuming code ----------  .then  -----------------------------
let promisse4=new Promise(function(resolve,reject){
    setTimeout(()=>{
 resolve("job is Done")},4000)
})
promisse4.then(
    result=>console.log(result) ,
   
).catch (error =>console.log(error));

// . finally

new Promise((resolve, reject)=>{
setTimeout(()=>{ resolve("result")},2000)
})
.finally(()=>console.log("Promise today"))
.then (result=>(result))                   //.....then handels the result
.catch(err=>console.log(error));          // handles the error object

// async

async function myFun() {
    let myVar = "Hello"
 }
 
 myFun().then(console.log("async promise"));
 
 
 // await
 
 function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000);
    });
 }
 
 async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
 }