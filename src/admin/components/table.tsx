import { useEffect, useState } from "react";
import { ApiGet } from '../../hooks/UseAxios.tsx';
import Swal from 'sweetalert2';

const Table = () => {

  interface Calificacion {
    idCliente: number;
    idProducto: number;
    numeroCalificacion: number;
    comentarioCalificacion: string;
  }

  const endpoint:string = '/Calificaciones_cliente-producto/Calificacion_Cli_Prod.php';
  const [data, setData] = useState<Calificacion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCalifications = async () => {
      try {

        const result = await ApiGet<Calificacion[]>(endpoint);
        
        if (result && result.data) {
            setData(result.data);
        } else {
            console.error('No data received or data is in an unexpected format');
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
                    {data.map((calificacion,id) =>(
                        <tr> {calificacion.idCliente}
                            <td>{(id+1)}</td>
                            <td>{calificacion.idProducto}</td>
                            <td>{calificacion.numeroCalificacion}</td>
                            <td>{calificacion.comentarioCalificacion}</td>

                            <td>
                                <button type="button"
                                    className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-id="<?= $row['idProducto']?>">
                                    <i className="fa-solid fa-pen"></i>
                                </button>
                            </td>
                            <td><button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-id="<?= $row['idProducto']?>"><i className="fa-solid fa-trash"></i></button></td>
                        </tr>))}
                        
                </tbody>
            </table>
        </div> 
    )

}

export default Table