import React from 'react';
import Card from 'react-bootstrap/Card'
import {useHistory} from 'react-router-dom'
import replaceEmptyImage300x450 from '../img/replaceEmptyImage300x450.jpg'

const MovieCard = ({movieData}) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`${process.env.PUBLIC_URL}/movie/${movieData.id}`)
        
    }
   
    return ( 
        <Card className='mx-2 my-2' style={{cursor: 'pointer', height: 235, width: 120}} onClick={handleClick}>
        <Card.Img variant="top" 
          src={movieData.posterLink ? `https://image.tmdb.org/t/p/w92${movieData.posterLink}` : replaceEmptyImage300x450} 
          style={{height: 170}}
          />
        <Card.Body style={{padding: 2}}>
          <Card.Title style={{fontSize: 12}}>{movieData.title}</Card.Title>
        </Card.Body>
      </Card>
    );
}
 
export default MovieCard