import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BrandsPage from "./pages/BrandsPage";
import ModelsPage from "./pages/ModelsPage";
import OutfitsPage from "./pages/OutfitsPage";
import "./App.css";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/brands" element={<BrandsPage />} />
                <Route path="/models" element={<ModelsPage />} />
                <Route path="/outfits" element={<OutfitsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
