// alert("hello")
document.write('hello')

const sum = (a,b,c) =>{
    console.log('yes i am running '+(a+b+c));
    document.write('yes i am running '+(a+b+c)+"</br>");
    a+b
}
//////////function,milisecend delay, function arguments
// setTimeout(sum,3000,1,2,7)
// setInterval(function (){
//     alert('setinterval')
// },3000)
let c =  setInterval(sum,1000,1,2,7)
clearInterval(c)

//task ko talna hai and 1000ms ---> 1s

//a is a timer id
// let a = setTimeout(function (){
//     alert('i am inside of setTimeout')
// },2000)


//stoping the execution of settimeout of a
// let b = confirm('do you want to run the settimeout ? ')
// if(!b){
//     clearTimeout(a)
// }
// console.log(a);