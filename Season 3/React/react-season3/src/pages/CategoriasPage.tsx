import React, {useEffect, useState } from 'react'
import {getCategorias } from '../firebase/FBcategorias';

export const CategoriasPage = () => {
  const [CategoriasPage, setCategorias] = useState([{name:''}])
  getCategorias()
  .then(res =>{
    console.log (...res)
    setCategorias([...res])
  });

  getCategorias()

  return(
    <>
    <p>categorias firebase</p>
    <ul>
      {
        CategoriasPage.map((categoria) => (
          <li>{categoria.name}</li>
        ))
      }
    </ul>
    </>
  )
}
export default CategoriasPage;
