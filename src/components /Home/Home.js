import "./Home.css";
import React from "react";
import { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList";


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
    function commentHandler(newMovie,id){
  
        data.map((movie) => {
          if(movie.id === id){
            movie.comment = newMovie.userComment;
            return movie;
          }else{
            return movie;
          }
        })
        
      }
    useEffect(() => {
        handleAllTrending()
        console.log('insdie useEffect', data);
    },[]);

    return (
     
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
            
            {data.map((obj, i) => (
          
                 <MovieList   commentHandler={commentHandler} data={obj} key={i} />
         
               
               
            ))}

        </div>
    )

}


export default Home;