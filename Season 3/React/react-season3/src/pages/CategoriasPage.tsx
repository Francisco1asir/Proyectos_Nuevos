import React, { useEffect, useState } from 'react'
import { getCategorias } from '../firebase/FBcategorias';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICategoria } from '../interfaces/ICategoria';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { TextField } from '@mui/material';

export const CategoriasPage = () => {
  // const [categorias, setCategorias] = useState([{ name: '' }])
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  // getCategorias()
  //   .then(res => {
  //     console.log(...res)
  //     setCategorias([...res])
  //   });
  useEffect(() => {
    getCategorias()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])

  getCategorias()

    return (
      <>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Grid item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: '28vh', borderRadius: '20px' }}>
            <h2 id='NewCat'>Listado de Categorias</h2>
            {
              categorias.map((categoria) => (
                <>
                  <li key={categoria.name}>{categoria.name}</li>
                </>
              ))
            }
          </Grid>
          <Grid item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: '28vh', borderRadius: '20px' }}>
            <h2 id='NewCat'>Añadir nueva Categoría</h2>
            <form action="">
                <TextField 
                // { ...register('name')}
                id='nombre'
                label='Nombre'
                type='text'
                sx={{width: '50%'}}
                >
                </TextField>             
            </form>
            <Button variant="contained" sx={{marginTop: '10px'}}>Añadir Producto</Button>
          </Grid>
        </Grid>


      </>
    )
  }
  export default CategoriasPage;
