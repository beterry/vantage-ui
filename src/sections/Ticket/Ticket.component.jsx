import React, {useState} from 'react'

//import styles
import styles from './Ticket.module.scss'

//import components
import Tab from '../../components/Tabs/Message/Tab.component'
import Actions from '../../components/Actions/Actions.component'
import Reminder from '../../components/Reminder/Reminder.component'

const Ticket = () => {
    const [activeTab, setActiveTab] = useState(0)

    const changeActive = (tab) => {
        setActiveTab(tab)
    }

    return (
        <section
            className={styles.ticket}
        >
            <div className={styles.tabs}>
                <Tab
                    title='Message'
                    active={activeTab === 0}
                    handleClick={changeActive}
                    id={0}
                />
                <Tab
                    title='Contact Info'
                    active={activeTab === 1}
                    handleClick={changeActive}
                    id={1}
                />
                <Tab
                    title='FAQ'
                    active={activeTab === 2}
                    handleClick={changeActive}
                    id={2}
                />
            </div>
            <div className={styles.info}>
                <div className={styles.left}>
                    <div>Message</div>
                </div>
                <div className={styles.right}>
                    <Actions />
                    <Reminder />
                </div>
            </div>
        </section>
    )
}

export default Ticket