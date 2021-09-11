import React from 'react';
import Card from 'react-bootstrap/Card'
import {useHistory} from 'react-router-dom'

const MovieCard = ({movieData}) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/movie/${movieData.id}`)
    }

    return ( 
        <Card style={{ width: '10rem' }} className='mx-2 my-2' onClick={handleClick}>
        <Card.Img variant="top" src={movieData.posterLink} />
        <Card.Body>
          <Card.Title>{movieData.title}</Card.Title>
        </Card.Body>
      </Card>
    );
}
 
export default MovieCard;