import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import WorkIcon from '@mui/icons-material/Work';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { red } from '@mui/material/colors';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';


export const NavBarHeader = () => {
  const [styles, setStyles] = useState({
    backgroundColor: red[900],
    padding: 20
  });

  useEffect(() => {
    // Actualiza los estilos
    setStyles({
      backgroundColor: red[900],
      padding: 20
    });
  }, []);

  return (
    <>
      <nav id='ln1'>
        <NavLink to='/'><Button style={styles} variant='contained' startIcon={<HomeIcon />} size="large">Home</Button></NavLink>
        <NavLink to='/servicios'><Button style={styles} variant='contained' startIcon={<SchoolIcon />} size="large">Servicios</Button></NavLink>
        <NavLink to='/proyectos'><Button style={styles} variant='contained' startIcon={<CoPresentIcon />} size="large">Proyectos</Button></NavLink>
        <NavLink to='/formacion'><Button style={styles} variant='contained' startIcon={<WorkIcon />} size="large">Formacion</Button></NavLink>
        <NavLink to='/ordenadores'><Button style={styles} variant='contained' startIcon={<LaptopChromebookIcon />} size="large">Ordenadores</Button></NavLink>
        <NavLink to='/contacto'><Button style={styles} variant='contained' startIcon={<ContactEmergencyIcon />} size="large">Contacto</Button></NavLink>
      </nav>
    </>
  );
};