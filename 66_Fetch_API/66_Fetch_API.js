// Fetch API in JavaScript
let p = fetch('https://goweather.herokuapp.com/weather/Ny')
p.then((response)=>{
    console.log(response.status);
    
    console.log(response.ok);
    //request headers
    console.log(response.headers);

    // console.log(response.text());
    return response.json()

}).then((value2)=>{
    // console.log(value2)
    let aaa = value2
    console.log(aaa);
})