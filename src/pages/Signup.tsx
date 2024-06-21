import { useState } from "react"
import { useAuth } from "../auth/AuthProvider"
import { Navigate } from "react-router-dom";
import DefaultLayout from "../layout/Defaultlayout"

export default function Signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated()) {
        return <Navigate to="/dashboard"/>
    }

    return (
    <>
        <DefaultLayout>
            <form className="form">
                <label>Nombre de usuario</label>
                <input 
                 type="text" 
                 value={username} 
                 onChange={(e) => setUsername(e.target.value)}
                />

                <label>Contraseña</label>
                <input 
                 type="text" 
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                />

                <label>Nombres</label>
                <input 
                 type="text" 
                 value={name}
                 onChange={(e) => setName(e.target.value)} 
                />

                <button>SUbir Formulario</button>
            </form>
        </DefaultLayout> 
    </>
    )
}
/**momento para empezar a añadir las librerias */