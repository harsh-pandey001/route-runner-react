
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Phone, MessageSquare, MapPin, CheckCircle, Clock, Package, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const OrderTracking = () => {
  const [trackingProgress, setTrackingProgress] = useState(25);
  const [currentStatus, setCurrentStatus] = useState('Pickup');
  const [orderDetails] = useState({
    orderId: 'DL12345',
    driverName: 'John Smith',
    driverPhone: '+1 555-123-4567',
    vehicleType: 'Mini Truck',
    vehicleNumber: 'AB 1234 CD',
    estimatedDelivery: '12:45 PM'
  });
  
  // Mock tracking data
  const trackingSteps = [
    {
      id: 'order-placed',
      name: 'Order Placed',
      time: '11:30 AM',
      icon: <Package />,
      isCompleted: true
    },
    {
      id: 'pickup',
      name: 'Pickup',
      time: '12:10 PM',
      icon: <MapPin />,
      isCompleted: true
    },
    {
      id: 'in-transit',
      name: 'In Transit',
      time: '12:25 PM',
      icon: <Truck />,
      isCompleted: false
    },
    {
      id: 'delivered',
      name: 'Delivered',
      time: '-- : --',
      icon: <CheckCircle />,
      isCompleted: false
    }
  ];
  
  // Simulate real-time progress updates
  useEffect(() => {
    const statusMap: Record<number, string> = {
      25: 'Pickup',
      50: 'In Transit',
      100: 'Delivered'
    };
    
    const timer = setTimeout(() => {
      if (trackingProgress < 100) {
        const newProgress = trackingProgress + 25;
        setTrackingProgress(newProgress);
        setCurrentStatus(statusMap[newProgress] || currentStatus);
      }
    }, 8000);
    
    return () => clearTimeout(timer);
  }, [trackingProgress, currentStatus]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold">Track Order</h1>
          </div>
          <div className="text-sm">Order #{orderDetails.orderId}</div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Status Card */}
        <Card className="border-none shadow-md mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-medium">{currentStatus}</h2>
                <p className="text-sm text-gray-600">Estimated delivery by {orderDetails.estimatedDelivery}</p>
              </div>
              <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center">
                {trackingProgress === 100 ? (
                  <CheckCircle className="h-7 w-7 text-green-600" />
                ) : (
                  <Clock className="h-7 w-7 text-purple-600" />
                )}
              </div>
            </div>
            
            <Progress value={trackingProgress} className="h-2 mb-4" />
            
            <div className="flex justify-between text-xs text-gray-500">
              <span>Order placed</span>
              <span>Pickup</span>
              <span>In transit</span>
              <span>Delivered</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Map Area (Mock) */}
        <div className="w-full h-64 bg-gray-200 rounded-lg mb-6 relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Map View (Google Maps integration would go here)
          </div>
        </div>
        
        {/* Driver Info */}
        <Card className="border-none shadow-md mb-6">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4">Delivery Agent</h3>
            
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <span className="text-gray-500 font-bold">JS</span>
              </div>
              
              <div className="flex-1">
                <p className="font-medium">{orderDetails.driverName}</p>
                <p className="text-sm text-gray-600">{orderDetails.vehicleType} • {orderDetails.vehicleNumber}</p>
              </div>
              
              <div className="flex space-x-2">
                <Button size="icon" variant="outline" className="h-10 w-10 rounded-full">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-10 w-10 rounded-full">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Tracking Steps */}
        <Card className="border-none shadow-md">
          <CardContent className="p-4">
            <h3 className="font-medium mb-4">Tracking Details</h3>
            
            <div className="space-y-6">
              {trackingSteps.map((step, index) => {
                const isActive = index === trackingSteps.findIndex(s => !s.isCompleted) - 1;
                
                return (
                  <div key={step.id} className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        step.isCompleted 
                          ? 'bg-green-100 text-green-600' 
                          : isActive 
                            ? 'bg-purple-100 text-purple-600'
                            : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.icon && React.cloneElement(step.icon, { className: 'h-4 w-4' })}
                      </div>
                      {index < trackingSteps.length - 1 && (
                        <div className={`w-0.5 h-14 ${
                          step.isCompleted ? 'bg-green-200' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">{step.name}</p>
                        <p className="text-sm text-gray-500">{step.time}</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {step.id === 'order-placed' && 'Your order has been placed successfully.'}
                        {step.id === 'pickup' && 'Your package has been picked up.'}
                        {step.id === 'in-transit' && 'Your package is on its way to the destination.'}
                        {step.id === 'delivered' && 'Your package has been delivered successfully.'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default OrderTracking;
