import React, {useState} from 'react'

//import styles
import styles from './TicketTabs.module.scss'

//import components
import Tab from '../../components/Tabs/Ticket/Tab.component'
import Add from '../../components/Tabs/Ticket/Add.component'

const TicketTabs = () => {
    //set state
    const [numberOfTickets, setNumberOfTickets] = useState(3)
    const [activeTab, setActiveTab] = useState(1)

    const changeActive = (ticketNumber) => {
        setActiveTab(ticketNumber)
    }

    const addTicket = () => {
        setNumberOfTickets(numberOfTickets + 1)
    }

    const closeTicket = (ticketNumber) => {
        setNumberOfTickets(numberOfTickets - 1)
        
        setActiveTab(1)
    }

    let tickets = []
    for (let i=1; i <= numberOfTickets; i++){
        tickets.push(
            <Tab
                key={`ticket ${i}`}
                ticketNumber={i}
                active={activeTab === i ? true : null}
                handleClick={changeActive}
                close={closeTicket}
            />
        )
    }

    return (
        <div className={styles.ticketTabs}>
            {/* Add note */}
            {tickets.map((ticket) => ticket)}
            <Add 
                handleClick={addTicket}
            />
        </div>
    )
}

export default TicketTabs