import { auth } from "../../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Button, Form, Input } from "antd"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"

import Styled from "./SignIn.styles"

import {
  setEmail,
  setPassword,
  setError,
  setAuthorized,
} from "../../../app/slices/signInSlice"

const SingIn: React.FC = () => {
  const dispatch = useAppDispatch()
  const { email, password, error, authorized } = useAppSelector(
    state => state.signIn,
  )

  function logIn() {
    if (!authorized)
      signInWithEmailAndPassword(auth, email, password)
        .then(user => {
          console.log(user)
          dispatch(setError(""))
          dispatch(setEmail(""))
          dispatch(setPassword(""))
          dispatch(setAuthorized(true))
        })
        .catch(error => {
          console.log(error.message)
          dispatch(setError("Извините, мы не нашли ваш аккаунт"))
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
          dispatch(setEmail(email.target?.value))
          dispatch(setPassword(password.target?.value))
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
