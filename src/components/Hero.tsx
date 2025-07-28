'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSmallImageIndex, setCurrentSmallImageIndex] = useState(0);
  
  const heroImages = [
    '/assets/hero/hero_1.jpg',
    '/assets/hero/hero_2.jpg',
    '/assets/hero/hero_3.jpg'
  ];

  const heroSmallImages = [
    '/assets/hero/hero_small_1.jpg',
    '/assets/hero/hero_small_2.jpg',
    '/assets/hero/hero_small_3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSmallImageIndex((prevIndex) => (prevIndex + 1) % heroSmallImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSmallImages.length]);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden z-0">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image 
              src={image} 
              alt={`Hero Background ${index + 1}`} 
              fill 
              className="object-cover" 
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-blue-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Fast, Reliable, and Efficient Delivery Solutions Across UAE
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                Alburaq Cargo LLC delivers excellence in logistics with cutting-edge technology and unwavering commitment to customer satisfaction.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg">
                  SEND AND MANAGE YOUR SHIPMENT
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg">
                  Join Our Team
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-blue-100 text-sm sm:text-base">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-blue-100 text-sm sm:text-base">Shipments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-100 text-sm sm:text-base">Service</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Small Image Carousel */}
            <div className="animate-slide-in-right mt-8 lg:mt-0">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
                  <div className="relative w-full h-64 sm:h-80">
                    {heroSmallImages.map((image, index) => (
                      <div 
                        key={index} 
                        className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
                          index === currentSmallImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image 
                          src={image} 
                          alt={`Hero Small ${index + 1}`} 
                          fill 
                          className="object-cover rounded-xl" 
                          priority={index === 0}
                        />
                      </div>
                    ))}
                    {/* Text Overlay */}
                    <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">Delivery Excellence</h3>
                        <p className="text-blue-100 text-sm sm:text-base">Fast, secure, and reliable delivery across UAE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 