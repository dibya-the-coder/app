import { Outlet } from "react-router-dom"
import SideBar from "../component/SideBar"
import '../component/css/dashboard.css'

const DashBoard = () => {

  return (
    <div className="dashboard">
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default DashBoard