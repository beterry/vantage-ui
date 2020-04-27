import React from 'react'

//import styles
import styles from './Tab.module.scss'

export default ({title, active, handleClick, id}) => (
    <button
        className={`
            ${styles.tab}
            ${active ? styles.active : styles.inactive}
        `}
        onClick={() => handleClick(id)}
    >
        <h4>{title}</h4>
    </button>
)