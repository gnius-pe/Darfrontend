import { useState } from "react"
import { useAuth } from "../../auth/AuthProvider"
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ic_arrow from '../../assets/images/login/arrowBefore.svg';
import points from '../../assets/images/login/points.svg';
import logologin from '../../assets/images/login/logologin.svg';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(import.meta.env.VITE_API_KEY, {
                email,
                password,
            });

            if (response.status === 200) {
                const userId = response.data.id;
                sessionStorage.setItem("userId", userId);
                sessionStorage.setItem("userInfo", JSON.stringify(response.data));
                auth.login(() => {
                    window.location.href = "/dashboard";
                });
            } else {
                setError("Petición inválida: contraseña incorrecta.");
            }
        } catch (error) {
            setError("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
        }
    };

    if (auth.isAuthenticated && window.location.pathname === "/") {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <>
            <div className="w-full h-svh bg-gradient-to-r from-[#442670] to-[#67D9C6] flex justify-center items-center">
                <div className="w-96 h-max px-2 py-0 bg-white flex flex-col items-center rounded-md">
                    <div className="w-full flex justify-between items-center">
                        
                        <div>
                        <Link to="/">
                            <img src={ic_arrow} alt="arrow" />
                            </Link>
                        </div>
                    <img src={points} alt="" />
                    </div>
                    <img src={logologin} alt="" />
                    <Box component="form" sx={{ mt: 1, pb: 2, px: 3}} onSubmit={handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Usuario"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        {error && <Typography color="error">{error}</Typography>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ingresar
                        </Button>
                    </Box>
                </div>
            </div>
        </>
    )
}

