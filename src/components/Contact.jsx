import React, { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e, text) => {
        e.preventDefault();
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <footer id="contact" className="section">
            <div className="container reveal">
                <h2>Get in Touch</h2>
                <div className="contact-links">
                    <a href="mailto:danieloluwasegun1000@gmail.com" className="contact-link" onClick={(e) => handleCopy(e, 'danieloluwasegun1000@gmail.com')}>
                        danieloluwasegun1000@gmail.com
                    </a>
                    <a href="tel:09032497799" className="contact-link" onClick={(e) => handleCopy(e, '09032497799')}>
                        09032497799
                    </a>
                </div>
                <p id="copy-message" style={{ opacity: copied ? 1 : 0, transition: 'opacity 0.3s', marginTop: '10px', color: '#aaa' }}>
                    Copied to clipboard!
                </p>
            </div>
        </footer>
    );
};

export default Contact;
