import React from 'react'

//import styles
import styles from './Actions.module.scss'

export default () => (
    <div className={styles.actionsContainer}>
        <button
            className={styles.edit}
        >
            <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </div>
            <h5>Edit</h5>
        </button>
        <button
            className={styles.change}
        >
            <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
            </div>
            <h5>Change Status</h5>
        </button>
        <button
            className={styles.merge}
        >
            <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/>
                </svg>
            </div>
            <h5>Merge</h5>
        </button>
        <button
            className={styles.add}
        >
            <div className={styles.iconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                </svg>
            </div>
            <h5>Add to FAQ</h5>
        </button>
    </div>
)