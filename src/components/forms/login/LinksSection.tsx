import { Link } from "react-router-dom";
import { ContainerLink } from "../../../elements/loginElements";

export const LinksSection = () => {
    return (
        <ContainerLink>
            <Link to="/RecuperarContrasena" className="text-sm text-blue-500 hover:underline">
                ¿Olvidaste tu contraseña?
            </Link>
            <Link to="/Registrar" className="text-sm text-blue-500 hover:underline">
                Registrarse
            </Link>
        </ContainerLink>
    );
};
