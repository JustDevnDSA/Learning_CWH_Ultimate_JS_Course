//getAttribute ->get the value of attribute
let a = first.getAttribute('class')
console.log(a);


// hasAttribute --> check if it has the attribute or not
console.log(first.hasAttribute('class'));
console.log(first.hasAttribute('style'));

// setAttribute --> set the value of attribute
// first.setAttribute('hidden',"true")
// first.setAttribute('class',"true prakash")

//removeAttribute
first.removeAttribute('class')

//attribute
console.log(first.attributes);

console.log(first.dataset.game);
console.log(first.dataset.player);
