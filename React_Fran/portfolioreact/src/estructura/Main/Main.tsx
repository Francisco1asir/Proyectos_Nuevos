import React from 'react'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import fotofran from '../../img/FotoFran.png'


export const Main = () => {
    return (
        <section id="sc2">
            <Outlet />
        </section>
    
    )
}
