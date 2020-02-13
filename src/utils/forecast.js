const request = require('request')


const forecast =(latitude,longitude,callback) =>{
    
    const url = 'https://api.darksky.net/forecast/e926a0b6c32fb7c83675d58453ff50ed/'+ latitude +','+ longitude
    request({ url, json: true},(error, {body}) =>{

        if(error){
            callback('Unable to connect to weather service!(Please check your internet connection and try again.)',undefined)
        }
        else if(body.error){
            callback('Unable to fetch  Location',undefined)
        }
        
        else{
            callback(undefined,'It is currently '+body.currently.temperature +' degrees out. There is a '+body.currently.precipProbability+'% chance of rain. The wind speed is :' + body.currently.windSpeed)       
        }
    })
}

module.exports = forecast