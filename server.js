require('dotenv').config()
const express = require ('express') // like importing in react
const server = express() // to use server so we can call all the functions inside the express
const wether = require('./assets/wether.json')
const cors = require('cors')
// const axios = require('axios')
// const myKey = process.env.WEATHER_API_KEY
server.use(cors()) // to make the site availabe for evertone

const PORT = process.env.PORT || 3001 // this is the local of the backend, i can put any number that differ from the front end



server.get('/',test)// the first parameter is always request and the second is always respons
 function test(req,res){
     res.send("home")
 }
 server.listen(PORT,()=>{
    console.log('test consloe') // this appers in terminal 
})

server.get('/',(req,res)=>{
    res.send('home')
})



const movieFunction = require('./modules/movies')
const wetherFunction = require('./modules/wether')
server.get('/wether',wetherFunction)
// localhost:3001/wethe?city=sydney
server.get('/movies',movieFunction)
// localhost:3001/movies?query=sydney



// server.get('/wether',wetherCast)
// async function wetherCast(req,res){
//     let searchQuery = req.query.searchQuery
//     let APIurl = `https://api.weatherbit.io/v2.0/history/daily?city_name=${searchQuery}&start_date=2021-06-11&end_date=2021-06-12&key=${this.myKey}`
// let wetherinfo= await axios.get(APIurl)
// console.log(wetherinfo.data)
// // let wetherCast = wetherinfo.data.map(item=>{
//     // return (wetherinfo.data)


// res.send(wetherinfo)
// }

// class City {
//     constructor(item){
//         this.lon = item.lon
//     }
// }













    // let wetherInfo = wether.city_name

    
    
//     let wetherInfo = wether.data.map(item=>{
//         // console.log(wether.data)
// return item.ozone

//     })
    // res.send(wetherInfo)

//localhost:3001/wethercast?searchQuery=sydney
// server.get('/wether',(req,res)=>{

// let wetherInfo = wether.map(item=>{
//     return item.city_name
// })
// res.send(wetherInfo)
// })
//  //localhost:3001/wetherForCast?searchQuery=sydney
// server.get('/wetherForCast',(req,res)=>{
//     let rchQuery = req.query.searchQuery
//     let info = wether.find(item=>
//         item.city_name == rchQuery)
//         if(info!=undefined){
//             let array = info.data.map(day => new Forecast(day))
      
    
//     res.send(array)
//  } })


// res.send(wetherInfo)




// function Forecast(day) {
//     this.date = day.valid_date
//     this.description = day.weather.description
// }


//lab 8


