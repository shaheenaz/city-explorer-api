const axios = require('axios')
const myKey = process.env.WEATHER_API_KEY
const superAgent = require('superagent')
// function wetherFunction
// server.get('/wether',wetherCast)
async function wetherFunction(req, res) {
    let searchQuery = req.query.city
    // let APIurl = `https://api.weatherbit.io/v2.0/history/daily?city=${searchQuery}&start_date=2021-06-11&end_date=2021-06-12&key=${myKey}`
    let APIurl = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQuery},NC&key=${myKey}`
    const dataInfo = await axios.get(APIurl)
    console.log(dataInfo)
  

    // let wetherCast = dataInfo.data.map(item=>{
    //     console.log(item)
    //     return new WetherFunc(item)

    // })


    // res.send(wetherCast)
}

class WetherFunc {
    constructor(item) {
        this.date = valid_time
        this.description = item.description
    }
}
module.exports = wetherFunction;