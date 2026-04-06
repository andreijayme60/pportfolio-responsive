import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAbout = () => setIsExpanded(!isExpanded);

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header-toggle" onClick={toggleAbout}>
          <h2 className="section-title">About Me</h2>
          <button className="toggle-btn-icon">
            {isExpanded ? '▲' : '▼'}
          </button>
        </div>

        {isExpanded && (
          <div className="about-content">
            <div className="about-box">
              <p>
                Hello! I'm <strong>John Andrei Jayme</strong>, a web developer and designer dedicated to building clean, user-friendly digital experiences.
              </p>
            </div>
            <div className="about-box">
              <p>
                I enjoy creating modern, responsive websites that combine clean design with smooth functionality. My goal is to deliver work that is both visually appealing and easy to use.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
