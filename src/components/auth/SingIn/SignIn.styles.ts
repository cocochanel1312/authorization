import styled from "styled-components"

const FormWrapper = styled.div<{ mode?: string }>`
  /* position: absolute; */
  align-content: center;
`

const FormH = styled.h1``

const FormH2 = styled.h2`
  color: gray;
  font-size: 18px;
`

const SubmitButton = styled.button`
  :where(.css-dev-only-do-not-override-m4timi).ant-btn-primary {
    color: #fff;
    background: #1677ff;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
    width: 400px;
  }
  :where(.css-dev-only-do-not-override-m4timi).ant-btn-lg {
    font-size: 16px;
    line-height: 1.5;
    height: 40px;
    padding: 7px 15px;
    border-radius: 8px;
  }
  :where(.css-dev-only-do-not-override-m4timi).ant-btn {
    outline: none;
    position: relative;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
  }
`

const StyledSingIn = { FormWrapper, FormH, SubmitButton, FormH2 }

export default StyledSingIn
