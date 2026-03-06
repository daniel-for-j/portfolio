import React, { useEffect, useRef, useState } from 'react';

const projectsData = [
    {
        name: 'bhuorder.com',
        description: 'Campus Delivery — food & essentials ordering platform for university students.',
        role: 'Backend API Engineer',
        url: 'https://bhuorder.com',
        tags: ['PHP', 'Laravel', 'MySQL', 'REST API'],
        gradient: 'project-gradient-1',
    },
    {
        name: 'nplinkup.com',
        description: 'Social connection platform helping people find meaningful relationships.',
        role: 'Backend API Engineer',
        url: 'https://nplinkup.com',
        tags: ['PHP', 'Laravel', 'MySQL', 'API Versioning'],
        gradient: 'project-gradient-2',
    },
    {
        name: 'vibetests.co',
        description: 'Online testing platform for individuals and companies to assess skills.',
        role: 'Backend Developer',
        url: 'https://vibetests.co',
        tags: ['Node.JS', 'MongoDB', 'REST API'],
        gradient: 'project-gradient-3',
    },
    {
        name: 'soar.co',
        description: 'Online academy and community platform for collaborative learning.',
        role: 'Full Stack Development',
        url: 'https://soar.co',
        tags: ['Python', 'Django', 'PostgreSQL'],
        gradient: 'project-gradient-4',
    },
    {
        name: 'tntvnetwork.com.ng',
        description: 'News media site delivering clean, fast content to Nigerian readers.',
        role: 'Full Stack Developer',
        url: 'https://tntvnetwork.com.ng',
        tags: ['PHP', 'Laravel', 'MySQL', 'CMS'],
        gradient: 'project-gradient-5',
    },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const handleScroll = () => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const totalCards = projectsData.length;

            // How far the user has scrolled past the top of the section
            const scrollInSection = scrollY - sectionTop;

            // The scroll range where horizontal movement happens
            const scrollRange = sectionHeight - viewportHeight;

            if (scrollRange <= 0) return;

            // Progress from 0 to 1 through the section
            const progress = Math.min(Math.max(scrollInSection / scrollRange, 0), 1);

            // Each slide is 100vw wide, total track = totalCards * 100vw
            // We want to move from showing card 0 to card N-1
            const maxTranslate = (totalCards - 1) * window.innerWidth;
            const translateX = progress * maxTranslate;

            track.style.transform = `translateX(-${translateX}px)`;

            // Determine active card index
            const idx = Math.min(Math.round(progress * (totalCards - 1)), totalCards - 1);
            setActiveIndex(idx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            id="projects"
            className="projects-scroll-section"
            ref={sectionRef}
        >
            {/* Sticky viewport */}
            <div className="projects-sticky">
                {/* Header */}
                <div className="projects-header-float">
                    <span className="section-label">Selected Work</span>
                    <h2>Featured Projects</h2>
                    {/* Pagination dots */}
                    <div className="project-dots">
                        {projectsData.map((_, i) => (
                            <span
                                key={i}
                                className={`project-dot ${i === activeIndex ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Horizontal track */}
                <div className="projects-track" ref={trackRef}>
                    {projectsData.map((project, index) => (
                        <div className="project-slide" key={index}>
                            <div className="project-card-hscroll glass-card">
                                {/* Gradient glow behind */}
                                <div className={`project-card-glow ${project.gradient}`}></div>

                                {/* Browser preview */}
                                <div className="project-preview">
                                    <div className="browser-mockup-h">
                                        <div className="browser-header-h">
                                            <div className="browser-dots-h">
                                                <span className="dot-h red"></span>
                                                <span className="dot-h yellow"></span>
                                                <span className="dot-h green"></span>
                                            </div>
                                            <div className="browser-url-h">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                                </svg>
                                                {project.url.replace(/^https?:\/\//, '')}
                                            </div>
                                        </div>
                                        <div className="iframe-container-h">
                                            <iframe
                                                src={project.url}
                                                title={project.name}
                                                loading="lazy"
                                                sandbox="allow-scripts allow-same-origin"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>

                                {/* Project info overlay */}
                                <div className="project-info-h">
                                    <span className="project-number-h">{String(index + 1).padStart(2, '0')}</span>
                                    <h3>{project.name}</h3>
                                    <p className="project-desc-h">{project.description}</p>
                                    <p className="project-role-h">{project.role}</p>
                                    <div className="project-tags-h">
                                        {project.tags.map((tag, i) => (
                                            <span className="project-tag-h" key={i}>{tag}</span>
                                        ))}
                                    </div>
                                    <a href={project.url} target="_blank" rel="noreferrer" className="project-link-h">
                                        Visit Site
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
