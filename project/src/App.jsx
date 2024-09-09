import React from 'react';
import './App.css';
import TabsWidget from '../Components/TabsWidget';
import GalleryWidget from '../Components/GalleryWidget';

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
