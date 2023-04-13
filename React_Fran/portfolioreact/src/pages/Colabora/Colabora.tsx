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
import { Link } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const ColaboraPage = () => {
    return (
        <section id='colaborapage'>
            <div id='colabora'>
                <h1>Colabora Conmigo</h1>
                <div id="formfields">
                    <TextField
                        id="filled-textarea"
                        label="Correo electrónico"
                        placeholder="xxxxxxx@gmail.com"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <Formcolabora />
                    <div id="recuerdame">
                        <Switch {...label} /> <h6>Recuerdame</h6>
                    </div>
                    <Button variant="contained" startIcon={<PersonIcon />}>Iniciar sesión</Button>
                    <p className='txtinicia'>O inicia sesión con:</p>
                    <div className="iniciacon">
                        <div className="facebook">
                        <FacebookIcon/>
                        </div>
                        <div className="twitter">
                        <TwitterIcon/>
                        </div>
                        <div className="google">
                        <GoogleIcon/>
                        </div>                        
                    </div>
                    <div className="margin"></div>
                    <Link to='/colabora/newaccount' id='acc2'>¿No tienes una cuenta? Createla ahora mismo</Link>
                </div>
            </div >
        </section>
        
    )
}
