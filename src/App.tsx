import React, { useMemo, useState } from 'react'
import styles from './App.module.css'
import Container from './components/Container'
import Label from './components/Label'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WatchList from './pages/WatchList'
import SearchPage from './pages/Search'
import Tabs from './custom-components/Tabs'
function App() {
  return (
    <Router>
      <Container classNames={styles.App}>
        <Label value='Steam Market' classNames={styles.appTitle} />
        <Tabs />
        <Container classNames={styles.switchContents}>
          <Switch>
            <Route path='/' exact>
              <WatchList />
            </Route>
            <Route path='/search' exact>
              <SearchPage />
            </Route>
          </Switch>
        </Container>
      </Container>
    </Router>
  )
}

export default App
