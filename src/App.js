import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import RegionsPage from "./pages/RegionsPage";
import ArticlePage from "./pages/ArticlePage";
import Article from "./templates/Article";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app-content">
        {/* components go here */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/regions" element={<RegionsPage />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;

