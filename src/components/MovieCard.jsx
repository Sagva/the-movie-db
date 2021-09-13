import React from 'react';
import Card from 'react-bootstrap/Card'
import {useHistory} from 'react-router-dom'

const MovieCard = ({movieData}) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/movie/${movieData.id}`)
    }

    return ( 
        <Card className='mx-2 my-2' style={{cursor: 'pointer'}} onClick={handleClick}>
        <Card.Img variant="top" src={movieData.posterLink} />
        <Card.Body>
          <Card.Title style={{fontSize: 14, height: 30}}>{movieData.title}</Card.Title>
        </Card.Body>
      </Card>
    );
}
 
export default MovieCard;