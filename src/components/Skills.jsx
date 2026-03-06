import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="container reveal">
                <h2>Skills & Experience</h2>
                <div className="skills-grid">
                    <div className="glass-card skill-card reveal">
                        <h3>Languages & Frameworks</h3>
                        <p>PHP, Python, Node.JS, Angular JS, Flutter, Laravel, Django, HTML, CSS, Vanilla Javascript, Bootstrap, Dart.</p>
                    </div>
                    <div className="glass-card skill-card reveal">
                        <h3>Databases & Tools</h3>
                        <p>MySQL, MongoDB, Git.</p>
                    </div>
                    <div className="glass-card skill-card reveal">
                        <h3>Experience Highlights</h3>
                        <p><strong>E86 Limited:</strong> Software Developer & Programming Tutor.<br />
                            <strong>NPLINKUP:</strong> API Engineer. Managed API versioning for 15+ APIs and reduced bugs by 30% through rigorous testing.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
