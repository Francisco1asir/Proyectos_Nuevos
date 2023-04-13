import React from 'react'
import { FaBars } from 'react-icons/fa';
import logo from '../../../logo.svg'
import { NavLink, Link } from 'react-router-dom';

function scroll() {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
  } 

export const NavBarHeader = () => {
    return (
        <>
            <nav id='ln1'>
                <figure id='logo'>
                    <img src={logo} />
                </figure>
                <div className="links">
                    <NavLink to='/' onClick={scroll}> Home</NavLink>
                    <NavLink to='proyectos' onClick={scroll}>Proyectos</NavLink>
                    <NavLink to='servicios' onClick={scroll}>Servicios</NavLink>
                    <NavLink to='colabora' onClick={scroll}> Colabora</NavLink>
                </div>
                <div className="links-burger">
                    <input type='checkbox' id='check' />
                    <label htmlFor="check" id='labelcheck'>
                        {/* <FaBars /> */}
                        <div className="bars">
                            <div className="b1"></div>
                            <div className="b2"></div>
                            <div className="b3"></div>
                        </div>
                    </label>
                    <div className="cnt-burger">
                        <NavLink to='/' onClick={scroll}> Home</NavLink>
                        <NavLink to='proyectos' onClick={scroll}>Proyectos</NavLink>
                        <NavLink to='servicios' onClick={scroll}>Servicios</NavLink>
                        <NavLink to='colabora' onClick={scroll}>Colabora</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}
