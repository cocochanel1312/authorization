import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../../firebase"
import { Button, Form, Input } from "antd"
import Styled from "./SignUp.styles"

type TSingUp = {
  email?: string
  password?: string
  copyPasswort?: string
}

const SingUp: React.FC<TSingUp> = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [error, setError] = useState("")

  function register() {
    if (repeatPassword !== password) {
      setError("Повторите пароль правильно")
      return // делается это для того, что функция дальше не шла и не создавался аккаунт
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user)
        setError("")
        setEmail("")
        setPassword("")
        setRepeatPassword("")
        console.log("Прошло успешно")
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
        initialValues={{
          remember: true,
        }}
        onFinish={register}
        autoComplete="off"
        onValuesChange={(
          changedValues,
          { email, password, repeatPassword },
        ) => {
          setEmail(email.target?.value)
          setPassword(password.target?.value)
          setRepeatPassword(repeatPassword.target?.value)
        }}
      >
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
          label="Return Password"
          name="repeatPassword"
          rules={[
            {
              required: true,
              message: "Please return your password!",
            },
          ]}
          valuePropName="repeatPassword"
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Styled.SignUpButton type="primary" htmlType="submit">
            Registration
          </Styled.SignUpButton>
        </Form.Item>
      </Form>
    </Styled.FormWrapper>
  )
}

export default SingUp
