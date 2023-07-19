
import "./MovieList.css";
// import Card from 'react-bootstrap/Card';

import Movie from "../Movie/Movie";


function MovieList(props) {
//     let [limit, islimited]=useState(true);
//     const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//     return (
//         <div>
//             <Card style={{ width: '18rem' ,height:'38rem' }}>
    
//       <Card.Body>
//         <Card.Title><strong>Title:</strong>{props.data.title}</Card.Title>
//         <Card.Text><strong>poster_path:</strong>{props.data.poster_path}</Card.Text>
//         <Card.Text><strong>release_date:</strong>{props.data.release_date}</Card.Text>
//         <Card.Text>
//          {/* {props.data.overview} */}
//          {limit ?<p>{props.data.overview.substring(0,300)+"..."}</p>:<p>{props.data.overview}</p>}
//                 <button onClick={()=>islimited(!limit)}>{limit?"see More":"see less"}</button>
//         </Card.Text>
//         {/* <Button variant="primary">Add To Favourit</Button> */}
//       </Card.Body>
//     </Card>
//     <Movie moviedata={props.data} handleClose={handleClose} handleShow={handleShow} show={show}></Movie>
//         </div>
       
//       );

return (
      
          <Movie  data={props.data}></Movie>
     
   
           
       
 
    
)
    
}


export default MovieList;