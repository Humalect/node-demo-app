var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["Rajesh-test","Lisa","Michael","Ginger","Drinks"]);
});


app.listen(80, () => {
 console.log("Server running on port 80");
});
