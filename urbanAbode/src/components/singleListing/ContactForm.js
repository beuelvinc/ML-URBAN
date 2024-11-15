import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h3 className="text-primary heading-listing">Contact us</h3>
      <div className="form-field">
        <label className="contactForm-label">Full name</label>
        <input
          className="contactForm-input"
          type="text"
          placeholder="Your full name"
        />
      </div>
      <div className="form-field">
        <label className="contactForm-label">Phone number</label>
        <input
          className="contactForm-input"
          type="text"
          placeholder="Your phone number"
        />
      </div>
      <div className="form-field">
        <label className="contactForm-label">E-mail</label>
        <input
          className="contactForm-input"
          type="text"
          placeholder="Your E-mail"
        />
      </div>
      <div className="form-field">
        <label className="contactForm-label">Your Message</label>
        <textarea
          rows="10"
          cols="50"
          className="contactForm-input"
          type="text"
          placeholder="Your Message"
        ></textarea>
      </div>
      <div className="checkbox-container">
        <input className="check-input" type="checkbox" />
        <span className="warning">
          I agree to the processing of personal data.
        </span>
      </div>
      <button className="secondary-btn btn-contact-form">Send Message</button>
    </div>
  );
};

export default ContactForm;
