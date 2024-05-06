// HARRY BHAI HACKERMAN SOLUTION

let a = [
  "Initializing hack tool....",
  "Connecting to server 1....",
  "Connecting to facebook...",
  "Connection failed, retrying...",
  "Connecting to server 2",
  "Connected succesfully",
  "Username idontknow..",
  "Trying brute force",
  "200k passwords tried",
  "Match not found",
  "Another 200k password tried...",
  "Match found.....",
  "Accessing account",
  "Hack successful !!!",
];

const sleep = (seconds) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },seconds*1000)
    })
}

const showHack = async (messages) => {
    await sleep(2)
    // console.log(messages);
    main.innerHTML = main.innerHTML + messages + '<br>' + '<br>'
}

(async () => { 
    for(let i=0 ; i<a.length;i++){
        await showHack(a[i])
    }
})()

// Disabling right click feature
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
// });
