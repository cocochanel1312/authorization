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
        size="large"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{}}
        initialValues={{
          remember: true,
        }}
        onFinish={logIn}
        autoComplete="off"
      >
        <Styled.FormH>Sign In</Styled.FormH>
        <Form.Item
          name="email"
          style={{
            width: "600px",
          }}
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          valuePropName="email"
        >
          <Input
            value={email}
            onChange={e => dispatch(setEmail(e.target.value))}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          valuePropName="password"
        >
          <Input.Password
            value={password}
            onChange={e => dispatch(setPassword(e.target.value))}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          {authorized ? (
            <Link to="/">
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "400px" }}
              >
                Далее
              </Button>
            </Link>
          ) : (
            <Button type="primary" htmlType="submit">
              Далее
            </Button>
          )}
        </Form.Item>
        <Styled.FormH2>Об учетной записи </Styled.FormH2>
        <Styled.FormH2>Проблемы со входном?</Styled.FormH2>
        <Link to="/SingUp">
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary">
              Создать учетную запись
            </Button>
          </Form.Item>
        </Link>
      </Form>
    </Styled.FormWrapper>
  )
}

export default SingIn
