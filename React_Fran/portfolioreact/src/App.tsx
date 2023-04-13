import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './estructura/Header/Header';
import { Main } from './estructura/Main/Main';
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Proyectos } from './pages/Proyectos/Proyectos';
// import { ServiciosPage } from './pages/Servicios/Servicios';
import ServiciosPage from './pages/Servicios/Servicios';
// import { ColaboraPage } from './pages/Colabora/Colabora';
import {ColaboraPage} from './pages/Colabora/Colabora';
import { NewAccount } from './pages/Colabora/NewAccount';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<Home />} />
            <Route path='proyectos' element={<Proyectos />} />
            <Route path='servicios' element={<ServiciosPage />} />
            <Route path='colabora' element={<ColaboraPage />} />
            <Route path='colabora/newaccount' element={<NewAccount />} />
          </Route>
        </Routes>
      </main>
    </>

  );
}

export default App;
