import { useState } from "react"
import { useAuth } from "../auth/AuthProvider"
import DefaultLayout from "../layout/Defaultlayout"
import { Navigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../services/AuthService';

const defaultTheme = createTheme();

export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const auth = useAuth();

    const handleLogin = async () => {
        try {
            const userData = { username, password };
            const response = await login(userData);
            // Aquí puedes manejar la respuesta de la API
            // y actualizar el estado de autenticación en el AuthProvider
            if(auth.isAuthenticated) {
                return <Navigate to="/dashboard"/>
            }
            console.log(response);
          } catch (error) {
            console.error(error);
          }
    };

    

    return (
    <>
    <DefaultLayout>
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: '',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                    
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login Dar
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Usuario"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleLogin}
                        >
                            Ingresar
                        </Button>
                    </Box>
                  </Box>
                </Grid>
            </Grid>
        </ThemeProvider> 
    </DefaultLayout> 
    </>
    )
}

    