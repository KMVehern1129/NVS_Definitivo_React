const Form = () => (
    <section id="Dos">
        <h2><b>Cambiar Nombre</b></h2>
        <form id="Formulario" method="post" action="Index_Vista_Usuario_Correo.html">
                        <input type="text" id="nombre" name="nombre" placeholder="  Nombre nuevo" required/>

                        <input type="text" id="Apellido" name="Apellido" placeholder="  Apellido Nuevo" required/>

                        <input type="password" id="password" name="password" placeholder="  Contraseña" required></input>

                        <button type="submit" value="submitValue" className="Btn_Aceptar_Form">Enviar</button>
                    </form>
    </section>
);

export default Form;
