const serv_num = process.argv;
const express = require("express");
const app = express();
app.listen(serv_num[2], () => {
  console.log("Server starter");
});

app.get("/jonas", (request, response) => {
  response.send("Hellow Jonas from Node js Express");
});

app.get("/", (request, response) => {
    response.send("Hellow");
  });
