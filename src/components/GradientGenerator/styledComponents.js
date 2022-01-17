import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
`

export const GradientContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.bgDirection},
    ${props => props.bgColor1},
    ${props => props.bgColor2}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  margin: 0px;
`

export const Heading = styled.h1`
  color: #ffffff;
`

export const UnOrderedList = styled.ul`
  display: flex;
`
export const ColorsContainer = styled.div`
  display: flex;
`
export const ColorItem = styled.div`
  margin-right: 20px;
`

export const ColorInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100px;
  height: 50px;
`
export const ColorCode = styled.p`
  color: red;
  font-size: 24px;
`
export const GenerateButton = styled.button`
  padding: 8px 20px;
  cursor: pointer;
  color: #014f7b;
  background-color: #00c9b7;
  margin-top: 20px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
`

export const Text = styled.p`
  color: #ffffff79;
  font-size: 24px;
  font-weight: 500;
`
