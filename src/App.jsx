import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Aside from './components/Aside';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Aside />
      <Content />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
