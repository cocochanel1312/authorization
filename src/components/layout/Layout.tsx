import { Outlet } from "react-router-dom"
import Sidebar from "../afterAuth/Sidebar/Sidebar"

export const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout
