import React from 'react'

//import styles
import './App.css'

//import sections
import TopBar from './sections/TopBar/TopBar.component'
import TicketTabs from './sections/TicketTabs/TicketTabs.component'

const App = () => {
  return (
    <>
      <TopBar />
      <TicketTabs />
    </>
  )
}

export default App;
