import styled from 'styled-components'

export const ListItem = styled.li`
  margin-right: 20px;
`

export const CustomButton = styled.button`
  padding: 5px 20px;
  color: #334155;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  opacity: ${props => props.opacityProp};
`
