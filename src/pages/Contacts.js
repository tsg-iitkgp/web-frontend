import React from 'react';
import ContactCard from '../components/ContactCard';
import Layout from '../components/Layout';
import Styles from '../styles/contacts.module.css';

function Contacts() {
    document.title = 'Contacts | TSG';
    return (
        <Layout>
            <div className=''>
                <h1 className='pageHeading'>
                    Contact Us
                </h1>
                <div className={Styles.contactsContainer}>
                    <ContactCard
                        imgSrc={'/data/images/contacts/19AE10017.png'}
                        name="Praneeth"
                        designation="Technology Coordinator"
                        email="praneeth"
                        facebook=""
                        whatsapp=""
                    />
                </div>
            </div>
        </Layout>
    )
}

export default Contacts;
