import React, { useState } from 'react';
import imageIcon from '../components/Images/CollapseClo.png';

const Collapse = ({ title, content }) => {
    const [Open, setOpen] = useState(false)

    return Open ? (
        <div className='container'>
           <div className='Collap-title'> {title}</div>
           <img src={imageIcon} alt='' className='Collap-icon'onClick={() => setOpen(false)}></img>
           <div className='Collap-content'>{content}</div>
        </div>
    ) : (
        <div className='container'>
            <div className='Collap-title'>{title}</div>
            <img src={imageIcon} alt='' className='Collap-icon' onClick={() => setOpen(true)} ></img>
        </div>
    )

};

export default Collapse;