import React from 'react'

//import styles
import styles from './Contact.module.scss'

//import components
import Table from '../Table/Table.component'

//data
const contactData = [
    {
        title: 'Name',
        detail: 'John Doe'
    },
    {
        title: 'Department',
        detail: 'Sales'
    },
    {
        title: 'Email',
        detail: 'johndoe@gmail.com'
    },
    {
        title: 'Reports To',
        detail: 'Ashley'
    },
    {
        title: 'Phone',
        detail: '123.456.7890'
    },
    {
        title: 'Notify Owner',
        detail: 'No'
    },
    {
        title: 'Account',
        detail: 'Deer Funds'
    },
    {
        title: 'Modified',
        detail: 'Yesterday'
    },
    {
        title: 'Title',
        detail: '1 Hour'
    },
    {
        title: 'Created',
        detail: 'March 02, 2017'
    }
]

const addressData = [
    {
        title: 'Street',
        detail: '1 Broad Street'
    },
    {
        title: 'PO Box',
        detail: '1300'
    },
    {
        title: 'City',
        detail: 'Philadelphia'
    },
    {
        title: 'State',
        detail: 'PA'
    },
    {
        title: 'Postal Code',
        detail: '19103'
    },
    {
        title: 'Country',
        detail: 'US'
    },
]

export default () => (
    <div className={styles.contact}>
        <Table
            title='Contact'
            data={contactData}
        />
        <Table
            title='Address Information'
            data={addressData}
        />
    </div>
)