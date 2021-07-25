import React, { useMemo } from 'react'
import Utils from '../../utils'
import Element, { ElProps } from '../Element'
import styles from './label.module.css'
type LabelProps = {
  value?: string
  size?: string
  classNames?: string
  el_props?: ElProps
}

const Label: React.VoidFunctionComponent<LabelProps> = React.memo(
  ({ value, el_props, size, classNames = 'label' }) => {
    const clssNames = useMemo(() => {
      return Utils.Creator.Classes(styles, classNames, {
        defaultClass: 'label'
      })
    }, [styles, classNames])
    return (
      <Element el_props={el_props}>
        <span className={clssNames}>{value}</span>
      </Element>
    )
  }
)

export default Label
