import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Grid } from '@mui/material'
import './Contacto.css'


export const Contacto = () => {
    const [showPassword, setShowPassword] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  return (
    <>
      <section id='contacto'>
      
        <Grid container spacing={2}>
          <Grid item
            xs={12} md={6} lg={6}
            >
            <h2>Columna1</h2>
            <TextField id="outlined-basic margin-normal" label="Correo" variant="outlined" sx={{ width: '26ch' }} />
            <TextField id="outlined-basic margin-normal" label="Correo" variant="outlined" sx={{ width: '26ch' }}/>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className='passwd'>
        <FormControl sx={{ width: '26ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
</Box>
          </Grid>
          <Grid item
            xs={12} md={6} lg={6}
            >
            <h2>Columna2</h2>
          </Grid>
        </Grid>
      </section>
    </>
  )
}

