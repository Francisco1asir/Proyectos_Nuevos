import React, { FC } from 'react'
import { IOrdenador } from '../interfaces/IOrdenadores'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

interface InputData {
  ordenador: IOrdenador
}


export const OrdenadoresCard: FC<InputData> = ({ ordenador }) => {
  return (
    <div className='card'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.pcspecialist.es/images/products/18475/1.png?1660549939" />
        <Card.Body>
          <Card.Title>{ordenador.nombre}</Card.Title>
          <Card.Text className='descript'>
           {ordenador.descripcion}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
