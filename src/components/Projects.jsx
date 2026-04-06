import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React, showcasing my skills and projects.',
      image: './src/assets/images/image.png',
      link: '#'
    },
    {
      title: 'AwesomeTodos project',
      description: 'A responsive portfolio website built with React, showcasing my skills and projects.',
      image: './src/assets/images/image copy.png',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-light)' }}>
          Here are some of my recent projects. Click on the links to see more details.
        </p>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
