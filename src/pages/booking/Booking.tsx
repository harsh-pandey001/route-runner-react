
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Truck, Calendar, Package } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Booking = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Book a Delivery</h1>
          <p className="text-purple-100 mt-2">Get your goods delivered quickly and reliably</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8 border-none shadow-md">
          <CardHeader className="bg-white rounded-t-lg">
            <CardTitle>Start Your Booking</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs defaultValue="standard" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="standard">Standard Delivery</TabsTrigger>
                <TabsTrigger value="express">Express Delivery</TabsTrigger>
              </TabsList>
              <TabsContent value="standard">
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <h3 className="text-lg font-medium flex items-center">
                      <Package className="h-5 w-5 text-purple-600 mr-2" />
                      Standard Delivery
                    </h3>
                    <p className="mt-2 text-gray-600">3-4 hours delivery time, perfect for regular shipments.</p>
                    <p className="mt-1 text-purple-600 font-medium">Starting from $15</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                          <MapPin className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-medium">Step 1</h3>
                        <p className="text-sm text-gray-600">Set pickup & drop locations</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                          <Truck className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-medium">Step 2</h3>
                        <p className="text-sm text-gray-600">Select vehicle type</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                          <Calendar className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-medium">Step 3</h3>
                        <p className="text-sm text-gray-600">Choose time & date</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                          <Package className="h-5 w-5 text-purple-600" />
                        </div>
                        <h3 className="font-medium">Step 4</h3>
                        <p className="text-sm text-gray-600">Confirm & pay</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <Link to="/booking/location">
                      <Button className="bg-purple-700 hover:bg-purple-800">
                        Start Booking
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="express">
                <div className="space-y-6">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h3 className="text-lg font-medium flex items-center">
                      <Package className="h-5 w-5 text-orange-500 mr-2" />
                      Express Delivery
                    </h3>
                    <p className="mt-2 text-gray-600">1-2 hours guaranteed delivery, ideal for urgent shipments.</p>
                    <p className="mt-1 text-orange-600 font-medium">Starting from $25</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                          <MapPin className="h-5 w-5 text-orange-500" />
                        </div>
                        <h3 className="font-medium">Step 1</h3>
                        <p className="text-sm text-gray-600">Set pickup & drop locations</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                          <Truck className="h-5 w-5 text-orange-500" />
                        </div>
                        <h3 className="font-medium">Step 2</h3>
                        <p className="text-sm text-gray-600">Select vehicle type</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                          <Calendar className="h-5 w-5 text-orange-500" />
                        </div>
                        <h3 className="font-medium">Step 3</h3>
                        <p className="text-sm text-gray-600">Choose time & date</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-none shadow-sm">
                      <CardContent className="p-4">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                          <Package className="h-5 w-5 text-orange-500" />
                        </div>
                        <h3 className="font-medium">Step 4</h3>
                        <p className="text-sm text-gray-600">Confirm & pay</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <Link to="/booking/location">
                      <Button className="bg-orange-500 hover:bg-orange-600">
                        Start Express Booking
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Recent Orders */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Your Recent Orders</h2>
          <div className="grid grid-cols-1 gap-4">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    <h3 className="font-medium text-lg">Order #123456</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Delivered on April 18, 2025</p>
                </div>
                <div className="flex flex-col mt-4 md:mt-0 md:items-end">
                  <span className="text-gray-600">Mini Truck</span>
                  <Link to="/track" className="text-purple-600 hover:text-purple-800 text-sm">
                    View details →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Suggested Services */}
        <div>
          <h2 className="text-xl font-bold mb-4">Suggested Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-none shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Need regular deliveries?</h3>
                <p className="text-sm text-gray-600 mb-4">Save up to 20% with our monthly subscription plans.</p>
                <Link to="/subscription" className="text-purple-600 hover:text-purple-800 text-sm">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Long distance transport?</h3>
                <p className="text-sm text-gray-600 mb-4">Check our intercity logistics solutions.</p>
                <Link to="/intercity" className="text-purple-600 hover:text-purple-800 text-sm">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">Business solutions</h3>
                <p className="text-sm text-gray-600 mb-4">Special rates and dedicated support for business clients.</p>
                <Link to="/business" className="text-purple-600 hover:text-purple-800 text-sm">
                  Learn more →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
