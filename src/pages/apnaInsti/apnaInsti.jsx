// src/pages/apnaInsti/apnaInsti.jsx
import React, { useState, useEffect } from "react";
import data from "../../data/apnaInstiData.json";
import "./apnaInsti.css";

export default function ApnaInstiPage({ downloadUrl = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownload = () => {
    if (downloadUrl) {
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.setAttribute("download", "");
      a.click();
      return;
    }
    const content =
      "This is a placeholder file. Replace with a real download URL for your app.";
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-app.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const Card = ({ title, desc, icon, color, index }) => {
    const px = (mousePosition.x / (window.innerWidth || 1) - 0.5) * 6;
    const py = (mousePosition.y / (window.innerHeight || 1) - 0.5) * 6;
    return (
      <div
        className={`feature-card ${isVisible ? "visible" : ""}`}
        style={{
          transitionDelay: `${index * 80}ms`,
          transform: `rotateX(${py}deg) rotateY(${px}deg)`
        }}
      >
        <div className={`icon ${color}`}>
          <span aria-hidden>{icon}</span>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{desc}</p>
      </div>
    );
  };

  return (
    <div className="ai-root">
      <header className="ai-header">
        <div className="brand">
          <div className="logo">
            <img src={data.brand.logo} alt={`${data.brand.name} logo`} />
          </div>
          <div className="brand-text">{data.brand.name}</div>
        </div>

        <nav className="ai-nav">
          <a href="#features">Features</a>
          <a href="#upcoming">Upcoming</a>
          <button className="download-btn large" onClick={handleDownload}>
            Download
          </button>
        </nav>
      </header>

      <main className="ai-main">
        {/* HERO */}
        <section className="hero">
          <div className="hero-left">
            <div className="hero-content">
              <h1 className="hero-title">
                {data.hero.title}
                <span className="hero-sub">
                  {data.hero.subtitle.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </h1>

              <div className="hero-ctas">
                <button className="cta-primary large" onClick={handleDownload}>
                  {data.hero.buttonText}
                </button>
              </div>

              <div className="meta">
                <span className="meta-item">{data.hero.meta}</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="phone-stage">
              <div className="phone-mock image-mode">
                <img src={data.hero.previewImage} alt="App preview" />
              </div>

              {/* dedicated sibling element for the shadow directly under the mobile */}
              <div className="phone-shadow" aria-hidden></div>

              <div className="phone-note">Live preview</div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-head">
            <h2>Current Features</h2>
          </div>
          <div className="grid">
            {data.currentFeatures.map((f, i) => (
              <Card key={i} {...f} index={i} />
            ))}
          </div>
        </section>

        <section id="upcoming" className="section">
          <div className="section-head">
            <h2>Coming Soon</h2>
          </div>
          <div className="grid">
            {data.upcomingFeatures.map((f, i) => (
              <Card key={i} {...f} index={i + 3} />
            ))}
          </div>
        </section>

        <footer className="ai-footer">
          <div>{data.footer.text}</div>
        </footer>
      </main>
    </div>
  );
}

export const ApnaInsti = ApnaInstiPage;
