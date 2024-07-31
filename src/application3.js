
const { Console } = require("console")
const express = require("express")
const app = express()
const port = process.env.port || 3000

const path = require("path")
const project3 = path.join(__dirname, "../public")
app.use(express.static(project3))

// application3.get("/", (req,res)=>{
//     res.send("THE HOME PAGE")
// })


app.set("view engine", "hbs");

const viewsDirectory= path.join(__dirname, '../template1/views')
app.set('views', viewsDirectory)

var hbs = require("hbs")
const partialsPath = path.join(__dirname, '../template1/partials')
hbs.registerPartials(partialsPath)

app.get("/", (req,res)=>{
    res.render('index', {
        title: "DYNAMIC HOME PAGE",
        desc: "DYNAMIC PAGE"
    })
})
app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "SERVICE",
        name: "Mohamed",
     age:"44"
    })
})

app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "team",
        name: "Mohamed",
     age:"44",
     img1:"images/3.jpeg"
    })
})

app.get ('/instructions' , (req,res) => {
    res.render('instructionsm' , {
        title : "team",
        name: "Mohamed",
     age:"44",
     img1:"images/3.jpeg"
    })
})

app.get ('/cars' , (req,res) => {
    console.log(req.query)
    res.send ({
        car : "BMW",
        price: "2000000"})})
    
  

app.get ('/details' , (req,res) => {
    res.render('details' , {
        title : "team",
        name: "Mohamed",
     age:"44",
     img1:"   "
    })
})
app.get ('/products' , (req,res) => {
    res.send('404 page not found')
})


const geocode = require("./geocode")
const forcast = require("./forcast")
app.get ('/weather' , (req,res) => {
    if(!req.query.adress){
        return res.send({
            error: "you must provide adress"
        })
    }
geocode(req.query.adress, (error, data)=>{
   if(error){
    return res.send({error})
   } 
forcast(data.latitude, data.longtitude, (error, forecastData)=> {
    if(error){
        return res.send({error})
       }
    res.send({
        forecast: forecastData,
        location: req.query.adress
    })
    })
})
})




    app.listen(port, ()=>{
    console.log("APP WORKING")
})
