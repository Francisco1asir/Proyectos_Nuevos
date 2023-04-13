import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarProyectos = () => {
    return (
        <>
        <nav className='navser'>
            <Link to='caronte'>Caronte</Link>
            <Link to='amafron'>Amafron</Link>
            <Link to='mediafrank'>Mediafrank</Link>
        </nav>
        </>
    )
}
