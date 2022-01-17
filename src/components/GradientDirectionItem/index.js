import {ListItem, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, clickedDirectionButton, isActiveDirection} = props
  const {displayText, directionId} = gradientDetails

  const setButtonBgColor = isActiveDirection ? '#ffffff' : '#ededed'
  const setOpacity = isActiveDirection ? 1 : 0.5

  const onClickDirectionButton = () => {
    clickedDirectionButton(directionId)
  }

  return (
    <ListItem>
      <CustomButton
        type="button"
        onClick={onClickDirectionButton}
        bgColor={setButtonBgColor}
        opacityProp={setOpacity}
      >
        {displayText}
      </CustomButton>
    </ListItem>
  )
}

export default GradientDirectionItem
