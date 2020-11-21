const request = require('request');

let apiKey = '5bd8f8ab57ad59dfd4f93cfa9fe52213';
let city = 'Ludhiana';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    // let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(weather.main.temp);
  }
});