import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase"

const SingUp = () => {
  const [email, setEmail] = useState("Введите email")
  const [password, setPassword] = useState("")
  const [copyPasswort, setCopyPassword] = useState("")
  const [error, setError] = useState("")

  function register(event: any) {
    event.preventDefault()
    if (copyPasswort !== password) {
      setError("Повторите пароль правильно")
      return // делается это для того, что функция дальше не шла и не создавался аккаунт
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        setError("")
        setEmail("")
        setPassword("")
        setCopyPassword("")
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <form onSubmit={register}>
        <h2>Create an account</h2>
        <input
          value={email}
          onChange={event => setEmail(event.target.value)}
          type="email"
        />
        <input
          value={password}
          onChange={event => setPassword(event.target.value)}
          type="password"
        />
        <input
          value={copyPasswort}
          onChange={event => setCopyPassword(event.target.value)}
          type="password"
        />
        <button>Create</button>
      </form>
    </div>
  )
}

export default SingUp
