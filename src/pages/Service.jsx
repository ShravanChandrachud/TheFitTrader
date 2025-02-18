import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturedCourses from '../components/FeaturedCourses'
const Service = () => {
    return (
        <div className='service'>
            <Header />
            <div className='service-content'>
                <FeaturedCourses />
            </div>
            <Footer />
        </div>
    )
}

export default Service