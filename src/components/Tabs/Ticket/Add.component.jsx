import React from 'react'

//import styles
import styles from './Tab.module.scss'

export default ({handleClick}) => (
    <button
        className={`${styles.tab} ${styles.add}`}
        onClick={() => handleClick()}
    >
        <h3>Add New</h3>
        <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#fff"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
        </div>
    </button>
)