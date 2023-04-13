import React from 'react'
import Formcolabora from './common/formulario'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './colabora.css'
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/material';
import Paper from '@mui/material/Paper';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const NewAccount = () => {
    const years = [];
    const currentYear = 1900; // Establecer el año actual como 1900
    
    for (let year = 2023; year >= currentYear; year--) { // Contar hacia abajo desde 2023 hasta 1900
        years.push({ label: year.toString() });
    }
    
    return (
        <>
            <section id='colaborapage'>
                <div id='colabora'>
                    <h1>Create una cuenta 😊</h1>
                    <div id="formfields">
                        <TextField
                            id="filled-textarea"
                            label="Nombre*"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="filled-textarea"
                            label="Apellidos*"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={years}
                            sx={{ mb: 2 }}
                            PaperComponent={({ children }) => (
                                <Paper style={{ backgroundColor: '#2B2F36' }}>{children}</Paper>
                            )}
                            renderInput={(params) => <TextField {...params} label="Año de nacimiento" />}
                        />
                        <TextField
                            id="filled-textarea"
                            label="Correo electrónico*"
                            placeholder="xxxxxxx@gmail.com"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            id="filled-textarea"
                            label="Numero de Teléfono"
                            placeholder="+34 (666 66 66 66)"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <Formcolabora />
                        <div id="recuerdame">
                            <Switch {...label} /> <h6>Recuerdame</h6>
                        </div>
                        <Button variant="contained" startIcon={<PersonIcon />}>Iniciar sesión</Button>
                        <p className='txtinicia'>O create una cuenta con:</p>
                        <div className="iniciacon">
                            <div className="facebook">
                                <FacebookIcon />
                            </div>
                            <div className="twitter">
                                <TwitterIcon />
                            </div>
                            <div className="google">
                                <GoogleIcon />
                            </div>
                        </div>
                        <div className="margin"></div>
                        <Link to='/colabora' id='acc1'>¿Ya tienes una cuenta? Inicia sesión ya</Link>
                    </div>
                </div >
            </section>
        </>
    )

}
