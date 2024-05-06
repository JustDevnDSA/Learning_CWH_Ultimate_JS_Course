// Write a javascript programme to pretend to look like a hacker . write an async function which will simply display the following output:
/*
Initializing Hack Programme...
Hacking Target username...
Username Found random222...
Connecting to facebook...
 */

let hackerMan = async () => {
    let s1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Initializing Hack Programme...')
            // console.log('Initializing Hack Programme...');
        },1500)
    })
    let s2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Hacking Target username...')
            // console.log('Hacking Target username...');
        },3000)
    })
    let s3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Username Found random222...')
            // console.log('Username Found random222...');
        },3800)
    })
    let s4 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Connecting to facebook....')
            // console.log('Connecting to facebook....');
        },5000)
    })

    let ss1 = await s1
    console.log(ss1);
    let ss2 = await s2
    console.log(ss2);
    let ss3 = await s3
    console.log(ss3);
    let ss4 = await s4
    console.log(ss4);

}

hackerMan()


// NOT UNDERSTOOD WHAT TO ACTUALLY DO IN THIS SO WILL SEE HARRY BHAI SOLUTION FOR THIS FOR MORE CLARITY