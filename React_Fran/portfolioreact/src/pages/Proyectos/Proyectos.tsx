import React from 'react'
import './Proyectos.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Msg from './common/modal';
import Msg2 from './common/modal2';
import Msg3 from './common/modal3';
import Msg4 from './common/modal4';
import Msg5 from './common/modal5';
import amafron from '../../img/Amafron.png'
import mediafrank from '../../img/mediafrankcard.png'
import plantas from '../../img/Plantas.png'
import portfolio from '../../img/Portfolio.png'
import rescue from '../../img/Rescue.png'

export const Proyectos = () => {
  return (
    <>
      <section id='proyectos'>
        <h1 id='tittle'>Proyectos</h1>
        <p>A continuación se presentan todos los proyectos que Francisco ha realizado a lo largo de su trayectoria
          con los cuáles ha aprendido mucho sobre cierto lenguajes de marcas y de programación</p>
        <p>Todos estos proyectos se pueden encontrar en mi página web <a href="https://frparra.vercel.app/">frparra</a> también se tiene pensado disponer de una VPS y crear una API para obtener un mayor aprendizaje y experiencia con estas nuevas novedades y tecnologías que molan tanto</p>
        <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  {item.msg}
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      </section>



    </>
  )
}
const itemData = [
  {
    img: "https://m.media-amazon.com/images/G/30/gc/designs/livepreview/amazon_squidink_noto_email_v2016_es-main._CB462075794_.png",
    title: 'Amafron',
    author: 'Lenguajes empleados: HTML y CSS',
    msg: <Msg2 />,
    rows: 4,
    cols: 4,
  },
  {
    img: mediafrank,
    title: 'MediaFrank',
    author: 'Lenguajes empleados: HTML, CSS y JS',
    msg: <Msg />,
  },
  {
    img: plantas,
    title: 'Registro de plantas',
    author: 'Lenguajes empleados: HTML, CSS, PHP y MySQL',
    msg: <Msg3 />,
  },
  {
    img: portfolio,
    title: 'Mi PortfolioV1',
    author: 'Lenguajes empleados: HTML, CSS y JS',
    msg: <Msg4 />,
  },
  {
    img: rescue,
    title: 'Rescue in the Dungeon',
    author: 'Realizado completamente en Scracth',
    msg: <Msg5 />,
  }
];