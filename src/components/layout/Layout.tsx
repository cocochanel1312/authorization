import { Outlet } from "react-router-dom"
import Sidebar from "../afterAuth/Sidebar/Sidebar"

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default Layout
