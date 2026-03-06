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
                        <h2>About Me</h2>
                        <p>I am a student at Bingham University with a strong passion for building robust backend systems and intuitive user interfaces. I excel in leading cross-functional teams and providing personalized instruction.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
