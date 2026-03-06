import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="section-label">What I Work With</span>
                    <h2>Skills &amp; Experience</h2>
                </div>
                <div className="skills-grid">
                    <div className="glass-card skill-card reveal">
                        <h3>⚙️ Languages &amp; Frameworks</h3>
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
                        <h3>🗄️ Databases &amp; Tools</h3>
                        <div className="skills-tags">
                            <span className="skill-tag db">MySQL</span>
                            <span className="skill-tag db">MongoDB</span>
                            <span className="skill-tag db">Git</span>
                        </div>
                    </div>
                    <div className="glass-card skill-card reveal">
                        <h3>💼 Experience Highlights</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div>
                                <strong style={{ color: '#fff', fontSize: '1.15rem' }}>E86 Limited</strong><br />
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Software Developer & Programming Tutor</span>
                            </div>
                            <div>
                                <strong style={{ color: '#fff', fontSize: '1.15rem' }}>NPLINKUP</strong><br />
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>API Engineer</span>
                                <p style={{ marginTop: '8px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
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
