import React from 'react';

function ContactForm() {
  return (
    <section className="contact-section">
      <h2>Connect With Me</h2>
      <p>I'm thrilled that you've made it to this part of my portfolio. Whether you have a project in mind, a question to ask, or just want to say hi, I'm all ears (virtually speaking, of course). Your thoughts and ideas matter to me.</p>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;
