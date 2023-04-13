import React from 'react'
import Table from 'react-bootstrap/esm/Table';
import { Image } from 'react-bootstrap';

const dinos = [
    {
        imagen: "https://www.dododex.com/media/creature/argentavis.png",
        nombre: "Argentavis",
        tipo: "Volador",
        comportamiento: "Agresivo",
        dificultad: 2,
        salud: 600
    },
    {
        imagen: "https://www.dododex.com/media/creature/rex.png",
        nombre: "T-Rex",
        tipo: "Terrestre",
        comportamiento: "Agresivo",
        dificultad: 3,
        salud: 1200
    },
    {
        imagen: "https://www.dododex.com/media/creature/raptor.png",
        nombre: "Raptor",
        tipo: "Terrestre",
        comportamiento: "Agresivo",
        dificultad: 1,
        salud: 400
    },
    {
        imagen: "https://www.dododex.com/media/creature/pteranodon.png",
        nombre: "Pteranodon",
        tipo: "Volador",
        comportamiento: "Pasivo",
        dificultad: 0,
        salud: 350
    }
]

export const Avanzado = () => {
    return (
        <>
            <h1 data-aos="fade-up">Sección de servicios avanzados</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat non molestias repellat placeat nesciunt atque suscipit quos, ipsa nostrum assumenda deleniti nobis consectetur, optio reprehenderit facere cupiditate doloremque incidunt ipsum!
                Molestias provident ipsam doloremque explicabo obcaecati nam itaque, error dolores, repellat voluptatem repudiandae ex tempora amet quisquam hic totam, odit placeat. Consectetur assumenda perferendis repudiandae cumque? Ipsam totam magnam est.</p>

            <Table striped bordered hover >
                <thead>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Comportamiento</th>
                    <th>Dificultad</th>
                    <th>Salud</th>
                </thead>
                <tbody>
                    {
                        dinos.map((dino) => (
                            <tr>
                                <td width={'12%'}><Image width={'100%'} src={dino.imagen}></Image></td>
                                <td>{dino.nombre}</td>
                                <td>{dino.tipo}</td>
                                <td>{dino.comportamiento}</td>
                                <td>{dino.dificultad}</td>
                                <td>{dino.salud}</td>
                            </tr>

                        ))
                    }
                </tbody>
            </Table>


        </>
    )
}
