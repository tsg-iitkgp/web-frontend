import React, { useEffect, useRef } from "react";
import data from "../../data/apnaInstiData.json";
import "./apnaInsti.css";

export default function ApnaInstiPage({ downloadUrl = "" }) {
  const featuresRef = useRef(null);
  const upcomingRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add("dark-mode");
  }, []);

  useEffect(() => {
    const grids = [featuresRef.current, upcomingRef.current].filter(Boolean);
    if (grids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );

    grids.forEach((el) => observer.observe(el));
    return () => {
      grids.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const handleDownload = () => {
    if (downloadUrl) {
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.setAttribute("download", "");
      a.click();
      return;
    }
    const content = "This is a placeholder file. Replace with a real download URL for your app.";
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
    return (
      <div
        className={`feature-card`}
        style={{
          transitionDelay: `${index * 80}ms`
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
      <div className="stars-medium" aria-hidden="true" />
      <div className="stars-large" aria-hidden="true" />
      <div className="nebula" aria-hidden="true" />
      <header className="ai-header">
        <div className="brand">
          <div className="logo">
            <img src={data.brand.logo} alt={`${data.brand.name} logo`} />
          </div>
          <div className="brand-text">{data.brand.name}</div>
        </div>

        <nav className="ai-nav" aria-label="Main navigation">
          <div className="nav-buttons" role="group" aria-label="Site actions">
            <button
              className="pill primary"
              onClick={handleDownload}
              aria-label="Download the app"
              title="Download the app"
            >
              Download
            </button>
          </div>
        </nav>
      </header>

      <main className="ai-main">
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
              <div className="orbit" aria-hidden="true"></div>
              <div className="grid-glow" aria-hidden="true"></div>
              <div className="phone-mock image-mode">
                <img src={data.hero.previewImage} alt="App preview" />
              </div>

              <div className="phone-shadow" aria-hidden></div>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-head">
            <h2>Current Features</h2>
          </div>
          <div className="grid" ref={featuresRef}>
            {data.currentFeatures.map((f, i) => (
              <Card key={i} {...f} index={i} />
            ))}
          </div>
        </section>

        <section id="upcoming" className="section">
          <div className="section-head">
            <h2>Coming Soon</h2>
          </div>
          <div className="grid" ref={upcomingRef}>
            {data.upcomingFeatures.map((f, i) => (
              <Card key={i} {...f} index={i + 3} />
            ))}
          </div>
        </section>

        <footer className="ai-footer">
          <span className="footer-text">Made with ❤️ by Developers' Society</span>
        </footer>
      </main>
    </div>
  );
}

export const ApnaInsti = ApnaInstiPage;