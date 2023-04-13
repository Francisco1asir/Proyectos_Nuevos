import React from 'react'
import { Data } from '../../data/seed'
import { OrdenadoresCard } from './components/OrdenadoresCard'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


// const equipos = [
//   {
//     nombre: "HP Victus",
//     marca: "HP",
//     cantidad: 10,
//     descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eius cupiditate ducimus amet dicta.Hic natus adipisci eaque qui, soluta facilis explicabo.Eaque non architecto inventore, culpa beatae natus amet exercitationem.",
//     caracteristicas: {
//       procesador: "Intel Core i5 10400F",
//       Ram: "16GB",
//       HDD: "500GBSSD"
//     },
//     precio: {
//       Preal: 1300,
//       dto: 0.3,
//       oferta: true
//     },
//     Imagen: [],
//     valoraciones: {
//       positivas: 100,
//       negativas: 10
//     }
//   },
//   {
//     nombre: "Lenovo Ideapad",
//     marca: "Lenovo",
//     cantidad: 40,
//     descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eius cupiditate ducimus amet dicta.Hic natus adipisci eaque qui, soluta facilis explicabo.Eaque non architecto inventore, culpa beatae natus amet exercitationem.",
//     caracteristicas: {
//       procesador: "Intel Core i7 8700K",
//       Ram: "8GB",
//       HDD: "1TBSSD"
//     },
//     precio: {
//       Preal: 1000,
//       dto: 0.2,
//       oferta: true
//     },
//     Imagen: [],
//     valoraciones: {
//       positivas: 40,
//       negativas: 3
//     }
//   },
//   {
//     nombre: "Mars Gaming PC",
//     marca: "Mars Gaming",
//     cantidad: 140,
//     descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eius cupiditate ducimus amet dicta.Hic natus adipisci eaque qui, soluta facilis explicabo.Eaque non architecto inventore, culpa beatae natus amet exercitationem.",
//     caracteristicas: {
//       procesador: "Intel Core i9 10900X",
//       Ram: "16GB",
//       HDD: "2TBSSD"
//     },
//     precio: {
//       Preal: 1500,
//       dto: 0.2,
//       oferta: true
//     },
//     Imagen: [],
//     valoraciones: {
//       positivas: 410,
//       negativas: 43
//     }
//   },
//   {
//     nombre: "MacBook Pro",
//     marca: "MAC",
//     cantidad: 40,
//     descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eius cupiditate ducimus amet dicta.Hic natus adipisci eaque qui, soluta facilis explicabo.Eaque non architecto inventore, culpa beatae natus amet exercitationem.",
//     caracteristicas: {
//       procesador: "MAX CPUX",
//       Ram: "86GB",
//       HDD: "500TBSSD"
//     },
//     precio: {
//       Preal: 1400,
//       dto: 0.2,
//       oferta: true
//     },
//     Imagen: [],
//     valoraciones: {
//       positivas: 10,
//       negativas: 3
//     }
//   },
//   {
//     nombre: "Cooler Master Gaming PC",
//     marca: "Cooler Master",
//     cantidad: 40,
//     descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eius cupiditate ducimus amet dicta.Hic natus adipisci eaque qui, soluta facilis explicabo.Eaque non architecto inventore, culpa beatae natus amet exercitationem.",
//     caracteristicas: {
//       procesador: "Intel Core i5 10600K",
//       Ram: "16GB",
//       HDD: "500TBSSD"
//     },
//     precio: {
//       Preal: 1400,
//       dto: 0.2,
//       oferta: true
//     },
//     Imagen: [],
//     valoraciones: {
//       positivas: 10,
//       negativas: 3
//     }
//   },
//   {
//     nombre: "Argentavis GamingOC",
//     marca: "Argentavis",
//     cantidad: 10,
//     descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Eius cupiditate ducimus amet dicta.Hic natus adipisci eaque qui, soluta facilis explicabo.Eaque non architecto inventore, culpa beatae natus amet exercitationem.",
//     caracteristicas: {
//       procesador: "Intel Core i5 12600K",
//       Ram: "32GB",
//       HDD: "800GBSSD"
//     },
//     precio: {
//       Preal: 1400,
//       dto: 0.2,
//       oferta: true
//     },
//     Imagen: [],
//     valoraciones: {
//       positivas: 10,
//       negativas: 3
//     }
//   },
// ]

export const OrdenadoresListCard = () => {
  return (
    <>
      <h2>Listado de Ordenadores</h2>
      <section className='equipos'>
        {
          Data.equipos.map((equipo) =>(
              <OrdenadoresCard
                key={equipo.nombre}
                ordenador={equipo}
              />
          ))
        }
      </section>
    </>
  )
}
