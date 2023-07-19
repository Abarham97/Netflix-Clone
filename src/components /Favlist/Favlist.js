

import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
function Favlist() {
  const [favMovie, setfavMovie] = useState([]);
  async function handleFavMovie() {
    const url = "https://movieapi-kuu5.onrender.com/favorite";
    let response = await fetch(url);
    let recivedData = await response.json();
    setfavMovie(recivedData);
  }
  async function handleDelete(id){
    const url = `https://movieapi-kuu5.onrender.com/deleteMovie/${id}`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
    });
    if(response.status === 204){
      alert('deleted successfuly')
    }
    handleFavMovie();
  }
  useEffect(() => {
    handleFavMovie();
  }, []);
  const image=`https://image.tmdb.org/t/p/w500${favMovie.poster_path}`;
  return (
    <div>
      {favMovie.map((movie, id) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Button variant="primary" onClick={()=> handleDelete(movie.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Favlist;