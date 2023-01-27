import React from 'react';
import Etoile from '../Images/Etoile.png';
import EtoileVide from '../Images/EtoileVide.png';

const Star = ({note}) => {
    // créer un tableau //
    const tableau = [1,2,3,4,5];

    return (
        <div className='stars'>
          {tableau.map((tableauStar, i) =>
          tableauStar >= note ?(
            <img key={i} src={EtoileVide} alt="étoile vide"/>
          ) : (
            <img key={i} src={Etoile} alt="étoile pleine"/>
          )
          )}  
        </div>
    );
};

export default Star;