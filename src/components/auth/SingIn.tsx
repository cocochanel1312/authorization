import { useState } from "react"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"

const SingIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  function logIn(event: any) {
    event.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        setError("")
        setEmail("")
        setPassword("")
      })
      .catch(error => {
        console.log(error.message)
        setError("Извините, мы не нашли ваш аккаунт")
      })
  }

  return (
    <div>
      <form>
        <h2>Log in</h2>
        <input
          placeholder="Введите email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          type="email"
        />
        <input
          placeholder="Введите пароль"
          value={password}
          onChange={event => setPassword(event.target.value)}
          type="password"
        />
        <button onClick={logIn}>Log in</button>
        {error ? <p style={{ color: "red" }}>{error}</p> : ""}
      </form>
    </div>
  )
}

export default SingIn
