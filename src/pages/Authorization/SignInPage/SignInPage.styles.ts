import styled from "styled-components"

const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://wallpapergod.com/images/hd/black-and-white-1920X1080-wallpaper-d718ma2zjbajz7cb.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`
const LogoContainer = styled.div`
  /* background-color: black; */
`

const SignInContainer = styled.div`
  justify-content: center;
  display: flex;
`

const StyledSingInPage = { BackgroundWrapper, LogoContainer, SignInContainer }

export default StyledSingInPage
