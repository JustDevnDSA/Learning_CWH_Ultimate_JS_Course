console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
console.log(typeof document.body.childNodes); //nodelist and array methods will not work
let arr = Array.from(document.body.childNodes)
console.log( typeof arr);
console.log( Array.isArray(arr));