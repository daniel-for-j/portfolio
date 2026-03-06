import React, { useState } from 'react';

const Contact = () => {
    const [copiedText, setCopiedText] = useState('');

    const handleCopy = (e, text) => {
        e.preventDefault();
        navigator.clipboard.writeText(text).then(() => {
            setCopiedText(text);
            setTimeout(() => setCopiedText(''), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <footer id="contact" className="section">
            <div className="container reveal">
                <span className="section-label">Let's Connect</span>
                <h2>Get in Touch</h2>
                <p className="contact-subtitle">Have a project in mind or want to collaborate? Reach out!</p>
                <div className="contact-links">
                    <a href="mailto:danieloluwasegun1000@gmail.com" className="contact-link" onClick={(e) => handleCopy(e, 'danieloluwasegun1000@gmail.com')}>
                        <span className="link-label">✉️ Email</span>
                        <span className="link-value">danieloluwasegun1000@gmail.com</span>
                    </a>
                    <a href="tel:09032497799" className="contact-link" onClick={(e) => handleCopy(e, '09032497799')}>
                        <span className="link-label">📞 Phone</span>
                        <span className="link-value">09032497799</span>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link">
                        <span className="link-label">◆ GitHub</span>
                        <span className="link-value">View Profile</span>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">
                        <span className="link-label">◆ LinkedIn</span>
                        <span className="link-value">Connect</span>
                    </a>
                </div>
                <p id="copy-message" style={{ opacity: copiedText ? 1 : 0, transition: 'opacity 0.3s', marginTop: '20px', color: 'var(--accent-1)', fontSize: '0.9rem' }}>
                    ✓ Copied to clipboard!
                </p>
            </div>
        </footer>
    );
};

export default Contact;
