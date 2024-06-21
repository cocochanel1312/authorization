import "./App.css"
import AuthDetails from "./components/auth/AuthDetails/AuthDetails"
import SingIn from "./components/auth/SingIn/SingIn"
import SingUp from "./components/auth/SingUp/SingUp"

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
