import React, { useState } from 'react';
import './App.css';

const Logo = () => (
  <div className="logo">
    <div className="logo-icon">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
    <h1>stream<span>Sync</span></h1>
  </div>
);

const NavLink = ({ href, children }) => (
  <a href={href} className="nav-link">{children}</a>
);

const Button = ({ children, onClick, primary }) => (
  <button
    onClick={onClick}
    className={`button ${primary ? 'primary' : 'secondary'}`}
  >
    {children}
  </button>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    {children}
  </section>
);

const VideoCard = ({ title, videoUrl }) => (
  <div className="video-card">
    <h3>{title}</h3>
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

const App = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleDownload = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="app">
      <header>
        <div className="container">
          <Logo />
          <nav>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#demo">Demo</NavLink>
            <NavLink href="#download">Download</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <section id="hero" className="hero">
            <h2>Empower Your Live Streams with streamSync</h2>
            <p>Connect with your audience like never before</p>
            <Button primary onClick={() => document.getElementById('download').scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </section>

          <Section id="about" title="About streamSync">
            <p>
              streamSync is a powerful tool for content creators, streamers, and consultants who want to enhance their live streaming experience. It combines the best features of Twitter Spaces and Super Chat to create a unique platform for audience engagement.
            </p>
            <ul>
              <li>Create your personal wallet to receive Solana from your audience</li>
              <li>Prioritize interactions with top supporters</li>
              <li>Seamlessly integrate with your existing streaming setup</li>
            </ul>
          </Section>

          <Section id="demo" title="See streamSync in Action">
            <div className="video-grid">
              <VideoCard title="Project Overview" videoUrl="https://www.youtube.com/embed/NSDU34sEPKw" />
            </div>
          </Section>


          <Section id="download" title="Download streamSync">
            <p>Get started with streamSync by downloading our Chrome extension:</p>
            <Button primary onClick={handleDownload}>Download Extension</Button>
            <p>Want to contribute or learn more about the project?</p>
            <a
              href="https://github.com/rohitsx/streamSync"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Check out our GitHub repository
            </a>
          </Section>

          {showAlert && (
            <div className="alert">
              <h4>Download started!</h4>
              <p>Thank you for choosing streamSync. Your download should begin shortly.</p>
            </div>
          )}
        </div>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2024 streamSync. All rights reserved.</p>
          <a
            href="https://x.com/rohitsxx"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter-link"
          >
            Follow us on Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;