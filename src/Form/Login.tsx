import { useState } from "react";
import { ApiPost } from "@hooks/UseAxios";
import ImagenDecorativa from "@components/forms/comun/ImagenDecorativa";
import { Container, LeftSection, Container_Form, Input } from "../elements/formElements";
import { ContainerInputs, Boton } from "../elements/loginElements";
import Logo from "../components/forms/comun/Logo";
import { useNavigate } from "react-router-dom";
import RecuperarContrasena from "./RecuperarContrasena";

const Login = () => {
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
            console.log(response)
            if (response.data.success) {
                console.log("Login exitoso:", response.data);
                // Aquí puedes guardar datos en localStorage, cookies, etc.
                navigate("/RecuperarContrasena"); // Redirige al home
            } else {
                setError(response.data.message || "Credenciales incorrectas");
            }
        } catch (err) {
            console.error(err);
            setError("Error en el servidor");
        }
    };

    return (
        <Container>
            <LeftSection>
                <Container_Form>
                    <Logo />
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
                    {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                </Container_Form>
            </LeftSection>
            <ImagenDecorativa />
        </Container>
    );
};

export default Login;
