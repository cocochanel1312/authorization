import "./App.css"
import AuthDetails from "./components/auth/AuthDetails"
import SingIn from "./components/auth/SingIn"
import SingUp from "./components/auth/SingUp"

const App = () => {
  return (
    <div className="App">
      <SingUp />
      <SingIn />
      <AuthDetails />
    </div>
  )
}

export default App
