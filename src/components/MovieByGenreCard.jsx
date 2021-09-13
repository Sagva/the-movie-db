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
        <div className='mx-2 my-2' onClick={handleClick}>
            <h3>{movie.title}</h3>
            {movie.release_date && <span className=''><b>{getYearFromDateString(movie.release_date)},</b></span>}
            <div className='d-flex'>
                <Image style={{width: 120}} variant="top" src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
                <div>
                    {/* <p>{movie.overview.substring(0, 155) + "..."}</p> */}
                    <p>{movie.overview}</p>
                </div>
            </div>

        </div>
    );
}

export default MovieByGenreCard;