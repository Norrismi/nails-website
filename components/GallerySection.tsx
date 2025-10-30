import React, { useState, useCallback, useMemo } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';
import Lightbox from './Lightbox';

const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'manicure' | 'pedicure' | 'nailart'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (filter === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((image) => image.category === filter);
  }, [filter]);

  const openLightbox = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateLightbox = useCallback(
    (direction: 'prev' | 'next') => {
      if (!selectedImage) return;

      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
      let newIndex = currentIndex;

      if (direction === 'prev') {
        newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      } else {
        newIndex = (currentIndex + 1) % filteredImages.length;
      }
      setSelectedImage(filteredImages[newIndex]);
    },
    [selectedImage, filteredImages]
  );

  return (
    <section
      id="gallery"
      className="py-16 bg-lightBg dark:bg-darkBg transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-playfair font-bold text-center mb-10 text-primaryDark dark:text-primary-400">
          Our Gallery
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {(['all', 'manicure', 'pedicure', 'nailart'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize ${
                filter === tab
                  ? 'bg-primary dark:bg-primary-500 text-white shadow-md'
                  : 'bg-white dark:bg-dark-card text-primaryDark dark:text-dark-text hover:bg-primary-50 dark:hover:bg-primary-900/30'
              }`}
            >
              {tab === 'all' ? 'All' : tab === 'manicure' ? 'Manicures' : tab === 'pedicure' ? 'Pedicures' : 'Nail Art'}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-semibold drop-shadow-md">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        image={selectedImage}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </section>
  );
};

export default GallerySection;