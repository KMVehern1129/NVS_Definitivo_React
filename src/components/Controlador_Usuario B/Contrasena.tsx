const Contrasena= () => (
    <section id="Dos">
      <h2><b>Cambiar Contraseña</b></h2>
      <form id="Formulario" method="post" action="Index_Vista_Usuario_Correo.html">
        <input type="password" id="Contraseña_Actual" name="Contraseña_Actual" placeholder="  Contraseña Actual" required />
        <input type="password" id="Nueva" name="Nueva" placeholder="  Nueva Contraseña" required />
        <input type="password" id="Confirmacion" name="Confirmacion" placeholder="  Confirmacion nueva contraseña" required />
        <button type="submit" value="submitValue" className="Btn_Aceptar_Form">Enviar</button>
      </form>
    </section>
  );
  
  export default Contrasena;
  