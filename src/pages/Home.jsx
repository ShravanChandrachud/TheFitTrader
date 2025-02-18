import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/Home.css';
import icon from '../assets/react.svg';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate();

    const handleViewServiceClick = () => {
        navigate('/service');
    };

    return (
        <div className="home">
            <Header />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    {/* Moved the image here */}
                    <div className="hero-image">
                        <img src={icon} alt="Hero" />
                    </div>

                    <div className="hero-text">
                        <h1>Hi, I'm Aayush More, your personal finance consultant</h1>
                        <p>Helping you grow your wealth, achieve financial freedom, and secure your future.</p>
                        <button className="cta-button" onClick={handleViewServiceClick}>View Services</button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="about-content">
                    {/* Removed the image from here */}
                    <div className="about-text">
                        <h2>About Me</h2>
                        <p>
                            I specialize in guiding individuals and businesses toward
                            financial stability and growth. With years of experience in
                            wealth management and personalized consultations, I help you
                            achieve your short-term and long-term financial goals.
                        </p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">Profile Summary</div>
                    <div className="card">Mission Values</div>
                    <div className="card">Statistical Highlights</div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
