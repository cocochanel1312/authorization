import { onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
  // const isAuthorized =

  // return (
  //   isAuthorized ? <Outlet /> : <Navigate to="/login" />
  // )
  return <Outlet />
}
export default PrivateRoute

// взять selector из signInSlice
