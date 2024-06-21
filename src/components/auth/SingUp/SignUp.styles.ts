import { Button } from "antd"
import styled from "styled-components"

const FormWrapper = styled.div<{ mode?: string }>`
  margin-left: 30%;
  margin-top: 30px;
`
const SignUpButton = styled(Button)`
  background-color: red;
`

const Wrapper = styled.img``

const StyledSignUp = { FormWrapper, Wrapper, SignUpButton }

export default StyledSignUp
