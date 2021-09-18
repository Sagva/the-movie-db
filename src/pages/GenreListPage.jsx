import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { getAllGenres } from '../serveces/API'
import Button from 'react-bootstrap/Button'

const GenreListPage = () => {
    const history = useHistory()
    const { data: genres, isError } = useQuery([`genres`], getAllGenres)
    
    const handleClick = (genreId) => {
        history.push(`${process.env.PUBLIC_URL}/genre/${genreId}?page=1`)
    }

    const renderGenres = () => {
        if (genres) {
            return (
                <div>
                    <h2 className='my-4'>Discover Movies By Genre</h2>
                    <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-md-start my-4'>
                        {genres.map((genre, i) => {
                            return (
                                <Button 
                                    key={i}
                                    className='my-2 mx-2'
                                    variant="outline-secondary"
                                    style={{width: 150}}
                                    onClick={() => handleClick(genre.id)}
                                >
                                    {genre.name}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            )
        } else if (isError) {
            return (
                <div className="container">Some error has occurred </div>
            )
        }
        return (
            <div className="container">Loading... </div>
        )
    }

    return (
        <div className='container'>
            {renderGenres()}
        </div>
    );
}

export default GenreListPage;