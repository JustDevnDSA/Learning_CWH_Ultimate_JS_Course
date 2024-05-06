// ALERT  PROMT AND CONFIRM

alert("Enter the value of a ")

let info = prompt('enter the value of  a : ' ,'56..')
info = Number.parseInt(info)
let write  = confirm("Do you want to write on the page ?")
if(write){
    document.write(info)
}
else{
    document.write("please allow me to write")
}
// alert("the type of "+info+' is '+ typeof info)
