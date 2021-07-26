import React from 'react'
import Container from '../../components/Container'
import Label from '../../components/Label'
import WatchListItem from '../../custom-components/WatchListItem'
import Utils from '../../utils'
import styles from './watchlist.module.css'

const WatchList = () => {
  const watchLists = Utils.LocalStorage.Get('watchlists') || ''
  return (
    <Container classNames={styles.App}>
      <Container classNames={styles.watchList}>
        <WatchListItem />
        <WatchListItem />
        <WatchListItem />
      </Container>
    </Container>
  )
}

export default WatchList
