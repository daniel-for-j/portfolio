import React, { useEffect, useRef } from 'react';

const Projects = () => {
    const wrapperRef = useRef(null);
    const trackRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const updateProjectsScroll = () => {
            if (!wrapperRef.current || !trackRef.current || !cardsRef.current) return;

            const projectsWrapper = wrapperRef.current;
            const projectsTrack = trackRef.current;
            const projectCards = cardsRef.current;

            const wrapperTop = projectsWrapper.offsetTop;
            const wrapperHeight = projectsWrapper.offsetHeight;
            const windowHeight = window.innerHeight;

            // Calculate scroll progress within the wrapper
            let scrollProgress = window.scrollY - wrapperTop;
            let maxScroll = wrapperHeight - windowHeight;

            if (scrollProgress >= 0 && scrollProgress <= maxScroll) {
                let percent = scrollProgress / maxScroll;

                // Translate the track horizontally
                let maxTranslate = -(projectCards.length - 1) * 100;
                let translateX = percent * maxTranslate;
                projectsTrack.style.transform = `translateX(${translateX}vw)`;

                // Apply 3D effects based on distance from viewport center
                projectCards.forEach((card, index) => {
                    if (!card) return;
                    let cardCenterPositionVW = index * 100 + 50;
                    let viewportCenterVW = (percent * (projectCards.length - 1) * 100) + 50;
                    let distance = cardCenterPositionVW - viewportCenterVW;

                    let rotateY = distance * 0.5;
                    // constrain rotation
                    rotateY = Math.max(-60, Math.min(60, rotateY));

                    let scale = 1 - Math.abs(distance) * 0.005;
                    scale = Math.max(0.7, scale);

                    let opacity = 1 - Math.abs(distance) * 0.015;
                    opacity = Math.max(0.2, opacity);

                    if (Math.abs(distance) < 20) {
                        opacity = 1;
                    }

                    card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) scale(${scale})`;
                    card.style.opacity = opacity;
                    card.style.zIndex = Math.round(100 - Math.abs(distance));
                });
            }
        };

        window.addEventListener('scroll', updateProjectsScroll);
        window.addEventListener('resize', updateProjectsScroll);
        updateProjectsScroll(); // Trigger on mount

        return () => {
            window.removeEventListener('scroll', updateProjectsScroll);
            window.removeEventListener('resize', updateProjectsScroll);
        };
    }, []);

    const setCardRef = (el, index) => {
        cardsRef.current[index] = el;
    };

    return (
        <section id="projects-wrapper" ref={wrapperRef}>
            <div id="projects-container">
                <h2 className="projects-title reveal">Featured Projects</h2>
                <div className="projects-track" ref={trackRef}>
                    <div className="glass-card project-card" ref={(el) => setCardRef(el, 0)}>
                        <div className="project-preview">
                            <iframe src="https://bhuorder.com" title="bhuorder.com"></iframe>
                        </div>
                        <div className="project-content">
                            <h3>bhuorder.com</h3>
                            <p>Campus Delivery</p>
                            <p className="role">Backend API Engineer</p>
                            <a href="https://bhuorder.com" target="_blank" rel="noreferrer" className="project-link">Visit Site</a>
                        </div>
                    </div>
                    <div className="glass-card project-card" ref={(el) => setCardRef(el, 1)}>
                        <div className="project-preview">
                            <iframe src="https://nplinkup.com" title="nplinkup.com"></iframe>
                        </div>
                        <div className="project-content">
                            <h3>nplinkup.com</h3>
                            <p>Dating Site</p>
                            <p className="role">Backend API Engineer</p>
                            <a href="https://nplinkup.com" target="_blank" rel="noreferrer" className="project-link">Visit Site</a>
                        </div>
                    </div>
                    <div className="glass-card project-card" ref={(el) => setCardRef(el, 2)}>
                        <div className="project-preview">
                            <iframe src="https://vibetests.co" title="vibetests.co"></iframe>
                        </div>
                        <div className="project-content">
                            <h3>vibetests.co</h3>
                            <p>Online Test platform for individuals and companies.</p>
                            <p className="role">Backend Developer</p>
                            <a href="https://vibetests.co" target="_blank" rel="noreferrer" className="project-link">Visit Site</a>
                        </div>
                    </div>
                    <div className="glass-card project-card" ref={(el) => setCardRef(el, 3)}>
                        <div className="project-preview">
                            <iframe src="https://soar.co" title="soar.co"></iframe>
                        </div>
                        <div className="project-content">
                            <h3>soar.co</h3>
                            <p>Online Academy/Community.</p>
                            <p className="role">Full Stack Development</p>
                            <a href="https://soar.co" target="_blank" rel="noreferrer" className="project-link">Visit Site</a>
                        </div>
                    </div>
                    <div className="glass-card project-card" ref={(el) => setCardRef(el, 4)}>
                        <div className="project-preview">
                            <iframe src="https://tntvnetwork.com.ng" title="tntvnetwork.com.ng"></iframe>
                        </div>
                        <div className="project-content">
                            <h3>tntvnetwork.com.ng</h3>
                            <p>News site.</p>
                            <p className="role">Highlight clean content delivery</p>
                            <a href="https://tntvnetwork.com.ng" target="_blank" rel="noreferrer" className="project-link">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
