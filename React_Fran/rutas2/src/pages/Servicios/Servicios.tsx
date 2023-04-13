import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarServicios } from '../../commons/NavBarServicios'
// import ListGroup from 'react-bootstrap/ListGroup';



import './Servicios.css'

export const ServiciosPage = () => {
    return (
        <>
            <section className='home'>
                <h1>Servicios Page</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam fugit, quod fugiat, adipisci corporis cupiditate atque debitis placeat odit excepturi, alias porro dolor. Neque eaque ipsam inventore vel facere nulla?</p>
            </section>
            <NavBarServicios />
            <section className='outlet'>
                <Outlet />
            </section>

        </>
    )
}
