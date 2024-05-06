// problem-2+3
// document.getElementById('g1').addEventListener('click',function(){
//     // let url = 'https://google.com'
//     // let win = window.open(url,"","width=500,height=500,scrollbars=yes,resizable=yes")
//     window.location = 'https://google.com'
//     win.focus()
// })

// setInterval(async function(){
//     let url = 'https://jsonplaceholder.typicode.com/todos/1'
//     console.log(await fetchContent(url));
    
// },2000)

// last problem-5
setInterval(async function (){
    document.querySelector('#bulb').classList.toggle('bulb')
},300)
