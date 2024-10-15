'use client'
import { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const products = [
  { id: 1, name: 'Drone X1', img: '/drone1.png', description: 'High-tech drone with 4K camera.' },
  { id: 2, name: 'Drone Y2', img: '/drone2.png', description: 'Lightweight drone, long battery life.' },
  { id: 3, name: 'Drone Z3', img: '/drone3.png', description: 'Fast speed, equipped with GPS tracking.' },
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % products.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + products.length) % products.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-lg md:max-w-4xl mx-auto bg-gray-800 h-full rounded-lg shadow-lg p-8">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.map((product) => (
            <div key={product.id} className="min-w-full flex flex-col items-center">
            <img
              src={product.img} alt={product.name} className="h-96 md:h-96 w-full object-cover rounded-lg" />
              <h3 className="text-xl md:text-2xl font-semibold mt-4 text-lightGrey">{product.name}</h3>
              <p className="text-sm md:text-base text-lightGrey">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute ml-2 left-0 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl p-2 bg-darkGrey text-lightGrey rounded-full shadow-lg">
        <FiChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute mr-2 right-0 top-1/2 transform -translate-y-1/2 text-2xl md:text-3xl p-2 bg-darkGrey text-lightGrey rounded-full shadow-lg">
        <FiChevronRight />
      </button>
    </div>
  );
}
