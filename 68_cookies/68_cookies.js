console.log(document.cookie);
document.cookie = 'name=Prakash0000233'
document.cookie = 'name2=Prakash05233'
document.cookie = 'name=Haryy' //set call
let key = prompt('enter your key ? ')
let value = prompt("enter your value : ")
// document.cookie = `${key} = ${value}`
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}` //set call
// decodeURI('key') --> used to decode the encoded cookie

console.log(document.cookie)

