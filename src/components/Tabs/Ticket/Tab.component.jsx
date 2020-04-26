import React from 'react'

//import styles
import styles from './Tab.module.scss'

export default ({ticketNumber, active=false, action}) => {
    const handleClick = () => {
        action(ticketNumber)
    }
    return (
        <button
            className={`${styles.tab} ${active ? styles.active : styles.inactive}`}
            onClick={() => handleClick()}
        >
            <h3>Ticket</h3>
            <h3>{ticketNumber}</h3>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 24 24" width="15">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </div>
        </button>
    )   
}