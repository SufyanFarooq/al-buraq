'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Brands = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const brands = [
    { id: 1, name: "Aster", logo: "/assets/brands/aster.png" },
    { id: 2, name: "Blooming Box", logo: "/assets/brands/blooming-box.png" },
    { id: 3, name: "Careem", logo: "/assets/brands/careem.png" },
    { id: 4, name: "Carrefour", logo: "/assets/brands/carrefour.png" },
    { id: 5, name: "Deliveroo", logo: "/assets/brands/deliveroo.png" },
    { id: 6, name: "FNP", logo: "/assets/brands/fnp.png" },
    { id: 7, name: "Instashop", logo: "/assets/brands/instashop.png" },
    { id: 8, name: "Noon", logo: "/assets/brands/noon.png" },
    { id: 9, name: "Noon Minutes", logo: "/assets/brands/noon-minutes.png" },
    { id: 10, name: "Now Now App", logo: "/assets/brands/now-now-app.png" },
    { id: 11, name: "Porter", logo: "/assets/brands/porter.png" },
    { id: 12, name: "Talabat", logo: "/assets/brands/talabat.png" }
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Brands We Work With
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Behind every successful vendor is a logistics partner that ensures timely delivery, 
            accurate fulfillment, and operational efficiency—helping businesses meet demand, 
            build trust, and grow stronger with every shipment delivered right.
          </p>
        </div>

        {/* Brands Carousel with Swiper */}
        <div className="relative px-12">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="brands-swiper"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.id} style={{ width: '200px' }}>
                <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center justify-center h-32">
                    <div className="text-center">
                        <Image
                          src={brand.logo}
                          alt={`${brand.name} Logo`}
                          fill
                          className="object-contain"
                        />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h3>
            <p className="text-gray-600 mb-6">
              We partner with top food brands and aggregators across the UAE, providing 
              reliable delivery services that help businesses scale and succeed. Our 
              commitment to excellence has made us a preferred choice for companies 
              looking to enhance their delivery experience.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-handshake mr-2"></i>
              Become Our Partner
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .brands-swiper .swiper-button-next,
        .brands-swiper .swiper-button-prev {
          background-size: 20px;
          background-position: center;
        }
        
        .brands-swiper .swiper-button-next:after,
        .brands-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }

        .brands-swiper .swiper-slide {
          width: 200px !important;
        }
      `}</style>
    </section>
  );
};

export default Brands; 