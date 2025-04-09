import '../src/css/admin/stylesadmin.css'
import Sidebar from './admin/components/Sidebar'
import Table from './admin/calificaciones/components/table'
import Filter from './admin/calificaciones/components/filter';


function App() {

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

export default App
