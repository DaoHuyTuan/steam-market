import React from 'react'
import Element, { ElProps } from '../Element'

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>

type InputSize = {}

type InputProps = {
  value?: string | ''
  type?: string
  size?: InputSize
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  placeHolder?: string | undefined
  icon?: string | React.ReactNode
  setValue?: (value: string) => void
  el_props?: ElProps
  readOnly?: boolean
}

const Input: React.VoidFunctionComponent<InputProps> = React.memo(props => {
  const { value, type, icon, size, el_props, setValue, ...rest } = props
  return (
    <Element el_props={el_props}>
      <input value={value} {...rest} />
    </Element>
  )
})

export default Input
