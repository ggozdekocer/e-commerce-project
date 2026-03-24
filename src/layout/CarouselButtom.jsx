import React, { useState } from 'react';

const slides = [
  {
    id: 1,
    img: "./src/assets/carousel.png",
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    text:"We know how large objects will act, but things on a small scale.",
    buttonText: "ADD TO CART",
    price: "$16.48"
  },
  {
    id: 2,
    img: "./src/assets/carousel.png",
    subtitle: "SUMMER 2020",
    title: "Vita Classic Product",
    text:"We know how large objects will act, but things on a small scale.",
    buttonText: "ADD TO CART",
    price: "$16.48"
  }
];

const CarouselButtom = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative w-full h-357.5 overflow-hidden bg-[#23856D] lg:h-180">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
      {slides.map((slide) => (
      <div key={slide.id} className="w-full h-full shrink-0 flex flex-col items-center relative bg-cover bg-center">

          <div className='lg:hidden text-center font-montressat text-white flex flex-col gap-4 px-10 pt-50'>
            <p className='text-2xl font-semibold'>{slide.subtitle}</p>
            <p className='text-5xl font-bold'>{slide.title}</p>
            <p className='text-3xl font-light'>{slide.text}</p>
            <p className="font-bold text-2xl">{slide.price}</p>
          </div>

        <div className="lg:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <button className="bg-[#2DC071] text-white px-8 py-3 rounded-lg! text-lg! font-bold uppercase hover:bg-[#27a863] transition-colors">
            {slide.buttonText}
          </button>
        </div>

        <img 
          src={slide.img}
          className="lg:hidden absolute w-full bottom-0 right-0"
        />


        <div className='hidden lg:flex justify-start font-montressat text-white flex-col gap-4 pr-180 pl-60 pt-50'>
            <p className='text-2xl font-semibold'>{slide.subtitle}</p>
            <p className='text-6xl font-bold'>{slide.title}</p>
            <p className='text-xl font-normal'>{slide.text}</p>
            <div className='flex flex-row justify-start items-center gap-4'>
              <p className="font-bold text-2xl pt-3">{slide.price}</p>
              <button className="bg-[#2DC071] text-white w-55 h-14 rounded-lg! text-lg! font-bold uppercase hover:bg-[#27a863] transition-colors">
                {slide.buttonText}
              </button>
            </div>
          
        </div>
        <img 
          src={slide.img}
          className="hidden lg:flex absolute w-99 bottom-0 right-30"
        />

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
  );
};

export default CarouselButtom;