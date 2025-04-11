import { useEffect, useState } from "react";
import { ApiGet, ApiDelete } from '../../../hooks/UseAxios.tsx';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import ExampleModal from "../components/modalUsuario.tsx";


const Table = () => {

  interface Calificacion {
    idCliente: number;
    idProducto: number;
    numeroCalificacion: number;
    comentarioCalificacion: string;
  }

  const endpoint: string = '/Calificaciones/Calificacion_Cli_Prod.php';
  const [data, setData] = useState<Calificacion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [idSeleccionado, setIdSeleccionado] = useState<{ idCliente: number, idProducto: number, calificacion: number, comentario: string, modal: string } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const abrirModal = (ids: { idCliente: number, idProducto: number, calificacion: number, comentario: string, modal: string }) => {
    setIdSeleccionado(ids);
    setIsOpen(true);
  };

  const cerrarModal = () => {
    setIdSeleccionado(null);
    setIsOpen(false);

  };

  useEffect(() => {
    const getCalifications = async () => {
      try {

        const result = await ApiGet(endpoint);

        if (result) {
          setData(result.data);
        } else {
          console.error('No se recibieron datos o los datos están en un formato inesperado');
        }
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo obtener la información',
        });
      }
    };
    getCalifications();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const Delete = (PK: { idCliente: number, idProducto: number }) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAxios(PK);
      }
    });
  };

  const deleteAxios = async (PK: { idCliente: number, idProducto: number }) => {
    const response = await ApiDelete(endpoint, PK)
    if (response) {
      Swal.fire('Eliminado', 'La calificación ha sido eliminada.', 'success');
    } else {
      Swal.fire({
        icon: "error",
        title: "Acción fallida",
        text: "No se modifico la nueva calificacion",
      });
    }
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Id Cliente</th>
            <th scope="col">ID Producto</th>
            <th scope="col">Numero Calificacion</th>
            <th scope="col">Comentario</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>

          </tr>
        </thead>
        <tbody>
          {data.map((calificacion) => (
            <tr key={`${calificacion.idCliente}-${calificacion.idProducto}`}>
              <td>{calificacion.idCliente}</td>
              <td>{calificacion.idProducto}</td>
              <td>{calificacion.numeroCalificacion}</td>
              <td>{calificacion.comentarioCalificacion}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    abrirModal({
                      idCliente: calificacion.idCliente,
                      idProducto: calificacion.idProducto,
                      calificacion: calificacion.numeroCalificacion,
                      comentario: calificacion.comentarioCalificacion,
                      modal: "Editar"
                    })
                  }
                >
                  <FontAwesomeIcon icon={faPen} className="icon" />
                </button>

                {idSeleccionado !== null &&
                  idSeleccionado.idCliente === calificacion.idCliente &&
                  idSeleccionado.idProducto === calificacion.idProducto && (
                    <ExampleModal
                      idCliente={idSeleccionado.idCliente}
                      idProducto={idSeleccionado.idProducto}
                      calificacion={idSeleccionado.calificacion}
                      comentario={idSeleccionado.comentario}
                      onClose={cerrarModal}
                      isOpen={isOpen}
                      modal={idSeleccionado.modal}
                    />
                  )}
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => Delete({
                  idCliente: calificacion.idCliente,
                  idProducto: calificacion.idProducto,
                })}><FontAwesomeIcon icon={faTrash} className='icon' /></button>
              </td>
            </tr>))}

        </tbody>
      </table>
      <section>
        <button
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: '#4415A2', border: 'none' }}
          onClick={() =>
            abrirModal({
              idCliente: 0,
              idProducto: 0,
              calificacion: 0,
              comentario: "",
              modal: "Agregar"
            })
          }
        >
          <FontAwesomeIcon icon={faPlus} className="icon" /> Nueva Calificación
        </button>
        {idSeleccionado !== null && (
          <ExampleModal
            idCliente={idSeleccionado.idCliente}
            idProducto={idSeleccionado.idProducto}
            calificacion={idSeleccionado.calificacion}
            comentario={idSeleccionado.comentario}
            onClose={cerrarModal}
            isOpen={isOpen}
            modal={idSeleccionado.modal}
          />
        )}
      </section>
    </div>
  )

}

export default Table