import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './styles/PageLayout.css';

const Service = () => {
    return (
        <div className='service'>
            <Header />
            <div className='service-content'>
                Service
            </div>
            <Footer />
        </div>
    )
}

export default Service