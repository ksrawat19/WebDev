import React, { useState } from 'react'

const ObjectState = () => {

    const [movie, setMovie] = useState({
        title: "Violet",
        rating: 9.1
    });

    const updateRating = ()=>{

        // const copyMovie = {
        //     ...movie,
        //     rating: 9.9
        // }
        // setMovie(copyMovie);
        // OR
        setMovie({ ...movie, rating: 9.8, genre: "dark"});
    }
    
    return (
        <div>
            <h1>Title: {movie.title}</h1>
            <h1>Rating: {movie.rating}</h1>
            <button onClick={updateRating}>update rating</button>
        </div>
    )
}

export default ObjectState