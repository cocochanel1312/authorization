import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState } from "react"
import { useEffect } from "react"
import { auth } from "../../../firebase"

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState<any>(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    })
    return () => {
      listen()
    }
  }, [])

  function userSignOut() {
    signOut(auth)
      .then(() => console.log("success"))
      .catch(error => console.log(error))
  }
  return (
    <div>
      {authUser ? (
        <div>
          <p>{`Signed in as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  )
}

export default AuthDetails
