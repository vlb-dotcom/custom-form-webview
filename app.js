const express = require("express");
var path = require('path')
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/js'));

app.listen(3000, function () {
    console.log("Server is running on localhost: 3000");
});