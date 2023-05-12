import React, { useEffect, useState } from 'react'
import { getCategorias, newCategoria } from '../firebase/FBcategorias';
import Button from '@mui/material/Button';
import { ICategoria } from '../interfaces/ICategoria';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';


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

  const { register, handleSubmit } = useForm<ICategoria>();
  // getCategorias()

  // const onAddCategoria = ( dataCategoria: ICategoria) => {
  //   console.log(dataCategoria)
  //   newCategoria(dataCategoria)
  // }

  const onAddCategoria = async (dataCategoria: ICategoria) => {
    // console.log('Enviando...')
    console.log(dataCategoria)
    await newCategoria(dataCategoria)
    window.location.reload();
  }

  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
          <h2 id='NewCat'>Listado de Categorias</h2>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <li key={categoria.name}>{categoria.name}</li>
              <img src={categoria.logo} alt="" />
              </>
            ))
          }
        </Grid>

        <Grid item xs={5} sx={{ backgroundColor: 'lightgray', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
          <h2 id='NewCat'>Añadir nueva Categoría</h2>
          <form onSubmit={handleSubmit(onAddCategoria)} noValidate >
            <TextField
              {...register('name')}
              id='nombre'
              label='Nombre'
              type='text'
              sx={{ width: '50%' }}
            >
            </TextField>

            <TextField
              {...register('logo')}
              label='Logo'
              type='string'
              sx={{ width: '30%' }}
            >
            </TextField>
            <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Añadir Producto</Button>
          </form>
        </Grid>
      </Grid>


    </>
  )
}
export default CategoriasPage;
