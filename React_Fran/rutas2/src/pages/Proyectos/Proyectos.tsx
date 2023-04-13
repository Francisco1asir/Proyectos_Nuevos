import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarProyectos } from './NavBarProyectos'

export const ProyectosPage = () => {
  return (
    <>
      <section className='home'>
        <h1>Pagina de Proyectos</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam fugit, quod fugiat, adipisci corporis cupiditate atque debitis placeat odit excepturi, alias porro dolor. Neque eaque ipsam inventore vel facere nulla?</p>
      </section>
      <NavBarProyectos />
      <section className='outlet'>
        <Outlet />
      </section>
    </>
  )
}
