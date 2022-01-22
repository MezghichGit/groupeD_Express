const express = require("express"); // import du serveur express
const app = express();  // instanciation du serveur express
const equipes = require("./equipes.json");
app.listen(84,()=>{
    console.log("REST API using Node Express JS");
})

app.get("/equipes",(request, response)=>{
    //res.send("Liste des équipes");
    response.status(200).json(equipes);
})