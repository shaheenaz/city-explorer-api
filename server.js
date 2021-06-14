const express = require ('express') // like importing in react
const server = express() // to use server so we can call all the functions inside the express
const wether = require('./assets/wether.json')
const cors = require('cors')

server.use(cors()) // to make the site availabe for evertone

const PORT = 3001 // this is the local of the backend, i can put any number that differ from the front end
server.get('/test',(request,response)=>{ // the first parameter is always request and the second is always respons
    response.send('tset')
})

server.get('/wether',(req,res)=>{

    let wetherInfo = wether.city_name
    
    
    
//     let wetherInfo = wether.data.map(item=>{
//         // console.log(wether.data)
// return item.ozone

//     })
    res.send(wetherInfo)
})
server.get('/wetherCast',(req,res)=>{

    // let wetherInfo = wether.lon

res.send(wether.lon)
})

server.listen(PORT,()=>{
    console.log('test consloe') // this appers in terminal 
})