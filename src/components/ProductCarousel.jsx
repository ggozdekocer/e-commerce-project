import React, { useState } from "react";

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full px-10 lg:px-0 lg:w-140!">
      <div className="relative group">
        <img
          src={images[currentIndex]?.url}
          alt={`product-${currentIndex}`}
          className="w-150! h-100! object-cover rounded-sm shadow-sm"
        />

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all z-30"
        >
          <span className="text-[100px] font-light select-none">‹</span>
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all z-30"
        >
          <span className="text-[100px] font-light select-none">›</span>
        </button>
      </div>

      <div className="flex gap-2 mt-4 justify-start overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`thumb-${index}`}
            onClick={() => setCurrentIndex(index)}
            className={`w-20 h-20 object-cover cursor-pointer border-2 transition-all ${
              index === currentIndex ? "border-sky-500 opacity-100" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;