import { P, ImgHeader, Imagen } from "../../../elements/FormElements";
import Imagenes from "@components/forms/comun/imgComponent";

const Instrucciones = () => (
  <>
    <ImgHeader>
      <Imagen src={Imagenes[1]} alt="logo" />
    </ImgHeader>
    <P>
      Por favor, introduce la dirección de correo electrónico que utilizaste para registrarte.
      Te enviaremos un e-mail con tu nueva contraseña. Revisa el correo no deseado si no lo recibes.
      En caso de complicaciones, contáctanos a: support@nvs.com
    </P>
  </>
);

export default Instrucciones;
