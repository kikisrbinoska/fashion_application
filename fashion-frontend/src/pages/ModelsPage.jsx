import React, { useEffect, useState } from "react";
import ModelCard from "../components/ModelCard";
import Footer from "../components/Footer";
import "./ModelsPage.css";

export default function ModelsPage() {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/models")
            .then((res) => res.json())
            .then((data) => {
                setModels(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="models-page">
                <div className="loading-container">
                    <div className="glass-card loading-card">
                        <div className="spinner"></div>
                        <p className="loading-text">Discovering Models...</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!models || models.length === 0) {
        return (
            <div className="models-page">
                <div className="loading-container">
                    <div className="glass-card empty-card">
                        <p className="empty-text">No models found</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="models-page">
            {/* Hero Header */}
            <div className="page-header">
                <div className="glass-card header-glass">
                    <h1 className="page-title">Top Models</h1>
                    <p className="page-subtitle">
                        Meet the faces that define modern fashion and set global trends
                    </p>
                </div>
            </div>

            {/* Models Grid */}
            <div className="models-container">
                <div className="models-grid">
                    {models.map((model) => (
                        <ModelCard key={model.id} model={model} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
