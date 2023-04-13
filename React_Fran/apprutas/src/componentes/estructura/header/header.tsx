import React from 'react';
import './header.css';
import { NavBar } from '../../commons/NavBar';
import logo from '../../../logo.svg';

export const Header = () => {
    return (
        <header>
            <figure>
                <img src={logo} alt='logoreact'></img>
            </figure>
            <NavBar />
        </header>
    )
}


