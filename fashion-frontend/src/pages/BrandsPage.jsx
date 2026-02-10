import React, { useEffect, useState } from "react";
import BrandCard from "../components/BrandCard";
import Footer from "../components/Footer";
import "./BrandsPage.css";

export default function BrandsPage() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/brands")
      .then(res => res.json())
      .then(data => {
        setBrands(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="brands-page">
        <div className="loading-container">
          <div className="glass-card loading-card">
            <div className="spinner"></div>
            <p className="loading-text">Discovering Brands...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!brands || brands.length === 0) {
    return (
      <div className="brands-page">
        <div className="loading-container">
          <div className="glass-card empty-card">
            <p className="empty-text">No brands found</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="brands-page">
      {/* Hero Header */}
      <div className="page-header">
        <div className="glass-card header-glass">
          <h1 className="page-title">Luxury Brands</h1>
          <p className="page-subtitle">
            Discover our curated selection of the world's most prestigious fashion houses
          </p>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="brands-container">
        <div className="brands-grid">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}