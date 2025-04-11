import React from "react";
import {Input, ValidationIcon, TeamImput, InputError} from "../elements/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const InputComponent = ({estado, CambiarEstado, placeholder,tipo,name,inputError, expresionReular}) => {
    
    const onChange = (e) => {
        CambiarEstado({ ...estado, campo: e.target.value });
    };

    const validacion = () => {
        if (expresionReular) {
            CambiarEstado({
                ...estado,
                valido: expresionReular.test(estado.campo) ? 'true' : 'false'
            });
        }
    };

    return (
        <div>
        <TeamImput>
            <Input type={tipo} 
            placeholder={placeholder} 
            id={name} 
            value={estado.campo}
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
            valido={estado.valido}
            ></Input>
            <ValidationIcon icon={faCircleXmark} />
        </TeamImput>
        <InputError>{inputError}</InputError>
        </div>
    );
}

export default Input;