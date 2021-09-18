import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getYearFromDateString } from '../utilities/getYearFromDateString';
import { convertMinutesToHours } from '../utilities/convertMinutesToHours'
import { getMovieById } from '../serveces/API'
import CastInfo from '../components/CastInfo';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import replaceEmptyImage300x450 from '../img/replaceEmptyImage300x450.jpg'
import { HistoryContext } from '../contexts/HistoryContext';

const MoviePage = () => {
    const { id } = useParams()
    const { addLatestShownMovie } = useContext(HistoryContext)
    const { data: movie, isError } = useQuery([`movie-${id}`, id], () => getMovieById(id))

    useEffect(() => {
        if (movie) {
            addLatestShownMovie(movie)
        }
    }, [movie])
    const [showFullCast, setShowFullCast] = useState(false)


    const renderMovie = () => {
        if (movie) {
            return (
                <div>
                    <div >
                        <h2 className='my-4'>{movie.title}</h2>
                        <div className='d-flex flex-column flex-md-row-reverse align-items-start justify-content-md-end mb-3'>
                            <div className='d-flex flex-column align-items-start mb-3' >
                                <div className='d-flex'>
                                    {movie.release_date && <span><b>{getYearFromDateString(movie.release_date)},</b></span>}
                                    {movie.genres.map((genre, i) => {
                                        // take only first genre's name from the list
                                        if (i <= 1) {
                                            return <span className='mx-1' key={i}><b>{genre.name}</b></span>
                                        }
                                        return null
                                    })}
                                </div>
                                <div className='d-flex' style={{ fontSize: 15 }}>
                                    {movie.runtime && <div><b>{convertMinutesToHours(movie.runtime)}</b></div>}
                                    <div>{movie.production_countries.map((country, i) => <span key={i} className='px-2'><b>{country.name}</b></span>)}</div>
                                </div>
                                {movie.spoken_languages.length > 0 &&
                                    <div>
                                        <span><b>Language: </b></span>
                                        {movie.spoken_languages.map((lang, i) => <span key={i}>{lang.english_name} </span>)}
                                    </div>
                                }
                                <Link
                                    to={{
                                        pathname: `${process.env.PUBLIC_URL}/simiral-movie/${movie.id}`,
                                        state: { movieTitle: `${movie.title}` },
                                    }}
                                >
                                    Similar movies &#8594;
                                </Link>
                            </div>
                            <Figure className='me-md-5'>
                                <Figure.Image
                                    width={300}
                                    alt={`${movie.title} poster`}
                                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}` : replaceEmptyImage300x450}
                                />
                                <Figure.Caption>
                                    {movie.tagline}
                                </Figure.Caption>
                            </Figure>
                        </div>
                        <div>
                            <p className='text-start'>{movie.overview}</p>
                        </div>
                        <div className='mb-5'>
                            {!showFullCast &&
                                <div className='d-flex'>
                                    <div><b>Starring:</b></div>
                                    <div className='d-flex flex-column align-items-start ms-3'>
                                        {movie.credits.cast.map((actor, i) => {
                                            if (i <= 4) {
                                                return <Link to={`${process.env.PUBLIC_URL}/actor/${actor.id}`} key={i}>{actor.name}</Link>
                                            }
                                            return null
                                        })}
                                    </div>
                                </div>
                            }
                            {!showFullCast && <Button variant="outline-secondary" className='my-3' onClick={() => setShowFullCast(true)}>Show All</Button>}
                            {showFullCast && <CastInfo actors={movie.credits.cast} />}
                        </div>
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
            {renderMovie()}
        </div>
    );
}

export default MoviePage;