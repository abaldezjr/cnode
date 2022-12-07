const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.sendFile(__dirname+"/html/index.html");
});

app.get("/sobre",function(req, res){
    res.sendFile(__dirname+"/html/sobre.html");
});

app.get("/blog",function(req, res){
    res.sendFile(__dirname+"/html/blog.html");
});

app.get("/ola/:cargo/:nome",function(req, res){
    res.send(req.params);
});


app.listen(8080, function(){
    console.log("O sevidor esta rodando em http://localhost:8080");
});