import styled from "styled-components"

const FormWrapper = styled.div<{ mode?: string }>`
  /* position: absolute; */
  align-content: center;
  :where(.css-dev-only-do-not-override-m4timi)[class^="ant-form"]
    [class^="ant-form"],
  :where(.css-dev-only-do-not-override-m4timi)[class*=" ant-form"]
    [class^="ant-form"],
  :where(.css-dev-only-do-not-override-m4timi)[class^="ant-form"]
    [class*=" ant-form"],
  :where(.css-dev-only-do-not-override-m4timi)[class*=" ant-form"]
    [class*=" ant-form"] {
    margin-left: 0px;
    box-sizing: border-box;
  }
`

const FormH = styled.h1``

const FormH2 = styled.h2`
  color: gray;
  font-size: 18px;
`



const StyledSingIn = { FormWrapper, FormH, FormH2 }

export default StyledSingIn
