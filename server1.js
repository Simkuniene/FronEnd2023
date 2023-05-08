const express = require('express');
const app = express();
app.listen(3000, () =>{
    console.log("Server starter");
});

app.get("/", (request, response) => {
    response.send("hellow");
});




