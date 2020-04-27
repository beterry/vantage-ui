import React from 'react'

//import styles
import styles from './Issue.module.scss'

//data
const data = [
    {
        title: 'Ticket Duration',
        info: '1 Hour'
    },
    {
        title: 'Email Thread Status',
        info: 'Received'
    },
    {
        title: 'Priority',
        info: 'Low'
    },
    {
        title: 'Status',
        info: 'Open'
    },
    {
        title: 'Type',
        info: '1 Hour'
    },
    {
        title: 'Watchers',
        info: 'John Doe'
    },
    {
        title: 'Tags',
        info: 'General'
    },
    {
        title: 'Related Account',
        info: null
    },
    {
        title: 'Related Contact',
        info: null
    },
    {
        title: 'Email',
        info: null
    },
    {
        title: 'Assigned To',
        info: null
    }
]

export default () => (
    <div className={styles.issue}>
        <h4>Login Issue</h4>
        {data.map((row, index) => 
            <div
                className={styles.row}
                key={`row ${index}`}
            >
                <div className={styles.title}>
                    <p>{row.title}</p>
                </div>
                <div className={styles.info}>
                    <p>{row.info}</p>
                </div>
            </div>
        )}
    </div>
)