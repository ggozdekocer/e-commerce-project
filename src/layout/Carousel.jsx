import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    bgImage: "./src/assets/carousel-item.png",
    desktopImg: "./src/assets/carousel-desktop.png",
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    text: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    bgImage: "./src/assets/carousel-item.png",
    desktopImg: "./src/assets/carousel-desktop.png",
    subtitle: "SUMMER 2020",
    title: "NEW COLLECTION",
    text: "We know how large objects will act, but things on a small scale.",
    buttonText: "EXPLORE",
  }
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <>
    <div className="relative w-full h-200 overflow-hidden lg:hidden">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="w-full h-full shrink-0 flex flex-col items-center justify-end pb-24 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          >
            <div className="relative z-10 text-center text-white">
              <button className="bg-[#2DC071] px-8 py-2 rounded-md font-bold text-xl uppercase hover:bg-[#27a863] transition-colors">
                {slide.buttonText}
              </button>
            </div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-300 ${current === i ? 'w-8 bg-white' : 'w-4 bg-white/40'}`}
          />
        ))}
      </div>

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



    <div className="hidden lg:block relative w-full h-200 overflow-hidden">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="w-full h-full shrink-0 flex flex-col items-center justify-end pb-24 relative bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.desktopImg})` }}
          >
            <div className="relative z-10 text-white flex flex-col items-start pb-30 gap-4">
              <p className='text-xl font-semibold pr-100'>{slide.subtitle}</p>
              <p className='text-7xl font-bold pr-100'>{slide.title}</p>
              <p className='text-2xl max-w-90 font-light'>{slide.text}</p>
              <button className="bg-[#2DC071] px-8 py-2 rounded-md font-semibold text-xl uppercase hover:bg-[#27a863] transition-colors">
                {slide.buttonText}
              </button>
            </div>
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-300 ${current === i ? 'w-8 bg-white' : 'w-4 bg-white/40'}`}
          />
        ))}
      </div>

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
    </>
  );
};

export default Carousel;