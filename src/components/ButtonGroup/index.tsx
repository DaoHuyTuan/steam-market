import React from 'react'
import Container from '../Container'
import { ElProps } from '../Element'
import ButtonGroupItem, { ButtonGroupItemProps } from './item'

type ButtonGroupProps = {
  active?: string | number
  children?: React.ReactNode
  list?: Array<ButtonGroupItemProps>
  defaultValue?: string | number
  el_props?: ElProps
}

const ButtonGroup: React.VoidFunctionComponent<ButtonGroupProps> = React.memo(
  ({ list, children }) => {
    return (
      <Container>
        {children
          ? children
          : list?.map(item => {
              return <ButtonGroupItem {...item} />
            })}
      </Container>
    )
  }
)
export default ButtonGroup
