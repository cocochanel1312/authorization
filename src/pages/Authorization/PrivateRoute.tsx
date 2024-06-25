import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"

const PrivateRoute = () => {
  const isAuthorized = useAppSelector(state => state.signIn.authorized)

  return isAuthorized ? <Outlet /> : <Navigate to="/login" />
}
export default PrivateRoute


