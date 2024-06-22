import "./App.css"
import { Route, Routes } from "react-router-dom"
import SingIn from "./components/auth/SingIn/SingIn"
import SingUp from "./components/auth/SingUp/SingUp"
import AuthDetails from "./components/auth/AuthDetails/AuthDetails"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Auth" element={<AuthDetails />} />
      </Routes>
    </div>
  )
}

export default App
