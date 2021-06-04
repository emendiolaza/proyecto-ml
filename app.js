const path = require("path")
const express = require ("express");
const app = express ();

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => console.log('Servidor esta corriendo en http://localhost:'+app.get("port")));


//app.listen(3000,() => console.log("Open Server"))

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname,"./views/home.html")));

app.get("/Register", (req, res) => res.sendFile(path.join(__dirname,"./views/register.html")));

app.get("/Login", (req, res) => res.sendFile(path.join(__dirname,"./views/login.html")));


//Ruta Raiz / Home

