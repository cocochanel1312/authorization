import styled from "styled-components"

const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(https://c4.wallpaperflare.com/wallpaper/88/769/281/1920x1080-px-digital-art-japan-minimalism-simple-background-sun-trees-video-games-star-wars-hd-art-wallpaper-preview.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  div {
    width: 50%;
    height: 100%;
  }
`
const LogoContainer = styled.div`
  background-color: black;
`

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSingInPage = { BackgroundWrapper, LogoContainer, SignInContainer }

export default StyledSingInPage
