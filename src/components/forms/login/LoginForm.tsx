import { useState } from "react";
import { ApiPost } from "@hooks/UseAxios";
import { Boton, ContainerInputs } from "../../../elements/loginElements";
import { Input } from "../../../elements/formElements";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "./ErrorMessage";
import { LinksSection } from "./LinksSection";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await ApiPost("/Usuarios/login.php", {
                email: email,
                contrasena: contrasena,
            });

            if (response.data.success) {
                console.log("Login exitoso:", response.data);
                navigate("/index");
            } else {
                setError(response.data.message || "Credenciales incorrectas");
            }
        } catch (err) {
            console.error(err);
            setError("Error en el servidor");
        }
    };

    return (
        <>
            <ContainerInputs>
                <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Contraseña"
                    id="contrasena"
                    name="contrasena"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                />
            </ContainerInputs>
            <Boton onClick={handleLogin}>INGRESAR</Boton>
            {error && <ErrorMessage message={error} />}
            <LinksSection />
        </>
    );
};

export default LoginForm;
