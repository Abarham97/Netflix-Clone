import "./Home.css";
import React from "react";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";
import Movie from "../Movie/Movie";
function Home() {
    const [data, setData] = useState([]);
    async function handleAllTrending() {

        const url = "https://movieapi-kuu5.onrender.com/trending"
        const respons = await fetch(url);
        const movie = await respons.json();
        console.log(movie);
        console.log(url);
       
       
        setData(movie)
    }
    useEffect(() => {
        handleAllTrending()
        console.log('insdie useEffect', data);
    },[]);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
            {data.map((obj, i) => (
               
                <MovieList data={obj} key={i} />
               
            ))}

        </div>
    )

}


export default Home;