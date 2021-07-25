import React, { useMemo } from 'react'
import Element, { ElProps } from '../Element'
import clssNname from 'classnames/bind'
import styles from './container.module.css'
import Utils from '../../utils'

type ContainerProps = {
  classNames?: string
  children?: React.ReactNode
  el_props?: ElProps
}

const Container: React.VoidFunctionComponent<ContainerProps> = React.memo(
  ({ classNames = 'container', children, el_props }) => {
    const classes = useMemo(() => {
      return Utils.Creator.Classes(styles, classNames, {
        defaultClass: 'container'
      })
    }, [styles, classNames])
    return (
      <Element el_props={el_props}>
        <div className={classes}>{children}</div>
      </Element>
    )
  }
)
export default Container
