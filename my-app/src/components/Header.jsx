import React from 'react';
import { Link } from 'react-router-dom';
import Images from '../Images/LOGO.png';

const Header = () => {
    return (
        <header className='Header'>
                <img className='HeaderLogo' src={Images} alt='logo KASA'></img>
            <nav className='nav'>
             <Link className='nav_home' to="/">
                Accueil
             </Link>
             <Link className='nav_about' to="/About">
                A Propos
             </Link>
            </nav> 
        </header>
    );
};

export default Header;


