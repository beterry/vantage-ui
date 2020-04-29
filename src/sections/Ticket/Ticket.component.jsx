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
    //declare state to track active tab
    const [activeTab, setActiveTab] = useState(0)

    //set active tab to param
    const changeActive = (tab) => {
        setActiveTab(tab)
    }

    //func returns correct content based on active tab
    const getContents = () => {
        switch(activeTab){
            case 0:
                return <Message />
            case 1:
                return <Contact />
            case 2:
                return <FAQ />
            default:
                return <Message />
        }
    }

    return (
        <section
            className={styles.ticket}
        >
            {/* These tabs control the state above */}
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

                {/* Calls func to get corrent compnent to display */}
                <div className={styles.left}>
                    {getContents()}
                </div>

                {/* Displays components in the right section */}
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