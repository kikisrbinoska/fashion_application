import React from "react";
import "./ModelCard.css";

const DEFAULT_MODEL_IMAGES = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=800&fit=crop",
];

function getDefaultImage(id) {
    const index = typeof id === "number" ? id : String(id).charCodeAt(0) || 0;
    return DEFAULT_MODEL_IMAGES[index % DEFAULT_MODEL_IMAGES.length];
}

export default function ModelCard({ model }) {
    const imageUrl = model.imageUrl || getDefaultImage(model.id);

    return (
        <div className="model-card glass-card">
            <div className="model-image-wrapper">
                <img src={imageUrl} alt={model.name} className="model-image" />
                <div className="model-overlay"></div>
            </div>
            <div className="model-info">
                <h3 className="model-name">{model.name}</h3>
                <p className="model-height">
                    <span className="label">Height:</span> {model.height}
                </p>
                <p className="model-bio">{model.bio}</p>
            </div>
        </div>
    );
}
