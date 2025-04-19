import '@css/admin/stylesadmin.css'
import Sidebar from '@components/admin/Sidebar'
import Table from '@components/admin/calificaciones/Cal_Pro_Cli/table'
import Filter from '@components/admin/calificaciones/Cal_Pro_Cli/filter';

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