import React from "react";
import "./OutfitCard.css";

const DEFAULT_OUTFIT_IMAGES = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop",
];

function getDefaultImage(id) {
    const index = typeof id === "number" ? id : String(id).charCodeAt(0) || 0;
    return DEFAULT_OUTFIT_IMAGES[index % DEFAULT_OUTFIT_IMAGES.length];
}

export default function OutfitCard({ outfit }) {
    const imageUrl = outfit.imageUrl || getDefaultImage(outfit.id);

    return (
        <div className="outfit-card glass-card">
            <div className="outfit-image-wrapper">
                <img src={imageUrl} alt={outfit.name} className="outfit-image" />
                <div className="outfit-overlay"></div>
            </div>
            <div className="outfit-info">
                <h3 className="outfit-name">{outfit.name}</h3>
                <p className="outfit-description">{outfit.description}</p>
                <div className="outfit-details">
                    <div className="detail-item">
                        <span className="detail-label">Season:</span>
                        <span className="detail-value">{outfit.season}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Style:</span>
                        <span className="detail-value">{outfit.style}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Category:</span>
                        <span className="detail-value">{outfit.category}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
