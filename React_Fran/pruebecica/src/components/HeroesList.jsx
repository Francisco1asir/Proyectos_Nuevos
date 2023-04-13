import React from "react";
import { persona } from '../data/heroes';

export const HeroesList = () => {
    return (
        <>
        <table>
          <thead className='titulos'>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Grupo</th>
            </tr>
          </thead>
          <tbody>
            {
              persona.map((militares) => {
                return (
                  <tr className='cnt'>
                    <td>{militares.id}</td>
                    <td>{militares.Nombre}</td>
                    <td>{militares.Apellido}</td>
                    <td>{militares.Grupo}</td>
                  </tr>

                )
              })
            }
          </tbody>
        </table>
        </>
    )
}