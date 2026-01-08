import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  autoPlayInterval?: number;
  title: string;
  objectFit?: 'cover' | 'contain';
}

export function ImageCarousel({ images, autoPlayInterval = 5000, title, objectFit = 'cover' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full group">
      {/* Images */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${title} - Image ${index + 1}`}
              className={`w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            />
          </div>
        ))}
        {objectFit === 'cover' && <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>}
      </div>

      {/* Navigation Buttons - Only show if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 md:p-2 rounded-full transition-all opacity-70 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Image précédente"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-1.5 md:p-2 rounded-full transition-all opacity-70 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Image suivante"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6 md:w-8'
                    : 'bg-white/50 hover:bg-white/75 w-2'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
