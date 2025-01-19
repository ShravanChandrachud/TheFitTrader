import React from 'react'
import './styles/Header.css'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'

const Header = () => {
    const navigate = useNavigate();

    const navBar = [
        { id: 1, name: 'Home', url: '/' },
        { id: 2, name: 'Services', url: '/service' },
        { id: 3, name: 'Contact', url: '/contact' }
    ];

    const handleClick = (item) => {
        navigate(item.url);
    }

    return (
        <div className='header'>
            <div className='logo' onClick={() => handleClick({ url: '/' })}>
                TheFitTrader
            </div>
            <div className='nav'>
                {navBar.map((item) => (
                    <div key={item.id} className='nav-item' onClick={() => handleClick(item)}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header
