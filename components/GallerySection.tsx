
import React, { useState, useCallback, useMemo } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';
import Lightbox from './Lightbox';

const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'manicure' | 'pedicure' | 'nailart'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (filter === 'all') {
      return GALLERY_IMAGES;
    }
    return GALLERY_IMAGES.filter((image) => image.category === filter);
  }, [filter]);

  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateLightbox = useCallback((direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentImageIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    let newIndex = currentImageIndex;

    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    } else {
      newIndex = (currentImageIndex + 1) % filteredImages.length;
    }
    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

  return (
    <section id="gallery" className="py-16 bg-secondary dark:bg-secondaryDark transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center mb-10 text-primaryDark dark:text-accent">
          Our Gallery
        </h2>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-primary dark:bg-primaryLight text-white shadow-md'
                : 'bg-white dark:bg-darkBg text-primaryDark dark:text-darkText hover:bg-primaryLight/20 dark:hover:bg-primaryDark/50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('manicure')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'manicure'
                ? 'bg-primary dark:bg-primaryLight text-white shadow-md'
                : 'bg-white dark:bg-darkBg text-primaryDark dark:text-darkText hover:bg-primaryLight/20 dark:hover:bg-primaryDark/50'
            }`}
          >
            Manicures
          </button>
          <button
            onClick={() => setFilter('pedicure')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'pedicure'
                ? 'bg-primary dark:bg-primaryLight text-white shadow-md'
                : 'bg-white dark:bg-darkBg text-primaryDark dark:text-darkText hover:bg-primaryLight/20 dark:hover:bg-primaryDark/50'
            }`}
          >
            Pedicures
          </button>
          <button
            onClick={() => setFilter('nailart')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === 'nailart'
                ? 'bg-primary dark:bg-primaryLight text-white shadow-md'
                : 'bg-white dark:bg-darkBg text-primaryDark dark:text-darkText hover:bg-primaryLight/20 dark:hover:bg-primaryDark/50'
            }`}
          >
            Nail Art
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Lightbox image={selectedImage} onClose={closeLightbox} onNavigate={navigateLightbox} />
    </section>
  );
};

export default GallerySection;
