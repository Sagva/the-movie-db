import React from 'react';
import Image from 'react-bootstrap/Image';


const CastInfo = ({ actors }) => {

    return (
        <div className='container'>
            <hr style={{color: '#000000', backgroundColor: '#000000', height: .5, borderColor: '#000000'}} />

            <h2 className='my-4'>Full Cast</h2>
            <div>

                {actors.map((actor, i) => {
                    return (
                        <div key={i} className='d-flex'>
                            <Image className='my-2 mx-2' style={{ width: 50 }} src={`https://image.tmdb.org/t/p/w92${actor.profile_path}`} />
                            <div className='d-flex flex-column justify-content-center align-items-start'>
                                <span key={`${actor.name}-actor`}>{actor.name}</span>
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
