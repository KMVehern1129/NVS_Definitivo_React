const Form = () => (
    <section id="Dos">
        <h2><b>Cambiar e-mail</b></h2>
        <form id="Formulario" method="post" action="Index_Vista_Usuario_Correo.html">
            <input type="email" id="e-mail" name="e-mail" placeholder="  Nuevo e-mail" required />

            <input type="email" id="e-mailn" name="e-mailn" placeholder="  Confirma tu nuevo e-mail" required />

            <input type="password" id="password" name="password" placeholder="  Contraseña" required />

            <button type="submit" value="submitValue" className="Btn_Aceptar_Form">Enviar</button>
        </form>
    </section>
);

export default Form;
