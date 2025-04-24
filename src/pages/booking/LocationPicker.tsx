
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, ArrowDown, LocateFixed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LocationPicker = () => {
  const [locations, setLocations] = useState({
    pickup: '',
    dropoff: ''
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLocationChange = (type: 'pickup' | 'dropoff', value: string) => {
    setLocations(prev => ({
      ...prev,
      [type]: value
    }));
  };
  
  const handleCurrentLocation = () => {
    toast({
      title: "Using current location",
      description: "Current location set as pickup point.",
    });
    setLocations(prev => ({
      ...prev,
      pickup: '123 Current Street, Your City'
    }));
  };
  
  const handleContinue = () => {
    if (!locations.pickup || !locations.dropoff) {
      toast({
        title: "Location required",
        description: "Please set both pickup and drop-off locations.",
        variant: "destructive",
      });
      return;
    }
    navigate('/booking/vehicle');
  };
  
  // Mock suggested locations
  const suggestedLocations = [
    "123 Maple Street, Central City",
    "456 Oak Avenue, Downtown",
    "789 Pine Road, Westside",
    "101 Cedar Lane, Eastside"
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/booking" className="mr-4">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">Set Locations</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="map" className="space-y-4">
            {/* Mock map area with styling */}
            <div className="w-full h-64 bg-gray-200 rounded-lg relative mb-4">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Map View (Google Maps integration would go here)
              </div>
            </div>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                      <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 text-xs font-bold">A</span>
                      </div>
                      <div className="w-0.5 h-full bg-dashed border-l border-gray-300 border-dashed my-1 flex-1"></div>
                      <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                        <span className="text-purple-700 text-xs font-bold">B</span>
                      </div>
                    </div>
                    
                    <div className="pl-10 space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                        <div className="flex">
                          <Input
                            placeholder="Enter pickup address"
                            value={locations.pickup}
                            onChange={(e) => handleLocationChange('pickup', e.target.value)}
                            className="rounded-r-none"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            className="rounded-l-none border-l-0"
                            onClick={handleCurrentLocation}
                          >
                            <LocateFixed className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
                        <Input
                          placeholder="Enter drop-off address"
                          value={locations.dropoff}
                          onChange={(e) => handleLocationChange('dropoff', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Suggested locations */}
            <div className="space-y-2 mt-4">
              <h3 className="text-sm font-medium text-gray-700">Suggested locations</h3>
              {suggestedLocations.map((location, index) => (
                <Card key={index} className="border-none shadow-sm hover:bg-gray-50 cursor-pointer" onClick={() => handleLocationChange('dropoff', location)}>
                  <CardContent className="p-3 flex items-center">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">{location}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="list" className="space-y-4">
            <Card className="border-none shadow-md">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                    <Input
                      placeholder="Enter pickup address"
                      value={locations.pickup}
                      onChange={(e) => handleLocationChange('pickup', e.target.value)}
                      className="mb-2"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-full flex justify-center items-center"
                      onClick={handleCurrentLocation}
                    >
                      <LocateFixed className="h-4 w-4 mr-2" />
                      Use current location
                    </Button>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <ArrowDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Drop Location</label>
                    <Input
                      placeholder="Enter drop-off address"
                      value={locations.dropoff}
                      onChange={(e) => handleLocationChange('dropoff', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Saved addresses */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-700">Saved addresses</h3>
              <Card className="border-none shadow-sm hover:bg-gray-50 cursor-pointer" onClick={() => handleLocationChange('pickup', 'Home: 123 Residential St')}>
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-purple-700 text-xs">🏠</span>
                    </div>
                    <div>
                      <p className="font-medium">Home</p>
                      <p className="text-xs text-gray-500">123 Residential St</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Select
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-sm hover:bg-gray-50 cursor-pointer" onClick={() => handleLocationChange('dropoff', 'Office: 456 Business Ave')}>
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-700 text-xs">🏢</span>
                    </div>
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-xs text-gray-500">456 Business Ave</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Select
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <Button 
            onClick={handleContinue}
            className="w-full bg-purple-700 hover:bg-purple-800"
            disabled={!locations.pickup || !locations.dropoff}
          >
            Continue
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LocationPicker;
