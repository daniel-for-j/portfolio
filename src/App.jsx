import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const shapesRef = useRef([]);

    useEffect(() => {
        // Parallax Background
        const handleScrollParallax = () => {
            let scrollY = window.scrollY;
            shapesRef.current.forEach((shape, index) => {
                if (!shape) return;
                let speed = (index + 1) * 0.12;
                shape.style.transform = `translateY(${scrollY * speed}px)`;
            });
        };

        // Scroll-Triggered Reveals
        const reveals = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });

        window.addEventListener('scroll', handleScrollParallax);

        return () => {
            window.removeEventListener('scroll', handleScrollParallax);
            reveals.forEach(reveal => revealObserver.unobserve(reveal));
        };
    }, []);

    const setShapeRef = (el, index) => {
        shapesRef.current[index] = el;
    };

    return (
        <>
            {/* Parallax Background */}
            <div id="parallax-bg">
                <div className="shape shape-1" ref={(el) => setShapeRef(el, 0)}></div>
                <div className="shape shape-2" ref={(el) => setShapeRef(el, 1)}></div>
                <div className="shape shape-3" ref={(el) => setShapeRef(el, 2)}></div>
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Sections */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
