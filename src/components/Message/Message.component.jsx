import React from 'react'

//import styles
import styles from './Message.module.scss'

export default () => (
    <div className={styles.message}>
        <div className={styles.title}>
            <h4>Help! Issues Logging In</h4>
            <div className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </div>
        </div>
        <div className={styles.body}>
            <p>Hello Support</p>
            <p>I am unable to login to my account. I tried resetting my password but I still cannot login. Can you please help?</p>
            <p>Thank you,<br />Customer</p>
            <div className={styles.actions}>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" fill="#fff"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M12 8V4l8 8-8 8v-4H4V8z" fill="#fff"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
                <button>Comment</button>
            </div>
        </div>

    </div>
)