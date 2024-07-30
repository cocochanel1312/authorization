import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { isAuthorizedChecker } from "../../app/slices/signInSlice"

const PrivateRoute = () => {
  const isAuthorized = useAppSelector(isAuthorizedChecker)

  return isAuthorized ? <Outlet /> : <Navigate to="/login" />
}
export default PrivateRoute
