import React from 'react';
import { Microscope, FlaskRound as Flask, GraduationCap, Users } from 'lucide-react';

const benefits = [
  {
    icon: Microscope,
    title: "Advanced Research Facilities",
    description: "Access to state-of-the-art genetic research equipment and facilities"
  },
  {
    icon: Flask,
    title: "Collaborative Projects",
    description: "Opportunities for joint research projects and knowledge sharing"
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "Support for academic publications and research presentations"
  },
  {
    icon: Users,
    title: "Network Growth",
    description: "Connect with leading institutions and researchers worldwide"
  }
];

const CollaborationBenefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Benefits of Collaboration
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationBenefits;