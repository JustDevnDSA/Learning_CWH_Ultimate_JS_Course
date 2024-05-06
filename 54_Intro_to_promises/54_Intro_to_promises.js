// INTRODUCTION-TO-PROMISES

let promise = new Promise(function(resolve,reject){
    alert(' I am an alert in promise')
    resolve(56)
})

console.log('Hello one');
setTimeout(function(){
    console.log('hello two in 2 seconds');
},2000)
console.log('My name is '+' hello three'); 

console.log(promise);

// Fetch google.com homepage ==> console.log("google.com homepage done")
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script