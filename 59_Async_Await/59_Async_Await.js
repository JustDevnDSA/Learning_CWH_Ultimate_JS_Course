// ASYNC AND AWAIT IN JAVASCRIPT
// async will return promises

async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("35 Deg");
    }, 2000);
  });

  let patnaWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("40 Deg");
    }, 5000);
  });

  //   delhiWeather.then(alert)
  //   patnaWeather.then(alert)
  console.log("fetching delhi weather....");
  let delhiW = await delhiWeather;
  console.log("delhi fetched ! " + delhiW);

  console.log("fetching patna weather....");
  let patnaW = await patnaWeather;
  console.log("patna fetched ! " + patnaW);
  return [delhiW, patnaW];
}

const cherry = async () => {
  console.log("Hey i am cheey and i am not waiting");
};

const main1 = async () => {
  console.log("welcome to weather demo room");
  let a = await harry();
  let b = await cherry();
//   a.then((value) => {
//     console.log(value);
//   });
  // console.log(a);
};

main1()