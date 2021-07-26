import React from 'react'
import Container from '../Container'
import { ElProps } from '../Element'

type ItemCustomize = {}

export type ButtonGroupItemProps = {
  id?: string | number
  label?: string
  value?: string | number
  customize?: ItemCustomize
  el_props?: ElProps
}

const ButtonGroupItem: React.VoidFunctionComponent<ButtonGroupItemProps> =
  React.memo(({ label, value }) => {
    return <Container>{label}</Container>
  })
export default ButtonGroupItem
