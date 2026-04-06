import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
          I'd love to hear from you! Fill out the form below.
        </p>
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5"></textarea>
            </div>
            <button type="button" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
