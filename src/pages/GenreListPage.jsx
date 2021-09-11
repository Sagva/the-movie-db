import React from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { getAllGenres } from '../serveces/API'
import Button from 'react-bootstrap/Button'

const GenreListPage = () => {
    const history = useHistory()
    const { data: genres, isError } = useQuery([`genres`], getAllGenres)
    console.log(`genres`, genres)

    const handleClick = (genreId) => {
        history.push(`/genre/${genreId}`)
    }

    const renderGenres = () => {
        if (genres) {
            return (
                <div>
                    <h1>Discover Movies By Genre</h1>
                    <div className='d-flex flex-column flex-md-row flex-md-wrap justify-content-md-between my-4'>
                        {genres.genres.map((genre, i) => <Button className='my-2 mx-2' onClick={()=>handleClick(genre.id)} key={i} variant="outline-secondary">{genre.name}</Button>)}
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