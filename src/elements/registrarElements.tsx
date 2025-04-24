import styled from "styled-components";



 const Input = styled.input`
  background-color: #522d9f;
  height: 50px;
  border-radius: 7px;
  outline: none;
  border: none;
  font-size: 17px;
  padding-left: 10px;
  color: aliceblue;
  margin-bottom: 10px;
  transition: 0.2s;
  width: 100%;
      &::placeholder {
        font-size: 12px;
          color: rgba(255, 255, 255, 0.6); /* Color visible para el placeholder */
  }
              &:focus {
        box-shadow: 0 0 8px 2px #00f7ff;
    }

`;

 const SmallInput = styled.input`
  background-color: #522d9f;
  height: 50px;
  border-radius: 7px;
  outline: none;
  border: none;
  font-size: 17px;
  padding-left: 10px;
  color: aliceblue;
  margin-bottom: 10px;
  transition: 0.2s;
  width: 50%; 
      &::placeholder {
        font-size: 12px;
          color: rgba(255, 255, 255, 0.6); /* Color visible para el placeholder */
  }
              &:focus {
        box-shadow: 0 0 8px 2px #00f7ff;
    }

`;

 const ContainerInputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4%;
  margin-bottom: 10px;
  width: 100%;

`;

 const ContainerInputs2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;

`;


const ContainerForm = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding:15px;
}
`
const ContainerTerminos = styled.div `
    display: flex;
    flex-direction: row-reverse;
    color: white;
    align-items: center;

}
`

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

export{
    ContainerInputs,
    ContainerInputs2,
    Input,
    SmallInput,
    ContainerForm,
    ContainerTerminos,
    Boton
}