import React from 'react';
import './App.css';
import TabsWidget from './components/TabsWidget';
import GalleryWidget from './components/GalleryWidget';

function App() {
  return (
    <div className="container">
      {/* Left Side: Empty but responsive */}
      <div className="left-side"></div>

      {/* Right Side: Widgets */}
      <div className="right-side">
        <TabsWidget />
        <GalleryWidget />
      </div>
    </div>
  );
}

export default App;
