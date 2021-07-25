import React from 'react'
import Element, { ElProps } from '../Element'

type CustomizeButton = {}

type ButtonProps = {
  label?: string
  onClick?: () => void
  customize?: CustomizeButton
  el_props?: ElProps
}
const Button: React.VoidFunctionComponent<ButtonProps> = ({
  label,
  onClick,
  el_props
}) => {
  return (
    <Element el_props={el_props}>
      <button onClick={onClick}>{label}</button>
    </Element>
  )
}

export default Button
