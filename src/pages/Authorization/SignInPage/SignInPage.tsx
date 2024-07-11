import SingIn from "../../../components/auth/SingIn/SingIn"
import Styled from "./SignInPage.styles"

const SignInPage = () => {
  return (
    <Styled.BackgroundWrapper>
      <Styled.LogoContainer></Styled.LogoContainer>
      <Styled.SignInContainer>
        <SingIn />
      </Styled.SignInContainer>
    </Styled.BackgroundWrapper>
  )
}

export default SignInPage
