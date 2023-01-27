import React from 'react';
import Images from '../Images/Logo-footer.png'
const Footer = () => {
    return (
        <footer className='Footer'>
            <img className='FooterLogo' src={Images} alt='logo KASA'></img>
            <p className='FooterText'> © 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;