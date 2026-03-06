import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="section">
            <div className="hero-glow"></div>
            <div className="container reveal">
                <h1 className="hero-title">Segun Daniel</h1>
                <p className="hero-subtitle">Software Developer &amp; API Engineer</p>
                <div className="hero-cta-group">
                    <a href="#projects" className="hero-btn primary">View My Work ↓</a>
                    <a href="#contact" className="hero-btn secondary">Get in Touch</a>
                </div>
                <div className="hero-socials">
                    <a href="https://github.com/daniel-for-j/" target="_blank" rel="noreferrer" className="hero-social-link">
                        ◆ GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/segun-daniel-832b8b24b" target="_blank" rel="noreferrer" className="hero-social-link">
                        ◆ LinkedIn
                    </a>
                    <a href="mailto:danieloluwasegun1000@gmail.com" className="hero-social-link">
                        ◆ Email
                    </a>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse"></div>
                <p style={{ fontSize: '0.75rem' }}>Scroll</p>
            </div>
        </section>
    );
};

export default Hero;
