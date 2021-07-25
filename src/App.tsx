import React, { useMemo, useState } from 'react'
import logo from './logo.svg'
import styles from './App.module.css'
import Button from './components/Button'
import Container from './components/Container'
import Label from './components/Label'

function App() {
  const [count, setCount] = useState(0)
  const newLabel = useMemo(() => {
    return `hello this is my button ${count}`
  }, [count])
  return (
    <Container classNames={styles.App}>
      <Label value='Steam Market' classNames={styles.appTitle} />
    </Container>
  )
}

export default App
