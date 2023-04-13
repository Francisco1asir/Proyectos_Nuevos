import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './estructura/Header/Header';
import { Main } from './estructura/Main/Main';
// import { Home } from './pages/Home/Home';
import { Servicios } from './pages/Servicios/Servicios';
import { Cloud } from './pages/Servicios/pages/Cloud';
import { Avanzado } from './pages/Servicios/pages/Avanzado';
import { OrdenadoresListCard } from './pages/Ordenadores/OrdenadoresListCard';
import { Route, Routes } from 'react-router-dom';
import { NavBarHeader } from './estructura/Header/common/NavBarHeader';
import { Contacto } from './pages/Home/Contacto/Contacto';
import Home from './pages/Home/Home';
function App() {
  return (
    <>
      <header>
        <NavBarHeader />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<Home />}/>
            <Route path='servicios' element={<Servicios />}>
              <Route path='cloud' element={<Cloud />} />
              <Route path='avanzado' element={<Avanzado />} />
            </Route>
            <Route path='ordenadores' element={<OrdenadoresListCard />} />
            <Route path='contacto' element={<Contacto />} />
            </Route>
        </Routes>
      </main>
<footer>
  {/* <h1>footer</h1> */}
</footer>


    </>
  );
}

export default App;
