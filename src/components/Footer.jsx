import React from 'react'
import './styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='privacy-terms'>
                <div className='privacy'>Privacy Policy</div>
                <div className='terms'>Terms of Service</div>
            </div>
            <div className='copyright'>
                &copy; 2025 TheFitTrader
            </div>
            <div className='social'>
                <div className='social-icon'>Facebook</div>
                <div className='social-icon'>Twitter</div>
                <div className='social-icon'>Instagram</div>
            </div>
        </div>
    )
}

export default Footer
