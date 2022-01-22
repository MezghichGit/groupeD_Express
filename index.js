const express = require("express"); // import du serveur express
const app = express();  // instanciation du serveur express
const equipes = require("./equipes.json");
app.use(express.json());

app.listen(84,()=>{
    console.log("REST API using Node Express JS");
})

app.get("/equipes",(request, response)=>{
    //res.send("Liste des équipes");
    response.status(200).json(equipes);
})

app.get("/equipes/:id",(request, response)=>{
    //res.send("Liste des équipes");
    const id = parseInt(request.params.id);
    const equipe = equipes.find(equipe=>equipe.id ===id)
    response.status(200).json(equipe);
})

app.post("/equipes",(request, response)=>{
    equipes.push(request.body)
    response.status(200).json(equipes);
})

app.put("/equipes/:id",(request, response)=>{
    
    const id = parseInt(request.params.id);
    let equipe = equipes.find(equipe=>equipe.id ===id);
    equipe.name = request.body.name;
    equipe.country = request.body.country;
    response.status(200).json(equipes);
})

app.delete("/equipes/:id",(request, response)=>{
    
    const id = parseInt(request.params.id);
    let equipe = equipes.find(equipe=>equipe.id ===id);
    equipes.splice(equipes.indexOf(equipe),1);
    response.status(200).json(equipes);
})