import React, { useState } from 'react'

const ArrayObjectState = () => {

    const [movies, setMovies] = useState([
        {id: 1, title: "iron-man", rating: 9},
        {id: 3, title: "silver-man", rating: 4},
        {id: 4, title: "gold-man", rating: 7},
    ]);

    const updateMovie = ()=>{
        setMovies(movies.map((movie)=>(
            movie.id===3? {...movie, title:"diamond-man", rating:9.9}: movie
        )))
    }

    return (
        <div>
            {
                movies.map((movie)=>(
                    <li key={movie.id}>
                        {movie.title} — Rating: {movie.rating}
                    </li>
                ))
            }
            <button onClick={updateMovie}>update movie</button>
        </div>
    )
}

export default ArrayObjectState