import React from 'react'
import Container from '../../components/Container'
import Label from '../../components/Label'

import styles from './searchpage.module.css'
const SearchPage = () => {
  return (
    <Container classNames={styles.App}>
      <Label value='hello this is search' />
    </Container>
  )
}

export default SearchPage
