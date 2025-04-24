
import React from 'react';
import { MapPin, Truck, CheckCircle, Clock } from 'lucide-react';

const DeliveryFlow = () => {
  const steps = [
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Set Locations",
      description: "Enter pickup and delivery locations on our interactive map."
    },
    {
      icon: <Truck className="h-6 w-6 text-white" />,
      title: "Choose Vehicle",
      description: "Select the vehicle type that best suits your delivery needs."
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Track Progress",
      description: "Monitor your delivery in real-time through our tracking system."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Delivery Complete",
      description: "Receive confirmation once your goods are safely delivered."
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our streamlined delivery process ensures your goods are moved quickly and efficiently with just a few simple steps.
        </p>
      </div>
      
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-16 left-0 right-0 h-1 bg-purple-200 hidden md:block"></div>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mb-4 z-10">
                {step.icon}
              </div>
              <div className="absolute top-6 left-0 right-0 flex justify-center z-0 hidden md:block">
                <span className="text-xs font-medium text-purple-600 bg-white px-2">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryFlow;
