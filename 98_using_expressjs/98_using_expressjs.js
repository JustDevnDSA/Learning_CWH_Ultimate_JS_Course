const express = require("express");
const path = require('path')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.query);
//   res.send("Hello World!");
//connecting a html file to the given path
// res.sendFile(path.join(__dirname,'/main.html'))

//another way
res.sendFile(__dirname + '/main.html');
});

app.get("/about", (req, res) => {
//   res.send("about");
res.sendfile(__dirname + '/about.html')
});
app.get("/contact", (req, res) => {
//   res.send("contact");
res.sendfile(__dirname + '/contact.html')

});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
