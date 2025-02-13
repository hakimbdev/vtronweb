import React from 'react';

const products = [
  {
    name: "V75 Portable Power Station",
    image: "/assets/V75_Portable_Power_Station.png",
    specs: ["75,000 mAh Capacity", "Multiple Outputs", "Solar Compatible", "Ultra-Portable"],
    status: "current"
  },
  {
    name: "V60 Portable Power Station",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: ["60,000 mAh Capacity", "Fast Charging", "Compact Design"],
    status: "development"
  },
  {
    name: "V400 Heavy Duty Power Station",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: ["400,000 mAh Capacity", "Industrial Grade", "Advanced BMS"],
    status: "development"
  },
  {
    name: "V1000 Power Station",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specs: ["1000Ah Capacity", "Commercial Grade", "Intelligent Control"],
    status: "development"
  }
];

const upcomingProjects = [
  "Electric Tricycle",
  "Cold Preserving Refrigerators",
  "EV Charging Solutions",
  "Energy Storage Products",
  "EV Motorcycle"
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-gray-600">• {spec}</li>
                  ))}
                </ul>
                {product.status === "development" ? (
                  <span className="inline-block bg-yellow-100 text-yellow-800 rounded-full px-4 py-1 text-sm font-semibold">
                    Under Development
                  </span>
                ) : (
                  <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    Learn More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Projects</h3>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingProjects.map((project, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-700">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>{project}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}