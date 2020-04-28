import React, {useState} from 'react'

//import styles
import styles from './Ticket.module.scss'

//import components
import Tab from '../../components/Tabs/Message/Tab.component'
import Actions from '../../components/Actions/Actions.component'
import Reminder from '../../components/Reminder/Reminder.component'
import Tags from '../../components/Tags/Tags.component'
import Issue from '../../components/Issue/Issue.component'
import Message from '../../components/Message/Message.component'
import Contact from '../../components/Contact/Contact.component'
import FAQ from '../../components/FAQ/FAQ.component'
import Spacing from '../../components/Spacing/Spacing.component'

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
                    {/* <Message /> */}
                    {/* <Contact /> */}
                    <FAQ />
                </div>
                <div className={styles.right}>
                    <Actions />
                    <Spacing size='12px' />
                    <Reminder />
                    <Spacing size='12px' />
                    <Tags />
                    <Spacing size='12px' />
                    <Issue />
                </div>
            </div>
        </section>
    )
}

export default Ticket