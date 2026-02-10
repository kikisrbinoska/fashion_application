import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section with Glassmorphic Overlay */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="glass-card hero-glass">
            <h1 className="hero-title">Welcome to Our Fashion Magazine</h1>
            <p className="hero-subtitle">
              If you are a fashionista, this is the right place for you
            </p>
            <p className="hero-description">
              Deep dive into the world of fashion, discover exclusive brands,
              meet iconic models, and explore stunning outfits
            </p>
            <div className="hero-cta">
              <Link to="/brands" className="glass-button">
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="features-section">
        <div className="features-grid">
          <Link to="/brands" className="feature-card glass-card">
            <div className="feature-icon">👗</div>
            <h3 className="feature-title">Luxury Brands</h3>
            <p className="feature-description">
              Discover the world's most prestigious fashion houses and their iconic collections
            </p>
            <span className="feature-link">Explore Brands →</span>
          </Link>

          <Link to="/models" className="feature-card glass-card">
            <div className="feature-icon">💃</div>
            <h3 className="feature-title">Top Models</h3>
            <p className="feature-description">
              Meet the faces that define modern fashion and beauty standards worldwide
            </p>
            <span className="feature-link">Meet Models →</span>
          </Link>

          <Link to="/outfits" className="feature-card glass-card">
            <div className="feature-icon">✨</div>
            <h3 className="feature-title">Trending Outfits</h3>
            <p className="feature-description">
              Get inspired by the latest trends and curated looks for every occasion
            </p>
            <span className="feature-link">View Outfits →</span>
          </Link>
        </div>
      </section>

      {/* Magazine Quote Section */}
      <section className="quote-section">
        <div className="glass-card quote-glass">
          <blockquote className="quote-text">
            "Fashion is not something that exists in dresses only. Fashion is in the sky, in the street; fashion has to do with ideas, the way we live, what is happening."
          </blockquote>
          <cite className="quote-author">— Audrey Hepburn</cite>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="glass-card cta-glass">
          <h2 className="cta-title">Join Our Fashion Community</h2>
          <p className="cta-description">
            Stay updated with the latest trends, exclusive content, and fashion insights
          </p>
          <div className="cta-buttons">
            <Link to="/brands" className="glass-button primary">
              Start Exploring
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
