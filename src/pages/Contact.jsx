import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './styles/PageLayout.css';

const Contact = () => {
    return (
        <div className='contact'>
            <Header />
            <div className='contact-content'>
                Contact
            </div>
            <Footer />
        </div>
    )
}

export default Contact
