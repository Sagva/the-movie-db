import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Col, Figure } from 'react-bootstrap';
import { getYearFromDateString } from '../utilities/getYearFromDateString';
import { convertMinutesToHours } from '../utilities/convertMinutesToHours'
import { getMovieById } from '../serveces/API'
import CastInfo from '../components/CastInfo';
import Button from '@restart/ui/esm/Button';


const MoviePage = () => {
    const { id } = useParams()

    const { data:movie, isError } = useQuery([`movie-${id}`, id], () => getMovieById(id))

    const [showFullCast, setShowFullCast] = useState(false)
   
    
    const renderMovie = () => {
        if (movie) {
            return (
                <div className='row'>
                    <Col >
                        <h1 className='text-center'>{movie.title}</h1>
                        <div className='d-flex flex-column align-items-start mb-3'>
                            <div className='d-flex'>
                                {movie.release_date && <span className=''><b>{getYearFromDateString(movie.release_date)},</b></span>}
                                {movie.genres.map((genre, i) => {
                                    if(i<=1) {
                                        return <span className='mx-1' key={i}><b>{genre.name}</b></span>
                                    }
                                    return null
                                })}
                            </div>
                            <div className='d-flex'>
                                {movie.runtime && <div><b>{convertMinutesToHours(movie.runtime)}</b></div>}
                                <div>{movie.production_countries.map((country, i) => <span key={i} className='px-2'><b>{country.name}</b></span>)}</div>
                            </div>
                            <div><span><b>Language:</b></span> {movie.spoken_languages.map((lang, i) => <span key={i}>{lang.english_name} </span>)}</div>
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

                        <div>
                        <p className='text-start'>{movie.overview}</p>
                        </div>
                        <div>
                            {!showFullCast && 
                                <div className='d-flex'>
                                    <div><b>Starring:</b></div>
                                    <div className='d-flex flex-column align-items-start ms-3'>
                                        { movie.credits.cast.map((actor, i) => {
                                            if( i <= 4) {
                                                return <Link to={`/actor/${actor.id}`} key={i}>{actor.name}</Link>
                                            }
                                            return null
                                        })}
                                    </div>
                                </div>
                            }
                            { !showFullCast && <Button type="button" className="btn btn-link" onClick={()=> setShowFullCast(true)}>All</Button>}
                            {showFullCast && <CastInfo actors = {movie.credits.cast}/>}
                        </div>
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