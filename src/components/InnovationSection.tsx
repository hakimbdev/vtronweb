import React from 'react';
import { ChevronRight } from 'lucide-react';

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "V.Trone established with a vision for sustainable energy"
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Released the revolutionary V75 Portable Power Station"
  },
  {
    year: "2022",
    title: "R&D Breakthrough",
    description: "Developed proprietary battery management technology"
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to international markets"
  }
];

export default function InnovationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Innovation & Technology</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Cutting-Edge Technology</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our R&D team continuously pushes the boundaries of what's possible in clean energy technology. Through innovative research and development, we're creating solutions that are more efficient, reliable, and accessible than ever before.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8 pl-8">
                    <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="text-orange-500 font-bold mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}