// CREATE A JAVASCRIPT PASSWORD GENERATOR WITH ALL ESSENTIAL FEATURES AND CREATE A PASSWORD CLASS TO ACHIEVE THE SAME

/*
class password:
     generatestrongpassword
    geneertaeweakpass
     generatesuperstrongpassword
     createfunnypassword
*/

// GOT STUCKED IN MIDDLE PRACTICE BRO AND UNDERSTAND THE CONCEPTS IN DETAILS

// class Password{
//     constructor(){
//         console.log('Welcome to password generator');
//         let upper = 'ABCDEFGHIJKLMOPQRSTUVWXYZ'
//         let smaller = 'abcdefghijklmnopqrstuvxyz'
//         let num = '1234567890'
//         let sybmol = '~@#$%^&*()|{}[]/?+-'
//         let allCombined = upper+ smaller + num + sybmol
//         // console.log(allCombined);
//         let pass = ''
//     }
//     strongPassword(){
//         console.log();
//     }
//     weakPassword(){

//     }
//     superStrongPassword(){

//     }
//     // funnyPassword(){

//     // }
// }

// let p = new Password()
// p.strongPassword()
// p.weakPassword()
// p.superStrongPassword()
// // p.funnyPassword()

// GENERATED USING GPT AND INTERNET (very good logic and usecase so please try to understand this and dry run this code )
class Password {
  // Generate a strong password with a mix of uppercase, lowercase, numbers, and symbols
  static generateStrongPassword(length = 14) {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+";

    const allChars =
      upperCaseChars + lowerCaseChars + numberChars + symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    return password;
  }

  // Generate a weak password with lowercase letters and numbers
  static generateWeakPassword(length = 8) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";

    const allChars = lowerCaseChars + numberChars;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    return password;
  }

  // Generate a super strong password with a mix of uppercase, lowercase, numbers, symbols, and additional complexity
  static generateSuperStrongPassword(length = 16) {
    // You can customize this according to your needs
    // For example, you can include more symbols, or exclude ambiguous characters like 'I', 'l', '1', 'o', '0', etc.
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+";
    const additionalChars = "{}[];:,.<>?/~";

    const allChars =
      upperCaseChars +
      lowerCaseChars +
      numberChars +
      symbolChars +
      additionalChars;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }

    return password;
  }

  // Generate a funny password
  static createFunnyPassword() {
    const funnyPasswords = [
      "banana123",
      "password1234",
      "letmein",
      "qwerty",
      "abc123",
      "iloveyou",
      "laughOutLoud123",
      "tickleMePink456",
      "giggleFactory789",
      "chuckleChampion101",
      "comedyCentral2020",
      "hilariousBanana22",
      "sillyGoosePassword",
      "funnyBone1234",
      "wittyKitty567",
      "jokesterJamboree999",
      "laughterLover2021",
      "amusingPenguinPassword",
      "humorousHippo777",
      "goofyGiraffe12",
      "comicalKangarooPass",
      "pranksterParrot2022",
      "grinAndBearIt555",
      "hilariousHedgehogP@ss",
      "laughTrack321",
      "smileyFacePassword44"
      // Add more funny passwords here if needed
    ];

    const randomIndex = Math.floor(Math.random() * funnyPasswords.length);
    return funnyPasswords[randomIndex];
  }
}

// Example usage:
console.log("Strong Password:", Password.generateStrongPassword());
console.log("Weak Password:", Password.generateWeakPassword());
console.log("Super Strong Password:", Password.generateSuperStrongPassword());
console.log("Funny Password:", Password.createFunnyPassword());

// Display passwords in HTML
document.getElementById('strongPassword').textContent = 'Strong Password: ' + Password.generateStrongPassword();
document.getElementById('weakPassword').textContent = 'Weak Password: ' + Password.generateWeakPassword();
document.getElementById('superStrongPassword').textContent = 'Super Strong Password: ' + Password.generateSuperStrongPassword();
document.getElementById('funnyPassword').textContent = 'Funny Password: ' + Password.createFunnyPassword();


// Disabling right click feature
// document.addEventListener('contextmenu', function(event) {
//   event.preventDefault();
// });
