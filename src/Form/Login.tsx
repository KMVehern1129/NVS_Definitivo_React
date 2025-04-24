import { Container, LeftSection, Container_Form } from "../elements/formElements";
import ImagenDecorativa from "@components/forms/comun/ImagenDecorativa";
import Logo from "../components/forms/comun/Logo";
import LoginForm from "../components/forms/login/LoginForm";

const Login = () => {
    return (
        <Container>
            <LeftSection>
                < Container_Form>
                    <Logo />
                    <LoginForm />
                </ Container_Form>
            </LeftSection>
            <ImagenDecorativa />
        </Container>
    );
};

export default Login;
