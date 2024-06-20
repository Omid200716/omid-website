import React from 'react';

function ProjectList() {
  const projects = [
    { name: 'Projekt 1', description: 'Beskrivning av projekt 1' },
    { name: 'Projekt 2', description: 'Beskrivning av projekt 2' },
    // Lägg till fler projekt som behövs
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
