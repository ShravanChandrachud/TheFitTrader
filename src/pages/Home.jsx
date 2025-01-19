import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './styles/PageLayout.css';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <div className='home-content'>
                Home
            </div>
            <Footer />
        </div>
    )
}

export default Home
