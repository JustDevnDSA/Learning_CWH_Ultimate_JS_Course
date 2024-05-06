// // PROBLEM ----> 1
// let url = "https://geek-jokes.sameerkumar.website/api?format=json";

// let response = fetch(url);

// response
//   .then((v) => {
//     return v.json();
//   })
//   .then((v) => {
//     console.log(v);
//     ihtml = "";
//     ihtml += allJokes.innerHTML = v.joke;
//   });
//harry bhai wla api nhi chal rha thats why abhi ye wala normal sa api se kuch bna kkr question solve kr diya and dusra proj kuch bda nd unique banuga
//BTW HARRY BHAI SOLUTION for ques 1
// let urll = "https://kontests.net/api/v1/all"
// let responsee = fetch(urll)
// responsee.then((v) => {
//         return v.json()
// }).then((contests) => {
//         console.log(contests)
//         ihtml = ""
//         for (item in contests) {
//                 console.log(contests[item])
//                 ihtml += `
//                 <div class="card mx-2 my-2" style="width: 22rem;">
//                                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
//                                 <div class="card-body">
//                                         <h5 class="card-title">${contests[item].name}</h5>
//                                         <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
//                                         <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
//                                         <p>Starts at: ${contests[item].start_time}
//                                         <p>Starts at: ${contests[item].end_time}
//                                         <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
//                                 </div>
//                         </div>
//                 `
//         }
//         cardContainer.innerHTML = ihtml
// })

// QUESTION----->2

let n = localStorage.getItem("note");
alert("your note is " + n);
let a = prompt("Enter your note : ");
if (a) {
    localStorage.setItem("note", a);
}


let c = confirm('do you want to delete your note')
if(c){
    localStorage.removeItem('note')
    alert("Note deleted succesfully !")
}

// Practice krte jaao bhai and time to time new chizo ko as a learning dekho and baar baar try kro and practice kro and tum bhi seekh jaaoge bhai so just practice practice and practice and rukna mt baas and aage bdthe jaao and aage ke video  aur project ke vid dekhte jao and saath me along with practice bhi krte jjao boss and tum bhi sbke saath aage bdh paaoge and postive manner me dekho and seekho new chizzo ok ok boss !!