const request = require("request")
const forcast = (latitude, longtitude, callback) =>{
const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude
request({url, json: true}, (error, response) =>{

    // console.log(response.body)

    // const data1 = JSON.parse(response.body)
    // console.log(data1)

    if(error) {
       callback("error has occured" , undefined)
    } else if (response.body.error){
        callback("response.body.error.message" , undefined)                             
    } else{
        callback(undefined , response.body.location.name + "-- " + response.body.current.condition.text
         + "--"  + response.body.current.temp_c 
        ) 

    }   

}) 
}

module.exports = forcast
