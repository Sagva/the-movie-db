import React from 'react';
import { useParams } from 'react-router-dom';

const ActorInfoPage = () => {
    const { id } = useParams()

    console.log(`id`, id)
    
    //id: 234352
    //profile_path: "/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg"
    return ( 
       <div>
           <h1>Actor info page</h1>
       </div>
    );
}
 
export default ActorInfoPage;