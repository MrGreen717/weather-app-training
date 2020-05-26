const request = require('request')

const forecast = (lat, long , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d06e969de8d8da6ffc0bb8b452fe451d&query=' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Current temperature ' + body.current.temperature + ' Feels like a ' + body.current.feelslike
            )
        }  
    })
}

module.exports = forecast