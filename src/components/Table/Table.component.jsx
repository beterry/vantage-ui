import React from 'react'

//import styles
import styles from './Table.module.scss'

export default ({title, data}) => {
    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <h4>{title}</h4>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M19 13H5v-2h14v2z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </div>
            </div>
            <div className={styles.rowContainer}>
                {data.map((info, index) => 
                    <div
                        className={styles.row}
                        key={`${title} ${index}`}
                    >
                        <p>{info.title}</p>
                        <p>{info.detail}</p>
                    </div>
                )}
            </div>
        </div>
    )
}