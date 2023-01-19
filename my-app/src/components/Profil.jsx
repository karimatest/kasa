import React from 'react';

const Profil = ({ name, picture}) => {
    return (
        <div>
           <h3 className='name'>
            {name}
            <img src={picture} alt='le propriétaire' className='profil'/>
           </h3> 
        </div>
    );
};

export default Profil;