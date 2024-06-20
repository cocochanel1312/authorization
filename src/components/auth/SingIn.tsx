import { useState } from "react"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import type { FormProps } from "antd"
import { Button, Checkbox, Form, Input } from "antd"


// Перекинуть логику наоборот с SingUp
type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const onFinish: FormProps<FieldType>["onFinish"] = values => {
  console.log("Success:", values)
}

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = errorInfo => {
  console.log("Failed:", errorInfo)
}

const SingIn: React.FC = () => {
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
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
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SingIn
