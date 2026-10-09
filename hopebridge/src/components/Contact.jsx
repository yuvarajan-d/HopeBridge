
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="contact-section" id="contact-us">
      <div className="contact-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>We'd Love to <span>Hear From You</span></h2>
        <p>
          Have a question or want to work with us?
          Send us a message.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Your ideas, questions, and support can help us
            build stronger communities.
          </p>

          <div className="contact-detail">
            <span>✉️</span>
            <div>
              <strong>Email</strong>
              <p>hopebridge@example.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>🤝</span>
            <div>
              <strong>Join Our Mission</strong>
              <p>Every helping hand makes a difference.</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">Email Address</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="contact-subject">Subject</label>
          <input
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is your message about?"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="5"
            required
          />

          <button type="submit" className="btn btn-primary">
            Send Message →
          </button>

          {submitted && (
            <p className="contact-success" role="status">
              Thank you! Your demo message has been submitted.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
