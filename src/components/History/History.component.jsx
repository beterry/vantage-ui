import React from 'react'

//import styles
import styles from './History.module.scss'

//data
const data = [
    {
        number: 1,
        status: 'Received'
    },
    {
        number: 2,
        status: 'Low'
    },
    {
        number: 3,
        status: 'Open'
    },
    {
        number: 4,
        status: '1 Hour'
    },
    {
        number: 5,
        status: '1 Hour'
    },
]

export default () => {
    return (
        <div className={styles.history}>
            <div className={styles.header}>
                <h4>Trouble Ticket History</h4>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M19 13H5v-2h14v2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </div>
            </div>
            <div className={styles.rowContainer}>
                <div className={styles.row}>
                    <p>Name</p>
                    <p>Status</p>
                    <p>Date & Time</p>
                </div>
                {data.map((ticket, index) => 
                    <div
                        className={styles.row}
                        key={`history ${index}`}
                    >
                        <p>{`Trouble Ticket ${ticket.number}`}</p>
                        <p>{ticket.status}</p>
                        <p>{ticket.status}</p>
                    </div>
                )}
            </div>
        </div>
    )
}