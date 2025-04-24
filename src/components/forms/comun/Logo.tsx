import { ImgHeader, Imagen } from "../../../elements/formElements"
import Imagenes from "./imgComponent"

const Logo = () =>{
    return(
        <ImgHeader>
        <Imagen src={Imagenes[1]} alt="logo" />
      </ImgHeader>
  
    )
}

export default Logo;