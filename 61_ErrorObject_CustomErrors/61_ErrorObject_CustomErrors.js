// try {
//   // harry
//   console.log(harry);
//   // throw new Error('Harry is not good')
//   throw new ReferenceError("Harry is not good");
// } catch (error) {
//   console.log(error.name); //name of error
//   console.log(error.message); //message of the error
//   console.log(error.stack);
// }

try {
    let age = prompt('Enter your age')
    age = Number.parseInt(age)
    if(age>150){
        throw new ReferenceError('This is probably not true !')
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log('The script is still runing');


// EXPLORE MORE TYPES OF ERROR ON MDN DOCS