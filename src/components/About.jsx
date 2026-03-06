import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="glass-card about-card reveal">
                    <div className="about-image">
                        <img src="/headshot.jpg" alt="Segun Daniel" id="profile-img" />
                    </div>
                    <div className="about-content">
                        <span className="section-label">About Me</span>
                        <h2>Building the backend that powers the future.</h2>
                        <p>I am a student at Bingham University with a strong passion for building robust backend systems and intuitive user interfaces. I excel in leading cross-functional teams and providing personalized instruction.</p>
                        <div className="about-status">
                            <span>📍 Nigeria</span>
                            <span>🎓 Bingham University</span>
                            <span>⚡ Building APIs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
