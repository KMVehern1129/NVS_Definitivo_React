import styled, {css} from "styled-components";

const ContainerInputs = styled.div`
    width:60%;
    display:flex;
    flex-direction:column;
     align-items: center;
    justify-content: center;
     box-sizing: border-box;
`;
const Boton = styled.button`
  width: 40%;
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




export {
    ContainerInputs,
    Boton,
}