import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      description: 'I have solid experience in structuring responsive and accessible web pages using semantic HTML5 elements. I design clean layouts that serve as the foundation for modern web interfaces.',
      icon: 'html'
    },
    {
      name: 'CSS',
      description: 'Experienced in styling user interfaces using CSS3 and modern frameworks. I apply Flexbox, Grid, and animations to enhance design responsiveness and user experience.',
      icon: '#'
    },
    {
      name: 'PHP',
      description: 'I\'ve developed dynamic web applications using PHP and MySQL, handling backend logic, form processing, and database management efficiently for real-world projects.',
      icon: 'php'
    },
    {
      name: 'JavaScript',
      description: 'Skilled in implementing interactive features with JavaScript, including form validation, dynamic content updates, and event-driven web functionality.',
      icon: 'JS'
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My Technical Experience</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-row">
              <div className="skill-icon">
                <div style={{ background: 'transparent', color: 'var(--primary)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', border: '2px solid var(--primary)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  {skill.icon}
                </div>
              </div>
              <div className="skill-details">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
