import styled, {css}from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flexDirection: row;
    background-color: #1b014d;
`;

const Container_Form = styled.div`
  width: 80%;
  height: 100vh;
  box-sizing: border-box;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LeftSection = styled.section`
  width: 45%;
  background-color: #1b014d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100vh;
`;

const ImgHeader = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  align-items: center;
  margin-bottom: 10%
  margin-top: 25%;
`;

const Imagen = styled.img`
    margin-bottom: 10px;
    transition: .2s;
    width:9rem;
    
`; 

const P = styled.p`
    color: aliceblue;
    text-align: center;
    width: 70%;
    font-size: 18px;
    line-height: 1.4;
    font-family: 'Quicksand', sans-serif;
`;

const RightSection = styled.section`
    background-image: linear-gradient(
        135deg,
        hsl(0deg 0% 0%) 0%,
        hsl(257deg 24% 12%) 29%,
        hsl(257deg 52% 14%) 47%,
        hsl(257deg 61% 14%) 65%,
        hsl(256deg 29% 13%) 100%
      );
    padding-top: 40px;
    box-sizing: border-box;
    width: 55%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: center;
    gap: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    height: auto;
`;

const Input = styled.input`
    background-color: #522d9f;
    width: 90%;
    height: 40px;
    border-radius:7px;
    outline: none;
    border: none;
    padding-left: 10px;
    color: aliceblue;
    margin-bottom: 20px;
      
    &::placeholder {
        font-size: 12px;
          color: rgba(255, 255, 255, 0.6); /* Color visible para el placeholder */
  }
              &:focus {
        box-shadow: 0 0 8px 2px #00f7ff;
    }

`;

const Boton = styled.button`
  width: 65%;
  margin-bottom: 10px;
  background: linear-gradient(to left, #00bbff, #6a35cf);
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    text-shadow: 1px 0 10px #b4b4b4c2;
    box-shadow: 0 0 15px #3500c7;
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
  width: 80%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  img {
    transition: 0.2s;
    width: 95%;
    max-width: 100%;
    height: auto;
  }

  img:hover {
    width: 80%;
  }
`;

export {Container,
        LeftSection,
        Container_Form,
        ImgHeader,
        P,
        Imagen,
        Form,
        Input,
        RightSection,
        Figure,
        Boton
};