import React from 'react';
import { Image } from 'react-bootstrap';
import Table from 'react-bootstrap/esm/Table';
// import { Image } from 'react-bootstrap'

const soluciones = [
  {
    name: 'Azure',
    empresa: 'Microsoft',
    nivel: 'basico',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png'
  },
  {
    name: 'AWS',
    empresa: 'Amafron',
    nivel: 'basico',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png'
  },
  {
    name: 'Google Cloud',
    empresa: 'Google',
    nivel: 'medio',
    logo: 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png?hl=es'
  },
  {
    name: 'OpenShift',
    empresa: 'Microsoft',
    nivel: 'basico',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/OpenShift-LogoType.svg/1200px-OpenShift-LogoType.svg.png'
  }
]

export const Cloud = () => {
  return (
    <>
      <h1>Cloud Computing</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illum architecto, sed possimus dolore molestiae? Exercitationem dolore asperiores culpa voluptatibus illum error perspiciatis nobis quos! Beatae accusamus recusandae iste placeat.</p>
      <Table striped bordered hover>
        <thead>
          <th>Logo</th>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>Certificacion</th>
        </thead>
        <tbody>
          {
            soluciones.map( (solucion) => (
              <tr>
                <td width={'10%'}><Image width={'90%'} src={solucion.logo} /></td>
                <td>{solucion.name}</td>
                <td>{solucion.nivel}</td>
                <td>{solucion.empresa}</td>
              </tr>

            ))
          }
        </tbody>
      </Table>
      
    </>
  )
}
