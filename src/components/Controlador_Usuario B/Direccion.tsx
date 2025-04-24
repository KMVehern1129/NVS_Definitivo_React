import { useState } from "react";
import Swal from "sweetalert2";
import { ApiPost } from '@hooks/UseAxios.tsx';

const Direccion = () => {
    const [direccion, setDireccion] = useState("");
    const [complemento, setComplemento] = useState("");
    const [password, setPassword] = useState("");

    const endpoint = '/Usuarios/Direccion.php';

    const validar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Campo obligatorio",
                text: "Todos los campos debe de estar llenos.",
            });
            return;
        }

        if (direccion.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Campo obligatorio",
                text: "La dirección no puede estar vacía.",
            });
            return;
        }

        if (password.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Campo obligatorio",
                text: "Los datos adicionales no pueden estar vacios.",
            });
            return;
        }

        if (password.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Campo obligatorio",
                text: "Debe ingresar la contraseña para continuar.",
            });
            return;
        }

        // Puedes agregar más validaciones aquí si lo necesitas

        const data = {
            direccion: direccion.trim(),
            complemento: complemento.trim()
        };

        Agregar(data);
    };

    const Agregar = async (data: any) => {
        const response = await ApiPost(endpoint, data);

        if (response && (response.status === 200 || response.status === 201)) {
            if (response.data.message === "Ya existe esta dirección para este cliente.") {
                Swal.fire({
                    icon: "error",
                    title: "Acción fallida",
                    text: response.data.message || "Dirección no registrada.",
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Acción exitosa",
                    text: "Dirección registrada correctamente.",
                }).then(() => {
                    setDireccion("");
                    setComplemento("");
                    setPassword("");
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Acción fallida",
                text: response?.data?.message || "No se pudo registrar la dirección.",
            });
        }
    };

    return (
        <section id="Dos">
            <h2><b>Cambiar Direccion</b></h2>
            <form onSubmit={validar}>

                <input type="text" id="Nueva_Direccion" name="Nueva_Direccion" placeholder="  Nueva Direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}  />
                <input type="text" id="Datos_Adicionales" name="Datos Adicionales" className="Datos_Adicionales" placeholder="  Datos Adicionales" onChange={(e) => setComplemento(e.target.value)} />
                <input type="password" id="password" name="password" placeholder="  Contraseña"></input>

                <button type="submit" value="submitValue" className="Btn_Aceptar_Form">Enviar</button>
            </form>
        </section>
    );
}
 export default Direccion;
