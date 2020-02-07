// fetch weather from api using axios

const axios = require('axios');
var readlineSync = require('readline-sync');

function getWeather(city) {
    
    return new Promise((resolve,reject) => {
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fb3d4f68cbf116b821f99b749df9f9e0`)
    
    .then(response => resolve(response.data))
    .catch((err) => console.log(err))

})
}

// consuming getWeather

async function freshWeather(city) {
    try {

        var wet = await getWeather(city);

        console.log('Your city temperature is ' + Math.round(wet.main.temp - 273.15) + ' *C')

    } catch(err) {
        console.log(err);
    }
}

freshWeather(readlineSync.question('May I have your city Name? '))



 


