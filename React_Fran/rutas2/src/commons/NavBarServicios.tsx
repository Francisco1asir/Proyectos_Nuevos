import React from 'react'
import { Link } from 'react-router-dom'
import './NavBarServicios.css'

export const NavBarServicios = () => {
    return (
        <>
        <nav className='navser'>
            <Link to='diseño'>Diseño</Link>
            <Link to='cloud'>Cloud</Link>
        </nav>
        </>
    )
}
