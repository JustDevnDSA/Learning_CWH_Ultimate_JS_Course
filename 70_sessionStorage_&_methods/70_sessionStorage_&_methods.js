// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name","harry")
// sessionStorage.removeItem('name')


localStorage.setItem("name","harry")
localStorage.setItem("name","harry2")

//lil bit confusing just practice it and you can and you will learn it easily in just sometime

window.onstorage = (e) => {
    alert("changed ~")
    console.log(e);
}