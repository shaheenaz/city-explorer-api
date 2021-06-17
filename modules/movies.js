const axios = require ('axios')
let myKey = process.env.MOVIE_KEY
async function movieFunction (req,res){
    let searchQuery = req.query.query
    // https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

    let APIurl = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=${searchQuery}`

// let memory = []




// if(memory[])



    axios
    .get(APIurl) // const dataInfo = await axios.get(APIurl)
    .then(movieInfo => {
    let movieDeat = movieInfo.data.results.map(item => {
    return new MovieFunc(item);
     })
        res.send(movieDeat);
    })
    .catch(error => {
        res.status(500).send(`Not found ${error}`);
    })








    // let movieinfo= await axios.get(APIurl)
// console.log(movieinfo.data)
// let movieDeat = movieinfo.data.data.map(item=>{
//     return new MovieFunc(item)
// })
// res.send(movieDeat)
}

class MovieFunc{
constructor(item){
    this.title = item.original_title;
    this.overview = item.overview;
    this.average_votes = item.vote_average;
    this.total_votes = item.vote_count;
    this.image_url = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    this.popularity = item.popularity;
    this.released_on = item.release_date;
}
}

module.exports = movieFunction






