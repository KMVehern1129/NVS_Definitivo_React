import { useState, useEffect } from "react";
import { ApiGet } from '../../../hooks/UseAxios.tsx';

interface MyModalProps {
  onClose: () => void;
  isOpen: boolean;
  idCliente: number;
  idProducto: number;
  calificacion: number;
  comentario: string;
  modal: string;
}


const ExampleModal: React.FC<MyModalProps> = ({ idCliente, idProducto, calificacion, comentario, onClose, isOpen, modal }) => {
  if (!isOpen) return null;

  interface Cliente {
    idCliente: number;
  }

  interface Producto {
    idProducto:number;
  }

  const endpoint: string = '/Usuarios/cliente.php';
  const endpointP: string = '/Productos/Producto.php';
  const [cliente, setCliente] = useState<Cliente[]>([]);
  const [producto, setProducto] = useState<Producto[]>([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState('');

  useEffect(() => {
    const fetchClientes = async () => {
      try {


        const result = await ApiGet(endpoint);

        if (result) {
          setCliente(result.data);
        } else {
          console.error('No se recibieron datos o los datos están en un formato inesperado');
        }
        ;
      } catch (error) {
        console.error('Error cargando clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  useEffect(() => {
    const fetchProductos = async () => {
      try {


        const result = await ApiGet(endpointP);

        if (result) {
          setProducto(result.data);
        } else {
          console.error('No se recibieron datos o los datos están en un formato inesperado');
        }
        ;
      } catch (error) {
        console.error('Error cargando clientes:', error);
      }
    };

    fetchProductos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductoSeleccionado(e.target.value);
    setClienteSeleccionado(e.target.value);
  };

  const [idClientet, setidClientet] = useState(idCliente);
  const [idProductot, setProductot] = useState(idProducto);
  const [calificaciont, setCalificacion] = useState(calificacion);
  const [comentariot, setComentario] = useState(comentario);

  const Validar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hola")
  };

  return (

    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel" style={{marginLeft: "5px"}}>{modal} Calificacion</h1>
          <button type="button" className="btn-close" onClick={onClose} aria-label="Close" style={{marginLeft: "53%"}}></button>
        </div>
        <div className="modal-body" style={{marginLeft: "15px"}}>
          <form onSubmit={Validar} encType="multipart/form-data">
            <div className="form-group row">
              <div className="row" style={{ marginBottom: "12px"}}>
                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <label htmlFor="formGroupExampleInput">id Cliente</label>
                  <select className="form-select" aria-label="Default select example" style={{ backgroundColor: "lightgray" }} value={clienteSeleccionado} onChange={handleChange}>
                    <option value={idClientet}>{idClientet}</option>
                    {cliente.map(cliente => (
                      <option key={cliente.idCliente} value={cliente.idCliente}>
                        {cliente.idCliente}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <label htmlFor="formGroupExampleInput">id Producto</label>
                  <select className="form-select" aria-label="Default select example" style={{ backgroundColor: "lightgray" }} value={productoSeleccionado} onChange={handleChange}>
                    <option value={idProductot}>{idProductot}</option>
                    {producto.map(producto => (
                      <option key={producto.idProducto} value={producto.idProducto}>
                        {producto.idProducto}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row" style={{ marginBottom: "8px" }}>
                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <label htmlFor="formGroupExampleInput">Calificacion</label>
                  <input type="number" className="form-control shadow-none" id="numeroCalificacion" name="numeroCalificacion" value={calificaciont} onChange={(e) => setCalificacion(Number(e.target.value))} required />
                </div>
              </div>
              <div className="row" style={{ marginBottom: "15px" }}>
                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <label htmlFor="formGroupExampleInput">Comentario</label>
                  <textarea className="form-control" value={comentariot} id="comentario" name="comentario" style={{ height: "100px", border: "none" }} onChange={(e) => setComentario(e.target.value)} ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col" style={{ display: "flex", justifyContent: "center", gap: "35px" }}>
                  <button type="button" onClick={onClose}>Cerrar</button>
                  <button type="submit" className="btn btn-primary btn-ms">Guardar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ExampleModal