
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPinIcon, Truck, PackageCheck, Clock, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MapPinIcon className="h-6 w-6 text-purple-600" />,
      title: "Easy Location Selection",
      description: "Select pickup and drop locations easily with our interactive map interface."
    },
    {
      icon: <Truck className="h-6 w-6 text-purple-600" />,
      title: "Multiple Vehicle Types",
      description: "Choose from a range of vehicles that best suit your delivery needs."
    },
    {
      icon: <PackageCheck className="h-6 w-6 text-purple-600" />,
      title: "Secure Packaging",
      description: "Your items are carefully handled and securely transported."
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Real-time Tracking",
      description: "Track your delivery in real-time from pickup to drop-off."
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Safe Delivery",
      description: "Professional drivers ensure your goods reach safely."
    }
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our Service</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide top-notch logistics solutions with a focus on reliability, speed, and customer satisfaction.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
