import React, { useState } from 'react';
import imageIcon from '../Images/CollapseClo.png';

const Collapse = ({ title, content, contentArray }) => {
    const [Open, setOpen] = useState(false)
    
return Open ? (
    <div>
       <div className="title-icon">
          <div className='Collap-title'>{title}</div>
          <img src={imageIcon} alt="" className='Collap-iconOpen' 
          onClick={() => setOpen(false)}  />
       </div>
       {contentArray ? (
          <div className="Collap-contentArray">
             {contentArray.map((content, a) => (
                <div className="Collap-contentArray" key={a}>
                   {content}
                </div>
             ))}
          </div>
       ) : (
          <div className="Collap-content">{content}</div>
       )}
    </div>
 ) : (
    <div className="title-icon">
       <div className='Collap-title'>{title}</div>
       <img src={imageIcon} alt="flèche vers le bas" className='Collap-icon' 
       onClick={() => setOpen(true)} />
    </div>
 );
}



export default Collapse;