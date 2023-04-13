import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
    return (
        <>

            <nav>
                <figure>
                    <img src={logo} />
                </figure>
                <div className="links">
                    {/* <FontAwesomeIcon icon={faBars} /> */}
                    <Link to='/'>Home</Link>
                    <Link to='servicios'>Servicios</Link>
                    <Link to='proyectos'>Proyectos</Link>
                    <Link to='formacion'>Formacion</Link>
                    <Link to='PcFromponentes'>PcFromponentes</Link>
                </div>
            </nav>
            <div className="tittle">
                <h1>Mi Portfolio<sub>En react</sub></h1>
            </div>
        </>
    )
}
