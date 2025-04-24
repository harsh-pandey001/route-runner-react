
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import VehicleSelection from "@/components/home/VehicleSelection";
import DeliveryFlow from "@/components/home/DeliveryFlow";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Features */}
        <Features />
        
        {/* Vehicle Selection Preview */}
        <VehicleSelection />
        
        {/* How It Works */}
        <DeliveryFlow />
        
        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl my-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Ready to Move Your Goods?</h2>
          <p className="text-gray-600 text-center max-w-2xl mb-8">
            Sign up now and experience seamless delivery services for all your logistics needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/auth/login">
              <Button variant="default" className="bg-purple-700 hover:bg-purple-800">Login</Button>
            </Link>
            <Link to="/auth/signup">
              <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">Sign Up</Button>
            </Link>
          </div>
        </div>
        
        {/* Testimonials and App Preview */}
        <Tabs defaultValue="testimonials" className="w-full my-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="app">App Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="testimonials" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item} className="border-none shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                        <span className="text-purple-700 font-bold">JD</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">John Doe</CardTitle>
                        <CardDescription>Regular Customer</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      "The delivery service was exceptional. My items arrived on time and the driver was very professional."
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="app" className="mt-6">
            <div className="flex flex-wrap justify-center gap-8">
              <Card className="w-full md:w-64 border-none shadow-lg overflow-hidden bg-gray-50">
                <CardHeader className="p-0">
                  <div className="h-12 bg-purple-700 w-full"></div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="h-8 bg-gray-200 rounded-md w-full"></div>
                    <div className="h-20 bg-gray-200 rounded-md w-full"></div>
                    <div className="h-12 bg-purple-200 rounded-md w-full"></div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-100 p-4">
                  <p className="text-xs text-center w-full text-gray-500">Login Screen</p>
                </CardFooter>
              </Card>
              
              <Card className="w-full md:w-64 border-none shadow-lg overflow-hidden bg-gray-50">
                <CardHeader className="p-0">
                  <div className="h-12 bg-purple-700 w-full"></div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="h-32 bg-gray-200 rounded-md w-full"></div>
                    <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                    <div className="h-6 bg-gray-200 rounded-md w-3/4 mx-auto"></div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-100 p-4">
                  <p className="text-xs text-center w-full text-gray-500">Location Screen</p>
                </CardFooter>
              </Card>
              
              <Card className="w-full md:w-64 border-none shadow-lg overflow-hidden bg-gray-50">
                <CardHeader className="p-0">
                  <div className="h-12 bg-purple-700 w-full"></div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="h-8 bg-gray-200 rounded-md w-full"></div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-16 bg-gray-200 rounded-md"></div>
                      <div className="h-16 bg-gray-200 rounded-md"></div>
                      <div className="h-16 bg-gray-200 rounded-md"></div>
                      <div className="h-16 bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-100 p-4">
                  <p className="text-xs text-center w-full text-gray-500">Vehicle Selection</p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
