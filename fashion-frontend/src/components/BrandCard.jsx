import React from "react";
import "./BrandCard.css";

const DEFAULT_BRAND_IMAGES = [
    "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop",
];

function getDefaultImage(id) {
    const index = typeof id === "number" ? id : String(id).charCodeAt(0) || 0;
    return DEFAULT_BRAND_IMAGES[index % DEFAULT_BRAND_IMAGES.length];
}

export default function BrandCard({ brand }) {
    const logoUrl = brand.logoUrl || getDefaultImage(brand.id);

    return (
        <div className="brand-card glass-card">
            <div className="brand-image-wrapper">
                <img src={logoUrl} alt={brand.name} className="brand-logo" />
                <div className="brand-overlay"></div>
            </div>
            <div className="brand-info">
                <h3 className="brand-name">{brand.name}</h3>
                <p className="brand-country">{brand.country}</p>
                <p className="brand-description">{brand.description}</p>
            </div>
        </div>
    );
}
