import { Carousel } from "antd"
import Styled from "./NavigationCarousel.styles"

export const NavigationCarousel = () => {
  return (
    <Carousel style={{ width: "1500px", marginTop: "20px" }}>
      <Styled.StyledDiv1>
        <Styled.StyledH3 />
      </Styled.StyledDiv1>
      <Styled.StyledDiv2>
        <Styled.StyledH3 />
      </Styled.StyledDiv2>
      <Styled.StyledDiv3>
        <Styled.StyledH3 />
      </Styled.StyledDiv3>
      <Styled.StyledDiv4>
        <Styled.StyledH3 />
      </Styled.StyledDiv4>
    </Carousel>
  )
}

export default NavigationCarousel
