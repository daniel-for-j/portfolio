import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    const shapesRef = useRef([]);

    useEffect(() => {
        // 1. Parallax Background
        const handleScrollParallax = () => {
            let scrollY = window.scrollY;
            shapesRef.current.forEach((shape, index) => {
                if (!shape) return;
                let speed = (index + 1) * 0.15;
                shape.style.transform = `translateY(${scrollY * speed}px)`;
            });
        };

        // 2. Scroll-Triggered Reveals via IntersectionObserver for better React compatibility
        const reveals = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: stop observing once revealed
                    // revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of element is visible
            rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });

        // Add scroll listener for parallax
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
            {/* Parallax Background Shapes */}
            <div id="parallax-bg">
                <div className="shape shape-1" ref={(el) => setShapeRef(el, 0)}></div>
                <div className="shape shape-2" ref={(el) => setShapeRef(el, 1)}></div>
                <div className="shape shape-3" ref={(el) => setShapeRef(el, 2)}></div>
            </div>

            {/* Application Components */}
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
