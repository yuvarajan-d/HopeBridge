
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Volunteer from "./components/Volunteer";
import Donation from "./components/Donation";
import ProgramCard from "./components/ProgramCard";
import ImpactStats from "./components/ImpactStats";
import "./App.css";

function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowTopButton(window.scrollY > 300);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="logo">
          Hope<span>Bridge</span>
          <span className="logo-heart">♥</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Our Causes</a>
          <a href="#impact" onClick={() => setMenuOpen(false)}>Our Impact</a>
          <a href="#contact-us" onClick={() => setMenuOpen(false)}>
  Contact
</a>
        </nav>

        <a href="#donate" className="nav-donate">
          Donate Now ♥
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              TOGETHER, WE CAN MAKE A DIFFERENCE
            </p>

            <h1>
              Small Acts.
              <br />
              <span>Big Changes.</span>
            </h1>

            <p className="hero-description">
              Every helping hand brings hope to someone in need.
              Join our mission to create a kinder, healthier, and
              brighter future for every community.
            </p>

            <div className="hero-buttons">
              <a href="#donate" className="btn btn-primary">
                Donate Today <span>♥</span>
              </a>

              <a href="#about" className="btn btn-secondary">
                Discover Our Mission →
              </a>
            </div>

            <div className="hero-note">
              <span className="note-icon">♥</span>
              <p>
                <strong>Every contribution matters.</strong>
                <br />
                Together, hope grows stronger.
              </p>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=85"
              alt="Volunteers supporting children in a community"
            />

            <div className="image-badge">
              <span className="badge-heart">♥</span>
              <div>
                <strong>Spread Kindness</strong>
                <p>Change a life today</p>
              </div>
            </div>

            <div className="decorative-circle"></div>
          </div>
        </section>

        <section className="welcome-strip" id="about">
          <p>
            <span>♥</span> Every child deserves a brighter tomorrow.
          </p>
          <p>
            <span>♥</span> Every community deserves a helping hand.
          </p>
          <p>
            <span>♥</span> Every act of kindness creates hope.
          </p>
        </section>

        
<section className="about-section">
  <div className="about-image">
    <img
      src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=85"
      alt="Volunteers working together to support their community"
    />
    <div className="about-image-note">
      <span>♥</span>
      <p>Kindness creates lasting change.</p>
    </div>
  </div>

  <div className="about-content">
    <p className="eyebrow">GET TO KNOW US</p>
    <h2>
      We Believe Every Act of Kindness <span>Matters</span>
    </h2>
    <p>
      At HopeBridge, we believe everyone deserves access to food,
      education, clean water, and opportunities for a better life.
    </p>
    <p>
      Our mission is to connect people who want to help with
      communities that need support. Together, we can turn
      compassion into meaningful action.
    </p>

    <div className="about-points">
      <p>♥ Supporting children and families</p>
      <p>♥ Promoting education and wellbeing</p>
      <p>♥ Building stronger communities</p>
    </div>

    <a href="#programs" className="btn btn-primary">
      Explore Our Causes →
    </a>
  </div>
</section>


        
<section className="programs-section" id="programs">
  <div className="section-heading">
    <p className="eyebrow">WHERE YOUR HELP GOES</p>
    <h2>
      Causes That Need <span>Your Heart</span>
    </h2>
    <p>
      Every act of kindness brings us closer to a world where
      everyone has the chance to live a better life.
    </p>
  </div>

  <div className="program-grid">
    <ProgramCard
      image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
      category="Child Welfare"
      title="Food for All"
      description="Help provide nutritious meals and essential food supplies to children and families."
      raised={35000}
      goal={50000}
    />

    <ProgramCard
      image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
      category="Education"
      title="Education for Every Child"
      description="Give children access to learning materials, school supplies, and better opportunities."
      raised={42000}
      goal={60000}
    />

    <ProgramCard
      image="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80"
      category="Basic Needs"
      title="Clean Water for Communities"
      description="Support community initiatives that improve access to clean and safe drinking water."
      raised={24000}
      goal={40000}
    />
  </div>
</section>


        <ImpactStats />

       <Donation />
       <Volunteer />
       <Contact />
      
<footer className="footer" id="contact">
  <div className="footer-container">
    <div className="footer-about">
      <h2>Hope<span>Bridge</span></h2>
      <p>
        Building a better tomorrow by connecting kind hearts
        with communities that need support.
      </p>
      <p className="footer-tagline">
        Small acts. Big changes. Better futures.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#programs">Our Causes</a>
      <a href="#impact">Our Impact</a>
      <a href="#donate">Donate</a>
    </div>

    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>✉️ hopebridge@example.com</p>
      <p>📍 Chennai, Tamil Nadu, India</p>
      <p>🤝 Join us in making a difference.</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} HopeBridge. Made with care for a better world.
    </p>
  </div>
</footer>
{showTopButton && (
  <button
    className="back-to-top"
    onClick={() =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    aria-label="Back to top"
  >
    ↑
  </button>
)}

      </main>
    </div>
  );
}

export default App;
