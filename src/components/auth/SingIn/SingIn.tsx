import { useState } from "react"
import { auth } from "../../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Button, Form, Input } from "antd"
import { Link } from "react-router-dom"

import Styled from "./SignIn.styles"

type TFieldType = {
  username?: string
  password?: string
  remember?: string
}

const SingIn: React.FC<TFieldType> = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [authorized, setAuthorized] = useState(false)

  function logIn() {
    if (!authorized)
      signInWithEmailAndPassword(auth, email, password)
        .then(user => {
          console.log(user)
          setError("")
          setEmail("")
          setPassword("")
          setAuthorized(true)
        })
        .catch(error => {
          console.log(error.message)
          setError("Извините, мы не нашли ваш аккаунт")
        })
  }

  return (
    <Styled.FormWrapper>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={logIn}
        autoComplete="off"
        onValuesChange={(changedValues, { email, password }) => {
          setEmail(email.target?.value)
          setPassword(password.target?.value)
        }}
      >
        <Styled.FormH>Sign In</Styled.FormH>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          valuePropName="email"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          valuePropName="password"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {authorized ? (
            <Link to="/">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Link>
          ) : (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
        </Form.Item>
        <Link to="/SingUp">
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" danger>
              Create Account
            </Button>
          </Form.Item>
        </Link>
      </Form>
    </Styled.FormWrapper>
  )
}

export default SingIn
