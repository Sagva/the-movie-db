import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';
import { Col, Figure } from 'react-bootstrap';
import { getYearFromDateString } from '../utilities/getYearFromDateString';
import { convertMinutesToHours } from '../utilities/convertMinutesToHours'
import { getMovieById } from '../serveces/API'


const MoviePage = () => {
    const { id } = useParams()

    const { data:movie, isError } = useQuery([`movie-${id}`, id], () => getMovieById(id))
    
    const renderMovie = () => {
        if (movie) {
            return (
                <div className='row'>
                    <Col >
                        <h1 className='text-center my-3'>{movie.title}</h1>
                        <div>
                            <span>{getYearFromDateString(movie.release_date)}</span>
                            {movie.genres.map((genre, i) => <span key={i}>{genre.name}</span>)}
                            <span>{convertMinutesToHours(movie.runtime)}</span>
                            <div>{movie.production_countries.map((country, i) => <span key={i} className='px-2'><b>{country.name}</b></span>)}</div>
                            <p><b>Language:</b> {movie.spoken_languages.map((lang, i) => <span key={i}>{lang.english_name}</span>)}</p>
                        </div>

                        <Figure>
                            <Figure.Image
                                width={300}
                                alt={`${movie.title} poster`}
                                src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                            />
                            <Figure.Caption>
                                {movie.tagline}
                            </Figure.Caption>
                        </Figure>

                    </Col>

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
            {renderMovie()}
        </div>
    );
}

export default MoviePage;