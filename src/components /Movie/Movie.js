import "./Movie.css";
import ModelMovie from "../Modelmovie/Modelmovie";
import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Movie(props){

    let [limit, islimited]=useState(true);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const image=`https://image.tmdb.org/t/p/w500${props.data.poster_path}`;
    return (
        <div>
            <Card style={{ width: '18rem' ,height:'60rem' }}>
    
      <Card.Body>
      <Card.Img variant="top" src={image}/>
        <Card.Title><strong>Title:</strong>{props.data.title}</Card.Title>
      
       
        <Card.Text><strong>release_date:</strong>{props.data.release_date}</Card.Text>
        <Card.Text>
       
         {limit ?<p>{props.data.overview.substring(0,300)+"..."}</p>:<p>{props.data.overview}</p>}
                <button onClick={()=>islimited(!limit)}>{limit?"see More":"see less"}</button>
        </Card.Text>
        <Button onClick={handleShow} variant="primary">Add To Favourit</Button>
      </Card.Body>
    </Card>
    <ModelMovie    commentHandler={props.commentHandler} moviedata={props.data} handleClose={handleClose} handleShow={handleShow} show={show}></ModelMovie>
    
        </div>
    )

}

export default Movie;