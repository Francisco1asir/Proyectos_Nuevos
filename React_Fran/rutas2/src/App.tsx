import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './estructura/Header/Header';
import { Main } from './estructura/Main/Main';
import { NavBar } from './commons/NavBar';
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home/Home';
import { ServiciosPage } from './pages/Servicios/Servicios';
import { FormacionPage } from './pages/Formacion/Formacion';
import { ProyectosPage } from './pages/Proyectos/Proyectos';
import { Diseño } from './pages/Servicios/pages/Diseño';
import { Cloud } from './pages/Servicios/pages/Cloud';
import { Mediafrank } from './pages/Proyectos/pages/mediafrank';
import { Amafron } from './pages/Proyectos/pages/amafron';
import { Caronte } from './pages/Proyectos/pages/caronte';
import { Ordenadores } from './pages/PcFromponentes/OrdenadoresCard';
// import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
    {/* <div className="container"> */}
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<HomePage />} />
            <Route path='servicios' element={<ServiciosPage />}>
              <Route path='diseño' element={<Diseño />} />
              <Route path='cloud' element={<Cloud />} />
            </Route>
            <Route path='proyectos' element={<ProyectosPage />}>
              <Route path='caronte' element={<Caronte />} />
              <Route path='amafron' element={<Amafron />} />
              <Route path='mediafrank' element={<Mediafrank />} />
            </Route>
            <Route path='formacion' element={<FormacionPage />} />
          </Route>
          <Route path='pcfromponentes' element={<Ordenadores />} />
        </Routes>
      </main>
      {/* </div> */}
    </>
  );
}

export default App;
