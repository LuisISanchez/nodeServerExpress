const http = require("http");
//const express = require("express");

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application/json'})
    let salida = {
        nombre:"Luis",
        edad:22,
        url:req.url
    }
    res.write(JSON.stringify(salida))
    res.end();
});

server.listen(8080);
console.log("Escuchando puerto 8080");

