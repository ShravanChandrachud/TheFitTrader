import React from 'react';
import './styles/FeaturedCourses.css';

// Sample data array (you could also fetch this from an API or pass it in as props)
const courseData = [
    {
        id: 1,
        title: 'Alpha Trader University 2.0: Your Ultimate Trading Solution (MARCH ACCESS)',
        description:
            'Introducing Alpha Trader University 2.0: Your Ultimate Trading Solution... This is not a course for the faint-hearted, but for those...',
        price: '$60',
    },
    {
        id: 2,
        title: 'Alpha Trader University 2.0: Your Ultimate Trading Solution (ONE MONTH ACCESS)',
        description:
            'Introducing Alpha Trader University 2.0: Your Ultimate Trading Solution... This is not a course for the faint-hearted, but for those...',
        price: '$54',
    },
    {
        id: 3,
        title: 'Forex Basics - Learn the Essentials of Forex Trading!',
        description:
            'Forex Basics Course: Learn the Essentials of Forex Trading... Perfect for beginners who want to dive into Forex with confidence...',
        price: '$0',
    },
];

function FeaturedCourses() {
    return (
        <section className="featured-courses">
            <h2 className="featured-courses-title">Featured Courses</h2>

            <div className="course-cards-container">
                {courseData.map((course) => (
                    <div key={course.id} className="course-card">
                        <div className="course-icon">
                            <span role="img" aria-label="book">📚</span>
                        </div>
                        <h3 className="course-name">{course.title}</h3>
                        <p className="course-description">{course.description}</p>
                        <div className="course-price">{course.price}</div>
                        <button className="course-buy-btn">Buy Now</button>
                    </div>
                ))}
            </div>

            <button className="view-all-btn">View All Courses</button>
        </section>
    );
}

export default FeaturedCourses;
