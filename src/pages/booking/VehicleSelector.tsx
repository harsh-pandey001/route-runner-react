
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Truck, Bike, Package, Car } from 'lucide-react';

const VehicleSelector = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleVehicleSelect = (vehicleId: string) => {
    setSelectedVehicle(vehicleId);
  };
  
  const handleContinue = () => {
    if (!selectedVehicle) {
      toast({
        title: "Vehicle selection required",
        description: "Please select a vehicle to continue.",
        variant: "destructive",
      });
      return;
    }
    navigate('/booking/confirmation');
  };
  
  const vehicles = [
    {
      id: 'mini-truck',
      name: 'Mini Truck',
      icon: <Truck className="h-8 w-8 text-purple-600" />,
      capacity: 'Up to 1000 kg',
      description: 'Large items, furniture, appliances',
      price: 25,
      time: '45-60 min',
    },
    {
      id: 'pickup',
      name: 'Pickup Truck',
      icon: <Package className="h-8 w-8 text-purple-600" />,
      capacity: 'Up to 500 kg',
      description: 'Medium-sized goods, partial moves',
      price: 20,
      time: '30-45 min',
    },
    {
      id: 'car',
      name: 'Car',
      icon: <Car className="h-8 w-8 text-purple-600" />,
      capacity: 'Up to 100 kg',
      description: 'Small packages, groceries, luggage',
      price: 15,
      time: '20-30 min',
    },
    {
      id: 'bike',
      name: 'Bike',
      icon: <Bike className="h-8 w-8 text-purple-600" />,
      capacity: 'Up to 30 kg',
      description: 'Documents, food delivery, small items',
      price: 10,
      time: '15-20 min',
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/booking/location" className="mr-4">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">Select Vehicle</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-2">Choose the right vehicle for your delivery</h2>
          <p className="text-gray-600 text-sm">Select based on package size and delivery requirements</p>
        </div>
        
        <div className="space-y-4">
          <RadioGroup value={selectedVehicle} onValueChange={handleVehicleSelect}>
            {vehicles.map((vehicle) => (
              <div 
                key={vehicle.id}
                className={`border rounded-lg transition-all ${
                  selectedVehicle === vehicle.id 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                <label 
                  htmlFor={vehicle.id} 
                  className="cursor-pointer"
                >
                  <div className="flex items-center p-4">
                    <RadioGroupItem value={vehicle.id} id={vehicle.id} className="mr-4" />
                    <div className="flex-1 flex items-center">
                      <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                        {vehicle.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{vehicle.name}</p>
                        <p className="text-xs text-gray-500">{vehicle.capacity} • {vehicle.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">${vehicle.price}</p>
                        <p className="text-xs text-gray-500">{vehicle.time}</p>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        {selectedVehicle && (
          <Card className="mt-8 border-none shadow-md">
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Delivery Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pickup location:</span>
                  <span>123 Pickup Street</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Drop location:</span>
                  <span>456 Delivery Avenue</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Distance:</span>
                  <span>5.2 km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated time:</span>
                  <span>30 min</span>
                </div>
                <div className="flex justify-between font-medium border-t border-gray-100 pt-2 mt-2">
                  <span>Total price:</span>
                  <span>${vehicles.find(v => v.id === selectedVehicle)?.price || 0}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={handleContinue}
          className="w-full bg-purple-700 hover:bg-purple-800"
          disabled={!selectedVehicle}
        >
          Continue to Confirmation
        </Button>
      </div>
    </div>
  );
};

export default VehicleSelector;
