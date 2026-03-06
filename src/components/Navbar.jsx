import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking a link
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <a href="#hero" className="navbar-logo">
                Segun<span>.</span>
            </a>
            <button
                className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
