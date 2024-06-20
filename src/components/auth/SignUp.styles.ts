import { Button } from "antd"
import styled from "styled-components"

const FormWrapper = styled.div<{ mode?: string }>`
  background-color: ${({ mode }) => mode};
`
const SignUpButton = styled(Button)`
  background-color: red;
`

const Wrapper = styled.img``

const StyledSignUp = { FormWrapper, Wrapper, SignUpButton }

export default StyledSignUp
