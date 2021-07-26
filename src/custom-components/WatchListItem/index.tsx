import React from 'react'
import Container from '../../components/Container'
import Label from '../../components/Label'
import styles from './watchlistitem.module.css'

const WatchListItem: React.VoidFunctionComponent = React.memo(() => {
  return (
    <Container classNames={styles.watchListItem}>
      <Container>
        <img
          className={styles.itemImg}
          src='https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXX7gNTPcUmux5cX1nCQtuu38rAR2JwLBZSorOhLlUw7PDacClHotqyxNHelaalMO6AwzhV6cYi2r-YrImi2lLl-hI6N2r1LdWQcFNrYljOug_p46CdyT8/62fx62f'
        />
      </Container>
      <Container classNames={styles.boxInfor}>
        <Label
          value='Hallowed Chest of the Diretide'
          classNames={styles.itemName}
        />
        <Label value='Rare Treasure chest' classNames={styles.itemRarity} />
      </Container>
      <Container classNames={styles.boxPrice}>
        <Label value='$0.16' classNames={styles.itemPrice} />
      </Container>
    </Container>
  )
})

export default WatchListItem
