import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getActorById } from '../serveces/API'
import Figure from 'react-bootstrap/Figure'
import Image from 'react-bootstrap/Image'
import { getYearFromDateString } from '../utilities/getYearFromDateString'
import replaceEmptyImage70x90 from '../img/replaceEmptyImage70x90.jpg'

const ActorInfoPage = () => {
    const { id } = useParams()

    const { data: actor, isError } = useQuery([`actor-${id}`, id], () => getActorById(id))

    const renderActorInfo = () => {
        if (actor) {
            return (
                <div className='row'>
                    <h2 className='my-4'>{actor.name}</h2>
                    <div className='d-flex flex-column align-items-start'>
                        {actor.birthday && <div><b>Born: {actor.birthday}</b>, </div>}
                        <div><b>{actor.place_of_birth}</b> </div>
                        {actor.deathday && <div><b>Death: {actor.deathday}</b> </div>}
                    </div>
                    <Figure>
                        <Figure.Image
                            width={300}
                            alt={`Photo of ${actor.name}`}
                            src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                        />
                    </Figure>
                    <div>
                        <p className='text-start'>
                            {actor.biography}
                        </p>
                    </div>
                    <div>
                        <hr style={{ color: '#000000', backgroundColor: '#000000', height: .5, borderColor: '#000000' }} />

                        <h2 className='my-4'>Filmography</h2>
                        <div>

                            {actor.credits.cast.map((movie, i) => {
                                return (
                                    <div key={i} className='d-flex'>
                                        <Image className='my-2 mx-2' style={{ width: 50 }} 
                                            src={movie.poster_path ? `https://image.tmdb.org/t/p/w92${movie.poster_path}` : replaceEmptyImage70x90} 
                                        />
                                        <div className='d-flex flex-column justify-content-center align-items-start'>
                                            <Link to={`/movie/${movie.id}`}>{movie.title} ({movie.release_date && getYearFromDateString(`${movie.release_date}`)})</Link>
                                            { <span className='text-secondary font-weight-light small'>{movie.character}</span>}
                                        </div>
                                    </div>
                                )
                            })}
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
            {renderActorInfo()}
        </div>
    );
}

export default ActorInfoPage;