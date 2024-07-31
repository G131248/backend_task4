// import geocode from "../../src/geocode"
// import Dlocation from "./lon_lan"
let form = document.getElementById("forecastform")
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(document.getElementById("adress").value)
    weatherFunction()
    form.reset()
})





const errorresult = document.getElementById("error")
const locationresult = document.getElementById("location")
const forecastresult = document.getElementById("forecast")
// const latituderesult = document.getElementById("latitude")
// const longtituderesult = document.getElementById("longititude")




let weatherFunction = async ()=>{
try{
    const adress = document.getElementById("adress").value
    const res = await fetch('http://localhost:3000/weather?adress='+ adress)
    const data = await res.json()
    console.log(data)
    if(data.error){
        error.innerText = data.error
        location.innerText = " "
        forecast.innerText = " "
    }
    else{
        locationresult.innerText = data.location
        forecastresult.innerText = data.forecast
        // latituderesult.innerText = datalat
        // longtituderesult.innerText = datalon
        errorresult.innerText = " "
    }
}
catch(e){
console.log(e)
}
}

