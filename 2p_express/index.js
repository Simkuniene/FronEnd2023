const express = require("express");
const app = express(); //Inicializuojame Express kaip programėlę pavadinimu 'app'



app.get("/", (req, res) => {
    res.send("OK")
  });

  app.listen(8080, () => console.log("The server is running on port 8080")); //Ši 
  //būtent eilutė pasako JavaScriptui, kad jam ne tik reikia perskaityti kodą ir 
  //palikti jį; bet būti pastoviai įjungtam - ir klausytis


  //Galėti nueiti į jūsų localhost adresą su portu 8080 
  //(t.y. localhost:8080 arba http://127.0.0.1:8080) ir 
  //jums turėtų išmesti užrašą "OK".
