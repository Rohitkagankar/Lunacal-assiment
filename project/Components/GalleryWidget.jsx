import React, { useState } from 'react';
import './GalleryWidget.css';

const GalleryWidget = () => {
  const [images, setImages] = useState([
    'https://via.placeholder.com/80',
    'https://via.placeholder.com/80',
    'https://via.placeholder.com/80',
  ]);

  const addImage = () => {
    setImages([...images, 'https://via.placeholder.com/80']);
  };

  return (
    <div className="widget widget-gallery">
      <div className="gallery-header">
        <h3>Gallery</h3>
        <button className="add-image" onClick={addImage}>
          + Add Image
        </button>
      </div>
      <div className="gallery-images">
        {images.map((src, index) => (
          <img key={index} src={src} alt="Gallery" />
        ))}
      </div>
    </div>
  );
};

export default GalleryWidget;
