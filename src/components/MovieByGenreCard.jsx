import React from 'react';
import Image from 'react-bootstrap/Image'
import { useHistory } from 'react-router-dom'
import {getYearFromDateString} from '../utilities/getYearFromDateString'

const MovieByGenreCard = ({ movie }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push(`/movie/${movie.id}`)
    }

    return (
        <div className='mx-2 my-2' onClick={handleClick} style={{cursor: 'pointer', borderBottom: '1px solid #d3d3d3'}}> 
            <h3 style={{textAlign: 'start'}}>{movie.title}</h3>
            <div className='d-flex mb-md-5'>
                <Image style={{width: 120, maxHeight: 180}} className='me-2 me-md-3' variant="top" src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
                <div className='d-flex flex-column align-items-start'>
                    {movie.release_date && <span className=''><b>{getYearFromDateString(movie.release_date)}</b></span>}
                    <p style={{textAlign: 'start'}}>{movie.overview}</p>
                </div>
            </div>

        </div>
    );
}

export default MovieByGenreCard;