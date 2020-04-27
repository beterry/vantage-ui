import React from 'react'

//import styles
import './App.css'

//import sections
import TopBar from './sections/TopBar/TopBar.component'
import TicketTabs from './sections/TicketTabs/TicketTabs.component'
import Ticket from './sections/Ticket/Ticket.component'

const App = () => {
  return (
    <main>
      <TopBar />
      <TicketTabs />
      <Ticket />
    </main>
  )
}

export default App;
