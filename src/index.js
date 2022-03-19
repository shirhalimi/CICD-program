const express = require("express");
const port = (process.env.PORT || 4000);
const app = express();


app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
    res.sendFile("views/homePage.html", { root: __dirname });
});

app.get("/loginPage.html", (req, res) => {
  res.sendFile("views/loginPage.html", { root: __dirname });
});

app.get("/contactUs.html", (req, res) => {
    res.sendFile("views/contactUs.html", { root: __dirname });
  });

app.listen(port,() => {
    console.log("Server started on port ", port);
 });
