'use client';

import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Last Mile Delivery",
      description: "Count on us for last-mile delivery of temperature-sensitive goods—pharmaceuticals, food, cosmetics, and luxury retail—ensuring timely delivery, product integrity, and complete care under controlled conditions for your customers' satisfaction.",
      image: "/assets/services/last-mile-delivery.jpg",
      color: "blue"
    },
    {
      id: 2,
      title: "Supply Chain Mgmnt.",
      description: "Beyond delivery, we offer end-to-end supply chain services that reduce costs, improve operational visibility, enhance reliability, and drive long-term efficiency—empowering your business to achieve seamless, smart, and scalable logistics performance.",
      image: "/assets/services/Supply-Chain-Mgmnt.jpg",
      color: "amber"
    },
    {
      id: 3,
      title: "Leasing Solutions",
      description: "Ideal for businesses with non-asset-based strategies, we offer rapid recovery and 24-hour replacement support. Our efficient transportation of leased assets boosts workflow, ensures uptime, and supports smooth business continuity.",
      image: "/assets/services/supply-chain-solution.jpg",
      color: "green"
    },
    {
      id: 4,
      title: "Storage Facilities",
      description: "We're expanding with state-of-the-art storage facilities designed for flexibility, safety, and scalability—offering secure inventory management, temperature-controlled spaces, and seamless integration with our delivery network for smarter, faster fulfillment.",
      image: "/assets/services/Storage-Facilities.jpg",
      color: "purple",
      comingSoon: true
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100';
      case 'amber':
        return 'border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100';
      case 'green':
        return 'border-green-200 bg-gradient-to-br from-green-50 to-green-100';
      case 'purple':
        return 'border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100';
      default:
        return 'border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100';
    }
  };

  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Range of Services
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${getColorClasses(service.color)} animate-fade-in-up h-full flex flex-col`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="w-full h-40 sm:h-48 lg:h-52 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-start">
                  {service.title}
                  {service.comingSoon && (
                    <span className="ml-2 inline-block bg-amber-100 text-amber-800 text-xs px-2 sm:px-3 py-1 rounded-full font-semibold">
                      Coming Soon!
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-1 text-sm sm:text-base">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className={`border-2 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base ${
                  service.color === 'blue' ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' :
                  service.color === 'amber' ? 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white' :
                  service.color === 'green' ? 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white' :
                  service.color === 'purple' ? 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white' :
                  'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white'
                }`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 