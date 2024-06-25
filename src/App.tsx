import "./App.css"
import { Route, Routes } from "react-router-dom"
import SingInPage from "./pages/Authorization/SignInPage"
import SingUpPage from "./pages/Authorization/SingUpPage"
import PrivateRoute from "./pages/Authorization/PrivateRoute"
import Layout from "./components/layout/Layout"
import TablePage from "./pages/TablePage"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SingInPage />} />
        <Route path="/SingUp" element={<SingUpPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route path="/table" element={<TablePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
