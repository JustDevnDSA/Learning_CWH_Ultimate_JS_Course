let x = function(e){
    console.log(e.target);
    console.log(e.type,e.clientX,e.clientY);
    // alert('helllllo1111')
}
// let y = function(e){
//     console.log(e);
//     alert('helllllo2222')
// }

btn.addEventListener('click',x)

// btn.addEventListener('click',y)
// let a = prompt('what is your fav no : ')
// if(a=="2"){
//     btn.removeEventListener('click',x)
// }