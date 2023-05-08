const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Server starter");
});

app.get("/users", (request, response) => {
  response.send("Hellow Users from Node js Express");
});

app.get("/", (request, response) => {
    response.send("Hellow from Node js Express");
  });
