import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../firebase"
import { Button, Form, Input, Spin } from "antd"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"

import Styled from "./SignUp.styles"

import {
  setEmail,
  setPassword,
  setRepeatPassword,
  setError,
  setIsFetching,
} from "../../../app/slices/signUpSlice"

const SingUp: React.FC = () => {
  const dispatch = useAppDispatch()
  const { email, password, repeatPassword, isFetching, error } = useAppSelector(
    state => state.signUp,
  )

  function register() {
    if (repeatPassword !== password) {
      dispatch(setError("Повторите пароль правильно"))
      alert(error)
      return // делается это для того, что функция дальше не шла и не создавался аккаунт
    }

    dispatch(setIsFetching(true))
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        dispatch(setError(""))
        dispatch(setEmail(""))
        dispatch(setPassword(""))
        dispatch(setRepeatPassword(""))
        dispatch(setIsFetching(false))
        alert("Регистрация прошла успешно")
      })
      .catch(error => {
        console.log(error.message)
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
        onFinish={register}
        autoComplete="off"
      >
        <Styled.FormH1>Create Account</Styled.FormH1>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            value={email}
            onChange={e => dispatch(setEmail(e.target.value))}
          />
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
        >
          <Input.Password
            value={password}
            onChange={e => dispatch(setPassword(e.target.value))}
          />
        </Form.Item>
        <Form.Item
          label="Repeat Password"
          name="repeatpassword"
          rules={[
            {
              required: true,
              message: "Please repeat your password!",
            },
          ]}
        >
          <Input.Password
            value={repeatPassword}
            onChange={e => dispatch(setRepeatPassword(e.target.value))}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            {isFetching ? <Spin /> : "Registration"}
          </Button>
        </Form.Item>
        <Link to="/login">
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Link>
      </Form>
    </Styled.FormWrapper>
  )
}

export default SingUp
