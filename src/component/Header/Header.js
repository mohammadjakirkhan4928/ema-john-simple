import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='hedar'>
            <img src={logo} alt="" srcset="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/orderReviwe">Order Reviwe</a>
                <a href="/summary">Summary</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;