// src/pages/RegionsPage.jsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Regions from "../components/Regions";    

function RegionsPage() {
    return (
        <div className="App">
            <Header />
            <main className="app-content">
                {/* components go here */}
                <Regions />
            </main>
            <Footer />
        </div>
    );
}