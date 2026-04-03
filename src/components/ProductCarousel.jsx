import { useState } from "react";

const products = [
  {
    id: 1,
    img: "src/assets/yellow-sofa.png",
  },
  {
    id: 2,
    img: "src/assets/gray-chair.png",
  },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full px-10 lg:px-0 lg:w-140!">

      <div className="relative">
        <img
          src={products[currentIndex].img}
          alt={`product ${currentIndex}`}
          className="w-150! h-100! object-cover"
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

      {/* Thumbnail Görseller */}
      <div className="flex gap-2 mt-4 justify-start">
        {products.map((product, index) => (
          <img
            key={product.id}
            src={product.img}
            alt={`thumb ${index}`}
            onClick={() => selectSlide(index)}
            className={`w-20 h-20 object-cover cursor-pointer border-2 ${
              index === currentIndex ? "border-gray-300" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;