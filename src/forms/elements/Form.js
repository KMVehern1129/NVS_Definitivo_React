import styled, {css}from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colors = {
    border: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
};

const Section = styled.form`
    width: 100%;
    height: 100vh;
    display: flex;
    flexDirection: row;
    background-color: #1b014d;

`;

const Container_Form = styled.div`
  width: 50%;
  height: 100vh;
  box-sizing: border-box;
`;


const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box; 
`;


const ImgHeader = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-bottom: 10%
`;


const TeamImput = styled.div`
  position: relative; /* Contenedor para el icono */
  z-index: 90;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 60%; 
`;



const Input = styled.input`
  background: #522d9f;
  width: 50%; 
  height: 30px;
  border-radius: 7px;
  outline: none;
  border: none;
  padding: 10px 35px; 
  transition: 0.3s ease all;
  color: aliceblue;
  margin-bottom: 20px;

  &:focus {
    border: 1px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  &::placeholder {
  color: rgba(255, 255, 255, 0.6); /* Color visible para el placeholder */
  }

  ${props => props.valido === 'true' && css`
    border: 1px solid ${colors.border};

  `}
    ${props => props.valido === 'false' && css`
    border: 1px solid ${colors.error}!important;

  `}
`;

const ValidationIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10%; 
  top: 50%;
  transform: translateY(-50%); 
  z-index: 100;
  font-size: 16px;
  color: red; 
  opacity:0
`;



const InputError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
    display:none;
`;

const Boton = styled.button`
  margin-bottom: 10px;
  background: linear-gradient(to left, #00bbff, #6a35cf);
  color: white;
  font-size: 16px;
  transition: 0.2s;
  width: 38%;
  height: 45px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top:15px;

  &:hover {
    text-shadow: #b4b4b4c2 1px 0 10px;
    box-shadow: #3500c7 1px 0 10px;
  }
`;


const Mensaje_Exito = styled.p`
  font-size: 14px;
  color: ${colors.exito};
  display: none;
`;

const mensajeError = styled.div`
  height: 45px;
  width: auto;
  line-height: 45px;
  background: ${colors.error};
  padding: 0px 15px;
  border-radius: 3px;
  p {
    margin: 0;
  }
`;


const Figure = styled.div`
  background-image: linear-gradient(
    135deg,
    hsl(0deg 0% 0%) 0%,
    hsl(257deg 24% 12%) 29%,
    hsl(257deg 52% 14%) 47%,
    hsl(257deg 61% 14%) 65%,
    hsl(256deg 29% 13%) 100%
  );
  padding-top: 40px;
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  img {
    transition: 0.2s;
    width: 50%;
    max-width: 100%;
    height: auto;
  }

  img:hover {
    width: 80%;
  }
`;








export {Form, Container_Form, Section, Figure, TeamImput, Input,
        InputError, ValidationIcon, ImgHeader, Boton, mensajeError,
           
};