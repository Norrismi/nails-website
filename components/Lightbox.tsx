
import React, { useCallback } from 'react';
import { GalleryImage } from '../types';

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onNavigate }) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      onNavigate('prev');
    } else if (e.key === 'ArrowRight') {
      onNavigate('next');
    }
  }, [onClose, onNavigate]);

  React.useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, handleKeyDown]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-10 p-2 hover:text-primary transition-colors"
          aria-label="Close lightbox"
        >
          &times;
        </button>
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
        />
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity"
          aria-label="Previous image"
        >
          &lt;
        </button>
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-opacity"
          aria-label="Next image"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
