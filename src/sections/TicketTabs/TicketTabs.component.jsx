import React, {useState} from 'react'

//import styles
import styles from './TicketTabs.module.scss'

//import components
import Tab from '../../components/Tabs/Ticket/Tab.component'
import Add from '../../components/Tabs/Ticket/Add.component'

const TicketTabs = () => {
    //set state
    const [numberOfTickets, setNumberOfTickets] = useState(3) //init number of tickets
    const [activeTab, setActiveTab] = useState(1) //init active tab

    const changeActive = (ticketNumber) => {
        setActiveTab(ticketNumber)
    }

    //TODO: set limit
    const addTicket = () => {
        setNumberOfTickets(numberOfTickets + 1)
    }

    // TODO: fix bug where no tab is active if last tab is closed
    const closeTicket = (ticketNumber) => {
        setNumberOfTickets(numberOfTickets - 1)
    }

    //creates array of tickets to render in the render method
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
            {/* renders array of tickets created above */}
            {tickets.map((ticket) => ticket)}
            <Add 
                handleClick={addTicket}
            />
        </div>
    )
}

export default TicketTabs