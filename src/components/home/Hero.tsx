
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TruckIcon, MapPinIcon, ClockIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-700 to-purple-500 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute right-0 top-0 h-full w-full text-white/5" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" preserveAspectRatio="none">
          <path d="M400,0C179.1,0,0,179.1,0,400s179.1,400,400,400s400-179.1,400-400S620.9,0,400,0z M400,750c-193.3,0-350-156.7-350-350S206.7,50,400,50s350,156.7,350,350S593.3,750,400,750z" fill="currentColor"/>
          <path d="M400,150c-138.1,0-250,111.9-250,250s111.9,250,250,250s250-111.9,250-250S538.1,150,400,150z M400,600c-110.5,0-200-89.5-200-200s89.5-200,200-200s200,89.5,200,200S510.5,600,400,600z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Fast & Reliable<br />Delivery Service
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-lg">
              Book a vehicle in minutes and get your goods delivered safely with real-time tracking and professional drivers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                  Book Now
                </Button>
              </Link>
              <Link to="/track">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-600">
                  Track Order
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-2">
                <TruckIcon className="w-5 h-5" />
                <span>Multiple Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5" />
                <span>City-wide Service</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                <span>24/7 Availability</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative z-20 bg-white p-6 rounded-lg shadow-xl transform rotate-3 transition-transform">
                <div className="h-60 bg-gray-200 rounded-md mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-purple-300 rounded-lg transform -rotate-2 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
