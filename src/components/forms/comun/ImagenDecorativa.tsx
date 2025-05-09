import { RightSection, Figure } from "../../../elements/formElements";
import Imagenes from "@components/forms/comun/imgComponent";

const ImagenDecorativa = () => (
  <RightSection>
    <Figure>
      <img src={Imagenes[0]} alt="decoración" />
    </Figure>
  </RightSection>
);

export default ImagenDecorativa;
