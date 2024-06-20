import React from 'react';
import ProjectList from './ProjectList';
import omidImage from '../images/omid.jpg'; 
import ContactForm from '../komponenter/Contact';
import KnowledgeSection from '../komponenter/KnowledgeSection';
import InnovativeSolutions from '../komponenter/InnovativeSolutions';



function HomePage() {
  return (
    <div className="homepage">
    <div className="navigation">
      <a href="#about">Om Mig</a>
      <a href="#knowledge">Kunskap</a>
      <a href="#projects">Projekter</a>
      <a href="#contact">Kontakta</a>
    </div>

    
    <section id="about" className="about-section">
    <div className="main-section">
      <div className="content">
        <h1>Code and Design, I Make Ideas Real.</h1>
        <p>Discover my expertise in React.js and web development through my latest projects.</p>
        <div className="buttons">
          <button>Resume</button>
          <button>Contact</button>
        </div>
      </div>
      <img src={omidImage} alt="Profile" className="profile-image" />
    </div>
      </section>
    <section id="about" className="section">

   
      <InnovativeSolutions/>
    </section>
    <section id="knowledge" className="section">
      <h1>Kunskap</h1>
      <p>Här är information om mina kunskaper...</p>
      <KnowledgeSection />
    </section>
    <section id="projects" className="section">
      <h1>Projekter</h1>
      <p>Här är några av mina projekt...</p>
    </section>
    <section id="contact" className="section">
      <h1>Kontakta</h1>
      <ContactForm />
      <p>Här är mitt kontaktformulär...</p>
    </section>
  </div>
  );
}

export default HomePage;
