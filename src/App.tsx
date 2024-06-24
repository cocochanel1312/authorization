import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import SingInPage from "./pages/SignInPage"
import SingUpPage from "./pages/SingUpPage"
import PrivateRoute from "./components/auth/PrivateRoute/PrivateRoute"
import Dashboard from "./components/auth/PrivateRoute/Layout/Dashboard/Dashboard"
import Settings from "./components/auth/PrivateRoute/Layout/Settings/Settings"
import { Layout } from "antd"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SingInPage />} />
        <Route path="/SingUp" element={<SingUpPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
