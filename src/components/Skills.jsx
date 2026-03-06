import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container reveal">
                <h2>Skills & Experience</h2>
                <div className="skills-grid">
                    <div className="glass-card skill-card reveal">
                        <h3>Languages & Frameworks</h3>
                        <div className="skills-tags">
                            <span className="skill-tag">PHP</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">Node.JS</span>
                            <span className="skill-tag">Angular JS</span>
                            <span className="skill-tag">Flutter</span>
                            <span className="skill-tag">Laravel</span>
                            <span className="skill-tag">Django</span>
                            <span className="skill-tag">HTML</span>
                            <span className="skill-tag">CSS</span>
                            <span className="skill-tag">Vanilla Javascript</span>
                            <span className="skill-tag">Bootstrap</span>
                            <span className="skill-tag">Dart</span>
                        </div>
                    </div>
                    <div className="glass-card skill-card reveal">
                        <h3>Databases & Tools</h3>
                        <div className="skills-tags">
                            <span className="skill-tag">MySQL</span>
                            <span className="skill-tag">MongoDB</span>
                            <span className="skill-tag">Git</span>
                        </div>
                    </div>
                    <div className="glass-card skill-card reveal">
                        <h3>Experience Highlights</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <strong style={{ color: '#fff', fontSize: '1.2rem' }}>E86 Limited</strong><br />
                                <span style={{ color: '#aaa' }}>Software Developer & Programming Tutor</span>
                            </div>
                            <div>
                                <strong style={{ color: '#fff', fontSize: '1.2rem' }}>NPLINKUP</strong><br />
                                <span style={{ color: '#aaa' }}>API Engineer</span>
                                <p style={{ marginTop: '8px', fontSize: '1rem', color: '#888' }}>
                                    Managed API versioning for 15+ APIs and reduced bugs by 30% through rigorous testing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
