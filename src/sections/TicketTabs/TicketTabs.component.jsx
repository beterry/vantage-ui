import React, {useState} from 'react'

//import styles
import styles from './TicketTabs.module.scss'

//import components
import Tab from '../../components/Tabs/Ticket/Tab.component'
import Add from '../../components/Tabs/Ticket/Add.component'

const TicketTabs = () => {
    //set state
    const [activeTab, setActiveTab] = useState(1)

    const changeActive = (ticketNumber) => {
        setActiveTab(ticketNumber)
    }

    return (
        <div className={styles.ticketTabs}>
            <Tab
                ticketNumber={1}
                active={activeTab === 1 ? true : null}
                action={changeActive}
            />
            <Tab
                ticketNumber={2}
                active={activeTab === 2 ? true : null}
                action={changeActive}
            />
            <Tab
                ticketNumber={3}
                active={activeTab === 3 ? true : null}
                action={changeActive}
            />
            <Add />
        </div>
    )
}

export default TicketTabs