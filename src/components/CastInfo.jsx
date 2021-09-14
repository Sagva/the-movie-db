import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import replaceEmptyImage70x90 from '../img/replaceEmptyImage70x90.jpg'

const CastInfo = ({ actors }) => {

    return (
        <div className='container'>
            <hr style={{color: '#000000', backgroundColor: '#000000', height: .5, borderColor: '#000000'}} />

            <h2 className='my-4'>Full Cast</h2>
            <div>

                {actors.map((actor, i) => {
                    return (
                        <div key={i} className='d-flex'>
                            <Image className='my-2 mx-2' style={{ width: 50 }} 
                                src={actor.profile_path ? `https://image.tmdb.org/t/p/w92${actor.profile_path}` : replaceEmptyImage70x90} 
                            />
                            <div className='d-flex flex-column justify-content-center align-items-start'>
                                <Link to={`/actor/${actor.id}`} key={`${actor.name}-actor`}>{actor.name}</Link>
                                <span key={`${actor.character}-character`} className='text-secondary font-weight-light small'>{actor.character}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CastInfo;
