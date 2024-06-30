import { Outlet } from "react-router-dom"
import Sidebar from "../afterAuth/Sidebar/Sidebar"

export const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "auto", marginRight: "auto"}}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
