const Direccion = () => {
    return (
    <section id="Dos">
        <h2><b>Cambiar Direccion</b></h2>
        <form id="Formulario" method="post" action="Index_Vista_Usuario_Correo.html">
            <input type="text" id="Nueva_Direccion" name="Nueva_Direccion" placeholder="  Nueva Direccion" required/>

                <input type="text" id="Datos_Adicionales" name="Datos Adicionales" className="Datos_Adicionales" placeholder="  Datos Adicionales" />

                    <input type="password" id="password" name="password" placeholder="  Contraseña" required></input>

                    <button type="submit" value="submitValue" className="Btn_Aceptar_Form">Enviar</button>
                </form>
            </section>
            )};

            export default Direccion;
