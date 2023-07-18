import React from "react";
import './App.css'
import Searchf from './Search.png'
import { useEffect,useState } from "react";
import MovieCartat from "./MovieCard";
//4e78cdf5
const API_URL=' http://www.omdbapi.com/?apikey=4e78cdf5';
const move1= 
    {
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    }

const App = () => {
    const [movies ,setMovies ] = useState([])
    const [input ,setInput] = useState('')


const kontrolloFilmat = async (tittle) =>{
    const response = await fetch(`${API_URL}&s=${tittle}`)
    const data = await response.json()
    setMovies(data.Search)
    console.log(movies)
}

    useEffect(() => {
       kontrolloFilmat('Spiderman')
    }, [])
    return (
        <div className="app">
            <h1>Movie Land</h1>
            <div className="search">
                <input placeholder="Search For Movies" value={input} onChange={(e) => setInput(e.target.value)} ></input>
                <img src={Searchf} alt="search" onClick={() => kontrolloFilmat(input)}></img>
            </div>
            {
                
                movies.length > 0 ? (<div className="container">
                {
                        movies.map((movie) => {
                            return <MovieCartat prop={movie}></MovieCartat>
                        })
                }    
                </div>) 
                :(
                    <h2>No Movies Found</h2>
                )
            }
          
        </div>
        )
}
export default App;