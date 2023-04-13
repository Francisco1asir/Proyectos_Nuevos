import React from 'react'
import logo from '../../logo.svg'
import './Header.css'
import { Routes, Route } from 'react-router-dom'
import { Main } from '../Main/Main'
import { Home } from '../../pages/Home/Home'
import { NavBarHeader } from './common/NavBarHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet } from 'react-router-dom';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import '../Main/Main.css'

function scrollangle() {
    window.scrollTo({
      top: 700,
      behavior: 'smooth'
    });
  } 


export const Header = () => {
    return (
        <header>
            <NavBarHeader />
            <section id='main'>
                <section className="d">
                    <section id="sc1">
                        <div className="tittle-ppal">
                            <h2 className='nombre'>Francisco Parra presenta:</h2>
                            <h1 className='tittle'>Mi Portfolio<sub>En_react</sub> </h1>
                            <p>Francisco Parra Navarro, estudiante del ciclo superior de administración de sistemas en red, presenta su nuevo e inovador portfolio creado en react con el cuál ha aprendido mucho sobre este lenguaje y como implementarlo.</p>
                        </div>
                        <div className="circle"></div>
                        <div className="angle">
                            <FontAwesomeIcon onClick={scrollangle} icon={faAngleDown} />
                        </div>
                        <div className="social">
                            <a href="https://youtube.com"><FaYoutube /></a>
                            <a href="https://www.twitch.tv/franh90p"><FaTwitch /></a>
                            <a href="https://www.instagram.com/im_the90p/"><FaInstagram /></a>
                            <a href="https://github.com/Francisco1asir"><FaGithub /></a>
                        </div>
                    </section>
                    <figure id='fotofran'>  
                        {/* <img src={fotofran} /> */}
                    </figure>

                </section>
            

            </section>
        </header>
    )
}
