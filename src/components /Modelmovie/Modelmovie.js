
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModelMovie({ handleShow, handleClose, show, moviedata }) {
  
   async function addMovie(moviedata){

    const response=await fetch('https://movieapi-kuu5.onrender.com/addMovies', {
        method: 'POST',
       
        body: JSON.stringify(moviedata),
      });


   }

   const image=`https://image.tmdb.org/t/p/w500${moviedata.poster_path}`;
   
    return (
      <div>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{moviedata.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img style={{width: '100%'}} src={image} alt={moviedata.title} />
          <p>{moviedata.overview}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addMovie}>
           Add to favourit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
export default ModelMovie;