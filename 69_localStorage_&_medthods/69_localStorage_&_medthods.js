let key = prompt("enter the key : ");
let value = prompt("enter the value : ");

localStorage.setItem(key, value); //setting the key value pair in local storage


console.log(`The value of ${key} is ${value}`);

if (key == "red" || key == "blue") {
    // Removing a key from localStorage
    localStorage.removeItem(key)
}

if(key==0){
    //Clearing the localStorage
    localStorage.clear()
}

//length of key value pairs
console.log(localStorage.length);

//printing the vlaue of give nkey at index
console.log(localStorage.key(1));
console.log(localStorage.key(0));


localStorage.one = 1
alert(localStorage.one)
// delete localStorage.one


// KEY VALUES SHOULD BE STRINGS AND BY DEFAULT ITS STRING

// JSON.stringify(object) //-->converts object to json string

// JSON.parse(string) //-->convert strings to objects(must be a valid JSON)

localStorage.clear()