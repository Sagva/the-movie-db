import React from 'react';
import Card from 'react-bootstrap/Card'

const MovieCard = ({movieData}) => {

    return ( 
        <Card style={{ width: '10rem' }} className='mx-2 my-2'>
        <Card.Img variant="top" src={movieData.posterLink} />
        <Card.Body>
          <Card.Title>{movieData.title}</Card.Title>
        </Card.Body>
      </Card>
    );
}
 
export default MovieCard;