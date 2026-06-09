import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="app-content">
        {/* components go here */}
        <p>Edit <code>src/app.js</code> to start building.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

