import React, { useMemo } from 'react'
import Container from '../../components/Container'
import Element, { ElProps } from '../../components/Element'
import Label from '../../components/Label'
import styles from './tabs.module.css'
import { Link, useLocation } from 'react-router-dom'

type TabItemProps = {
  name?: string
  label?: string
  value?: string
  el_props?: ElProps
}

type TabsProps = {
  list?: Array<TabItemProps>
  el_props?: ElProps
}

const Tabs: React.VoidFunctionComponent<TabsProps> = React.memo(
  ({ el_props }) => {
    let location = useLocation()
    return (
      <Element el_props={el_props}>
        <Container classNames={styles.tabs}>
          <Link
            to='/'
            className={
              location.pathname === '/'
                ? styles.tabItem + ' ' + styles.active
                : styles.tabItem
            }>
            <Label value='Watchlist' />
          </Link>
          <Link
            to='/search'
            className={
              location.pathname === '/search'
                ? styles.tabItem + ' ' + styles.active
                : styles.tabItem
            }>
            <Label value='Search' />
          </Link>
        </Container>
      </Element>
    )
  }
)

export default Tabs
