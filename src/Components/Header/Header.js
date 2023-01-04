import React from 'react';
import './Header.css';
import headerImg from '../../Images/header-img.jpg'

const Header = () => {
    return (
        <header className='header-container'>
            <div className='header-text'>
                <h1 className='header-title'>The News Room</h1>
                <h2 className='header-subtitle'>A N.Y. Times News Reader</h2>
            </div>
            <img className='header-image' src={headerImg} alt='typewriter with paper reading news' />
        </header>
    )
}

export default Header;