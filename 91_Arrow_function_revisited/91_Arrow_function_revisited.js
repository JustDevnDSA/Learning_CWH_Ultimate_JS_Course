// const sayHello = (name, greeting) =>
//   console.log("helleo " + name + " " + greeting);
// sayHello('Harry','Good afternoon');
const sayHello = name => {
    console.log(name);
    console.log('Hiii');
}

const x = {
  name: "Harry",
  role: "Js dev",
  exp: 30,

  show: function () {
    // console.log(`Name hai ${this.name}\nThe role is ${this.role}`);
    // let that = this;
    // console.log(this); //returns window object
    // setTimeout(function () {
    //   console.log(`Name hai ${that.name}\nThe role is ${that.role}`);
    // }, 2000);

    setTimeout(() => {
      console.log(`Name hai ${this.name}\nThe role is ${this.role}`);
    }, 2000);
  },
};
sayHello(x.name,x.exp)
// x.show();
