
import React, { useRef,useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

function ModelMovie({ handleShow, handleClose, show, moviedata ,commentHandler}) {

  
    const [comment, setComment] = useState("");
    const commentRef = useRef();
    function handleSubmit(e) {
      e.preventDefault();
      const userComment = commentRef.current.value;
      console.log("modal data", moviedata);
      const newMovie = { ...moviedata, userComment };
     
      setComment(userComment);
      commentHandler(newMovie, newMovie.id);
      
    }

  
   async function handleAddFav(e){
    e.preventDefault();
    let url = "https://movieapi-kuu5.onrender.com/addMovie";
    let data = {
      title: moviedata.title,
      id: moviedata.id,
      release_date: moviedata.release_date,
      image: moviedata.poster_path,
      overview: moviedata.overview,
      comment: moviedata.comment
    }
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let recivedData = await response.json();
    console.log('recivedData', recivedData);
    if(response.status === 201){
      alert('added successfuly')
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
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                ref={commentRef}
                type="text"
                placeholder="Add new Comment"
              />
            </Form.Group>
               </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleShow}>
           Add to favourit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default ModelMovie;