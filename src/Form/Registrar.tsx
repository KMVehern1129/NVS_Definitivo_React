import { Container, LeftSection } from "../elements/formElements";
import { ContainerInputs, ContainerInputs2, Input, SmallInput,ContainerForm, ContainerTerminos, Boton } from "../elements/registrarElements";
import ImagenDecorativa from "@components/forms/comun/ImagenDecorativa";
import Logo from "@components/forms/comun/Logo";
import { Link } from "react-router-dom";



const Registrar = () => {
    return (
        <Container>
            <LeftSection>
                <ContainerForm>
                    <Logo />
                    <ContainerInputs>
                        <SmallInput type="text" placeholder="Nombre" />
                        <SmallInput type="text" placeholder="Apellido" />
                    </ContainerInputs>

                    <ContainerInputs>
                        <SmallInput type="text" placeholder="Teléfono" />
                        <SmallInput type="text" placeholder="Ciudad" />
                    </ContainerInputs>

                    <ContainerInputs>
                        <SmallInput type="text" placeholder="Usuario" />
                        <SmallInput type="text" placeholder="Correo" />
                    </ContainerInputs>

                    <ContainerInputs2>
                        <Input type="password" placeholder="Contraseña" />
                        <Input type="password" placeholder="Confirmar Contraseña" />
                    </ContainerInputs2>
                    <ContainerTerminos>
                        <Link to="#"> Aceptar terminos y condiciones</Link>
                        <input type="checkbox" />
                    </ContainerTerminos>
                    <Boton>REGISTRAR</Boton>
                </ContainerForm>
            </LeftSection>
            <ImagenDecorativa />
        </Container>
    );
};

export default Registrar;