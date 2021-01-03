import React from 'react';
import logo from '../img/logo.png'
import BurgerHeader from './BurgerHeader';
import './Header.css'
import RightHeader from './RightHeader';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="amenta logo"/>
            </div>

            <div className="header__buttons">
                <BurgerHeader />
                <RightHeader />
                
            </div>
        </div>
    )
}

export default Header
