import '../../css/admin/stylesadmin.css'
import Sidebar from '../components/Sidebar'
import Table from '../calificaciones/components/table'
import Filter from '../calificaciones/components/filter';

const Calificacion_Cli_Pro = () => {

  return (

    <div className="container1">
      <Sidebar/>
      <div className="main-content1">
        <Filter/>
        <Table/>
      </div>
      

    </div>
  )
}
export default Calificacion_Cli_Pro; 