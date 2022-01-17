import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientContainer,
  Heading,
  UnOrderedList,
  ColorsContainer,
  ColorItem,
  ColorInput,
  ColorCode,
  GenerateButton,
  Text,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    colorInput1: '',
    colorInput2: '',
    activeDirection: gradientDirectionsList[0].directionId,
    color1: ' #8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].directionId,
  }

  onChangeColor1 = event => {
    this.setState({colorInput1: event.target.value})
    console.log(event.target.value)
  }

  onChangeColor2 = event => {
    this.setState({colorInput2: event.target.value})
  }

  clickedDirectionButton = directionId => {
    console.log(directionId)
    this.setState({activeDirection: directionId})
  }

  onClickGenerateButton = () => {
    const {colorInput1, colorInput2, activeDirection} = this.state
    this.setState({
      color1: colorInput1,
      color2: colorInput2,
      direction: activeDirection,
    })
  }

  render() {
    const {
      colorInput1,
      colorInput2,
      activeDirection,
      color1,
      color2,
      direction,
    } = this.state
    console.log(color1, color2, direction)
    const updatedColor1 = colorInput1 === '' ? '#8ae323' : colorInput1
    const updatedColor2 = colorInput2 === '' ? '#014f7b' : colorInput2
    const directionValue = direction.toLowerCase()
    console.log(directionValue)

    return (
      <GradientContainer
        bgColor1={color1}
        bgColor2={color2}
        bgDirection={directionValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Text>Choose Direction</Text>
        <UnOrderedList>
          {gradientDirectionsList.map(eachGradient => (
            <GradientDirectionItem
              gradientDetails={eachGradient}
              key={eachGradient.directionId}
              clickedDirectionButton={this.clickedDirectionButton}
              isActiveDirection={activeDirection === eachGradient.directionId}
            />
          ))}
        </UnOrderedList>
        <Text>Pick the Colors</Text>
        <ColorsContainer>
          <ColorItem>
            <ColorCode>{updatedColor1}</ColorCode>
            <ColorInput
              type="color"
              value={updatedColor1}
              onChange={this.onChangeColor1}
            />
          </ColorItem>
          <ColorItem>
            <ColorCode>{updatedColor2}</ColorCode>
            <ColorInput
              type="color"
              value={updatedColor2}
              onChange={this.onChangeColor2}
            />
          </ColorItem>
        </ColorsContainer>
        <GenerateButton type="button" onClick={this.onClickGenerateButton}>
          Generate
        </GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
