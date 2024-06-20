import React from 'react';

function KnowledgeSection() {
  const skills = [
    { name: "React", icon: "🔗" },
    { name: "Next.js", icon: "🔗" },
    { name: "HTML", icon: "✅" },
    { name: "CSS", icon: "✅" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "📜" },
    { name: "Java", icon: "🌐" },
    { name: "jQuery", icon: "🌐" },
    { name: "GitHub", icon: "🔍" },
    { name: "MySQL", icon: "🔍" },
    { name: "Express.js", icon: "🔀" },
    { name: "UX DESIGN", icon: "🔀" },
    { name: "Figma", icon: "📝" },
    { name: "Agile", icon: "📝" },
    { name: "REST API", icon: "📡" }
  ];

  return (
    <div className="knowledge-section">
      <h2>Knowledge</h2>
      <p>I am a fast learner who always seeks to improve and expand my knowledge. With proficiency in programming languages and a diverse skill set, I continuously strive to learn more and enhance my abilities.</p>
      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnowledgeSection;
