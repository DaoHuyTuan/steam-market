import React, { useMemo } from 'react'
import Utils from '../../utils'
import Element, { ElProps } from '../Element'
import styles from './toggle.module.css'

type ToggleProps = {
  checked?: boolean
  type?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  classNames: string
  el_props?: ElProps
}

const Toggle: React.VoidFunctionComponent<ToggleProps> = React.memo(
  ({ checked, type, classNames, el_props, onChange }) => {
    const toggleClass = useMemo(() => {
      return Utils.Creator.Classes(styles, classNames, {
        defaultClass: type ? type : 'toggle'
      })
    }, [styles, classNames])

    return (
      <Element el_props={el_props}>
        <input className={toggleClass} checked={checked} onChange={onChange} />
      </Element>
    )
  }
)

export default Toggle
