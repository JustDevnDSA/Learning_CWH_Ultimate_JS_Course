let id1 = document.getElementById("id1")
console.log(id1);
console.log(id1.matches('.box')); //will return true
console.log(id1.matches('.class')); //will return false

console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));


console.log(sp1.contains(sp1));
console.log(id1.contains(sp1));
console.log(sp1.contains(id1));