import '../css/Css-Usuarios/styles.css';

import { Outlet, Link } from 'react-router-dom';

// Imagenes
import Usuario from '@assets/imgs/Cont_Usu_B/Usu.png';
import Basura from '@assets/imgs/Cont_Usu_B/Basura.png';
import Arroba from '@assets/imgs/Cont_Usu_B/Arroba.png';
import Candado from '@assets/imgs/Cont_Usu_B/candado.png';
import Usuario_Abajo from '@assets/imgs/Cont_Usu_B/Usuario_Nav_Abajo.png';
import Ubicacion from '@assets/imgs/Cont_Usu_B/Ubicacion.png';
import Flecha from '@assets/imgs/Cont_Usu_B/Flecha_Derecha.png';
import Mensaje from '@assets/imgs/Cont_Usu_B/Mensaje.png';

const VistaUsuarioCorreo = () => {
  return (
    <div className="Container_Principal">
      <main>
        <header className="header-main">
          <figure>
            <div className="Imagen_Usuario">
              <img src={Usuario} alt="Logo Usuario" />
            </div>
            <section>
              <div className="Datos_Conjuntos_Img_Usuario">
                <br />
                <br />
                <br />
                <h1><b>Andres Federico Martinez Mejia</b></h1>
                <p>PUNTOS: 100</p>
                <p>Se unió: julio 24 de 2024</p>
              </div>
            </section>
          </figure>
        </header>
        <hr />
        <article className="Centro">
          <div className="Text_Center">
            <h2><b>Seguridad De Cuenta</b></h2>
            <p>Mojanroja03@gmail.com</p>
          </div>
          <button id="Abrir_Pop_Up"><img src={Mensaje} alt="" /></button>
          <div className="popup" id="popup">
            <div className="popup-contenido">
              <section id="One">
                <article className="Texto_Pop_up">
                  <h3>Roberto toto</h3>
                  <p>ADMIN.</p>
                </article>
                <p>Gracias por tu comentario, lo tendremos en cuenta.</p>
                <button><img src={Basura} alt="Icono Basura" /></button>
              </section>
              <section id="Two">
                <article className="Texto_Pop_up">
                  <h3>DESCUENTOS</h3>
                  <p>ANUNCIOS</p>
                </article>
                <p>Semana de descuentos en todos los juegos de playstation 5.</p>
                <button><img src={Basura} alt="Icono Basura" /></button>
              </section>
              <section id="Three">
                <article className="Texto_Pop_up">
                  <h3>¡¡REGALOS SIN PARAR!!</h3>
                  <p>ANUNCIOS</p>
                </article>
                <p>Aprovecha el black friday y llevate 3 videojuegos en físico por el precio de 2 en nuestras tiendas.</p>
                <button><img src={Basura} alt="Icono Basura" /></button>
              </section>
            </div>
          </div>
        </article>

        <div className="Container_Main">
          <section id="Uno">
            <nav className="Menu_Usuario">
              <div className="Imagenes_Menu_Usuario">
                <img src={Arroba} alt="" />
                <img src={Candado} alt="" />
                <img src={Usuario_Abajo} alt="" />
                <img src={Ubicacion} alt="" />
              </div>
              <ul>
                <li><Link to="/Usuario/Correo">Cambiar e-mail</Link></li>
                <li><Link to="/Usuario/Contraseña" >Cambiar Contraseña</Link></li>
                <li><Link to="/Usuario/Nombre">Cambiar Nombre</Link></li>
                <li><Link to="/Usuario/Direccion">Cambiar Dirección</Link></li>
              </ul>
              <figure className="Flechas_Menu_Usuario">
                <img src={Flecha} alt="Icono Flecha" />
                <img src={Flecha} alt="Icono Flecha" />
                <img src={Flecha} alt="Icono Flecha" />
                <img src={Flecha} alt="Icono Flecha" />
              </figure>
            </nav>
          </section>
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default VistaUsuarioCorreo;
