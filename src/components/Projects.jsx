import React from 'react';

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
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="projects-header reveal">
                    <span className="section-label">Selected Work</span>
                    <h2>Featured Projects</h2>
                </div>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div className="glass-card project-card reveal" key={index}>
                            <div className="project-visual">
                                <div className={`project-visual-inner ${project.gradient}`}></div>
                                <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                            </div>
                            <div className="project-body">
                                <h3>{project.name}</h3>
                                <p className="project-desc">{project.description}</p>
                                <p className="project-role">{project.role}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span className="project-tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                                <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                                    Visit Site →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
