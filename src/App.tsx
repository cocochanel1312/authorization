import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import SingInPage from "./pages/Authorization/SignInPage"
import SingUpPage from "./pages/Authorization/SingUpPage"
import PrivateRoute from "./pages/Authorization/PrivateRoute"
import Layout from "./components/layout/Layout"
import TablePage from "./pages/TablePage"
import NavigationTest from "./components/afterAuth/NavigationTest/NavigationTest"
import Settings from "./components/afterAuth/Settings/Settings"
import Messages from "./components/afterAuth/Messages/Messages"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SingInPage />} />
        <Route path="/SingUp" element={<SingUpPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="table" replace />} />
            <Route path="table" element={<TablePage />} />
            <Route path="navigationtest" element={<NavigationTest />} />
            <Route path="messages" element={<Messages />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
