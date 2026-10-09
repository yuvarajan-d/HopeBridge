
import { useState } from "react";

function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSuccessMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!/^[A-Za-z ]{2,50}$/.test(formData.name.trim())) {
      alert("Please enter a valid name using letters and spaces.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!formData.interest) {
      alert("Please select an area where you would like to help.");
      return;
    }

    // Frontend demonstration only. No data is sent to a server.
    setSuccessMessage(
      `Thank you, ${formData.name.trim()}! Your demo registration is complete.`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  }

  return (
    <section className="volunteer-section" id="volunteer">
      <div className="volunteer-container">
        <div className="volunteer-info">
          <p className="eyebrow">BECOME A VOLUNTEER</p>

          <h2>
            Be Someone's
            <br />
            <span>Reason to Smile.</span>
          </h2>

          <p className="volunteer-description">
            You don't need to change the whole world.
            Sometimes, changing one person's world is enough.
            Share your time, skills, and kindness with our community.
          </p>

          <div className="volunteer-benefit">
            <span>♥</span>
            <div>
              <h3>Make a Difference</h3>
              <p>Support meaningful community initiatives.</p>
            </div>
          </div>

          <div className="volunteer-benefit">
            <span>♥</span>
            <div>
              <h3>Share Your Skills</h3>
              <p>Help with education, food, events, and more.</p>
            </div>
          </div>

          <div className="volunteer-benefit">
            <span>♥</span>
            <div>
              <h3>Spread Hope</h3>
              <p>Be part of a community that cares.</p>
            </div>
          </div>
        </div>

        <form className="volunteer-form" onSubmit={handleSubmit}>
          <h3>Join Our Volunteer Team</h3>
          <p>Fill in your details to get started.</p>

          <label htmlFor="volunteer-name">Full Name</label>
          <input
            id="volunteer-name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            minLength={2}
            maxLength={50}
            pattern="[A-Za-z ]{2,50}"
            title="Use letters and spaces only"
            autoComplete="name"
            required
          />

          <label htmlFor="volunteer-email">Email Address</label>
          <input
            id="volunteer-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <label htmlFor="volunteer-phone">Mobile Number</label>
          <input
            id="volunteer-phone"
            name="phone"
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            inputMode="numeric"
            autoComplete="tel"
            title="Enter a valid 10-digit Indian mobile number"
            required
          />

          <label htmlFor="volunteer-interest">Area of Interest</label>
          <select
            id="volunteer-interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="">Select an area</option>
            <option value="Education">Education</option>
            <option value="Food Distribution">Food Distribution</option>
            <option value="Healthcare">Healthcare Support</option>
            <option value="Environment">Environment</option>
            <option value="Event Management">Event Management</option>
          </select>

          <label htmlFor="volunteer-message">
            Why would you like to volunteer? (Optional)
          </label>
          <textarea
            id="volunteer-message"
            name="message"
            placeholder="Tell us a little about yourself..."
            value={formData.message}
            onChange={handleChange}
            rows={3}
            maxLength={300}
          />

          <button className="volunteer-submit" type="submit">
            Register as Volunteer →
          </button>

          {successMessage && (
            <p className="volunteer-success" role="status">
              {successMessage}
            </p>
          )}

          <p className="volunteer-demo-note">
            Demo form only. Your information is not sent or stored.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Volunteer;
