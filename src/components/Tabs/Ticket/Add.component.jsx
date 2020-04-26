import React from 'react'

//import styles
import styles from './Tab.module.scss'

export default () => (
    <button
        className={`${styles.tab} ${styles.add}`}
    >
        <h3>Add New</h3>
    </button>
)