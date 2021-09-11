import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getActorById } from '../serveces/API'
import Figure from 'react-bootstrap/Figure'

const ActorInfoPage = () => {
    const { id } = useParams()

    const { data: actor, isError } = useQuery([`actor-${id}`, id], () => getActorById(id))

    //     adult: false
    // also_known_as: ['Steve Lang']
    // biography: "​From Wikipedia, the free encyclopedia\n\nStephen Lang (born July 11, 1952) is an American actor and playwright. He started in theatre on Broadway but is well known for his film portrayals of Stonewall Jackson in Gods and Generals (2003), George Pickett in Gettysburg (1993), and his 2009 roles as Colonel Miles Quaritch in Avatar and as Texan lawman Charles Winstead in Public Enemies. Lang was the co-artistic director (along with Carlin Glynn and Lee Grant) of the famed Actor's Studio at its headquarters in New York City from 2004 to 2006.\n\nDescription above from the Wikipedia article Stephen Lang (actor), licensed under CC-BY-SA, full list of contributors on Wikipedia."
    // birthday: "1952-07-11"
    // credits: {cast: Array(97), crew: Array(4)}
    // deathday: null
    // gender: 2
    // homepage: null
    // id: 32747
    // imdb_id: "nm0002332"
    // known_for_department: "Acting"
    // name: "Stephen Lang"
    // place_of_birth: "New York City, New York, USA"
    // popularity: 21.762
    // profile_path: "/h7ZoTwpELoz1IlIgx0ujoA2p9Sp.jpg"


    console.log(`actor`, actor)

    const renderActorInfo = () => {
        if (actor) {
            return (
                <div className='row'>
                    <h1>{actor.name}</h1>
                    <div>
                        { actor.birthday && <div><b>Born: {actor.birthday}</b>, </div>}
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