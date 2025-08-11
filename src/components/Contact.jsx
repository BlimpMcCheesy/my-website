import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just simulate submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-paragraph">
        Looking for new projects or collaborations? Feel free to get in touch! Whether you have a question, want to discuss a potential partnership, or need help with a project, I’m always open to exciting work opportunities. Let’s connect and create something great together.
      </p>
      <p className="contact-description">You can reach me at <a href="mailto:kw.kylewhitman@gmail.com" className="contact-email">kw.kylewhitman@gmail.com</a></p>

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="contact-textarea"
            rows="5"
          />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      ) : (
        <p className="thank-you-message">Thank you for reaching out! I'll get back to you soon.</p>
      )}
    </div>
  );
};

export default Contact;
