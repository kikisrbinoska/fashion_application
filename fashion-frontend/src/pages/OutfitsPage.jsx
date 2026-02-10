import React, { useEffect, useState } from "react";
import OutfitCard from "../components/OutfitsCard";
import Footer from "../components/Footer";
import "./OutfitsPage.css";

export default function OutfitsPage() {
    const [outfits, setOutfits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/outfits")
            .then((res) => res.json())
            .then((data) => {
                setOutfits(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="outfits-page">
                <div className="loading-container">
                    <div className="glass-card loading-card">
                        <div className="spinner"></div>
                        <p className="loading-text">Curating Outfits...</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!outfits || outfits.length === 0) {
        return (
            <div className="outfits-page">
                <div className="loading-container">
                    <div className="glass-card empty-card">
                        <p className="empty-text">No outfits found</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="outfits-page">
            {/* Hero Header */}
            <div className="page-header">
                <div className="glass-card header-glass">
                    <h1 className="page-title">Trending Outfits</h1>
                    <p className="page-subtitle">
                        Explore curated looks and get inspired by the latest fashion trends
                    </p>
                </div>
            </div>

            {/* Outfits Grid */}
            <div className="outfits-container">
                <div className="outfits-grid">
                    {outfits.map((outfit) => (
                        <OutfitCard key={outfit.id} outfit={outfit} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
