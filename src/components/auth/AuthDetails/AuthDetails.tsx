import { onAuthStateChanged, signOut } from "firebase/auth"
import { useState } from "react"
import { useEffect } from "react"
import { auth } from "../../../firebase"
import { Button, Flex } from "antd"
import Styled from "./AuthDetails.styled"

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
    <Styled.FlexWrapper>
      <Flex>
        {authUser ? (
          <div>
            <p>{`Signed in as ${authUser.email}`}</p>
            <Button type="primary" onClick={userSignOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <p>Signed Out</p>
        )}
      </Flex>
    </Styled.FlexWrapper>
  )
}

export default AuthDetails
