const express = require("express");
const { __express } = require("hbs");
const app = express()
const hbs = require("hbs")
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static("public"))
hbs.registerPartials(__dirname+"/views/partials")

app.listen(3000)
app.get("/",(req, res)=>{
    res.render("index")
})
app.get("/nosotros",(req, res)=>{
    console.log("pagina nosotros")
    res.render("nosotros",{nombre:"SAS", region:"Rancagua"})
})
