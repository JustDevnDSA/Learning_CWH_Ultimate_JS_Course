//problem-1
// var firstNavItem = document.getElementById('firstNavItem');

// // Change the color of the first nav-link element
// firstNavItem.style.color = 'red'; // Change to your desired color

// problem-2


// problem-3
// document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red'
// document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'green'
// document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green'

Array.from(document.getElementsByTagName("li")).foreach(element=>{
    element.style.color = 'orange'
})

//hary bhai solution
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan";
}) 