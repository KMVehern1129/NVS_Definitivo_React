const Article = () => (
  <article className="Centro">
    <div className="Text_Center">
      <h2><b>Seguridad De Cuenta</b></h2>
      <p>Mojanroja03@gmail.com</p>
    </div>
    <button id="Abrir_Pop_Up"><img src="../Mensaje.png" alt="" /></button>
    <div className="popup" id="popup">
      <div className="popup-contenido">
        <section id="One">
          <article className="Texto_Pop_up">
            <h3>Roberto toto</h3>
            <p>ADMIN.</p>
          </article>
          <p>Gracias por tu comentario, lo tendremos en cuenta.</p>
          <button><img src="../Basura.png" alt="Icono Basura" /></button>
        </section>
        <section id="Two">
          <article className="Texto_Pop_up">
            <h3>DESCUENTOS</h3>
            <p>ANUNCIOS</p>
          </article>
          <p>Semana de descuentos en todos los juegos de playstation 5.</p>
          <button><img src="../Basura.png" alt="Icono Basura" /></button>
        </section>
        <section id="Three">
          <article className="Texto_Pop_up">
            <h3>¡¡REGALOS SIN PARAR!!</h3>
            <p>ANUNCIOS</p>
          </article>
          <p>Aprovecha el black friday y llevate 3 videojuegos en fisico por el precio de 2 en nuestras tiendas.</p>
          <button><img src="../Basura.png" alt="Icono Basura" /></button>
        </section>
      </div>
    </div>
  </article>
);

export default Article;
