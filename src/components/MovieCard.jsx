import React from 'react';
import Card from 'react-bootstrap/Card'

const MovieCard = ({movieData}) => {

    return ( 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{movieData.original_title}</Card.Title>
        </Card.Body>
      </Card>
    );
}
 
export default MovieCard;