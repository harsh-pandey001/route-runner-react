
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Truck, Clock, Info, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const BookingConfirmation = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleConfirmBooking = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Booking Successful!",
        description: "Your delivery has been booked. Tracking ID: DL12345",
      });
      navigate('/track');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-purple-700 text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Link to="/booking/vehicle" className="mr-4">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-xl font-bold">Confirm Booking</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Delivery Details */}
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <h3 className="font-medium mb-4 flex items-center">
                <Info className="h-4 w-4 text-purple-600 mr-2" />
                Delivery Details
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Pickup Location</p>
                    <p className="font-medium">123 Pickup Street, City</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Drop Location</p>
                    <p className="font-medium">456 Delivery Avenue, City</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Vehicle Type</p>
                    <p className="font-medium">Mini Truck</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Estimated Time</p>
                    <p className="font-medium">30 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-600">Delivery Date</p>
                    <p className="font-medium">Today, ASAP</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Package Information */}
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Package Information</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="packageType" className="text-sm">Package Type</Label>
                  <Input 
                    id="packageType" 
                    placeholder="e.g. Furniture, Electronics, etc." 
                    className="mt-1" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="packageWeight" className="text-sm">Estimated Weight (kg)</Label>
                  <Input 
                    id="packageWeight" 
                    type="number" 
                    placeholder="Enter weight" 
                    className="mt-1" 
                  />
                </div>
                
                <div>
                  <Label htmlFor="instructions" className="text-sm">Special Instructions</Label>
                  <Textarea 
                    id="instructions" 
                    placeholder="Any specific handling instructions..." 
                    className="mt-1" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Payment Method */}
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <h3 className="font-medium mb-4 flex items-center">
                <CreditCard className="h-4 w-4 text-purple-600 mr-2" />
                Payment Method
              </h3>
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="cash" id="cash" />
                  <Label htmlFor="cash" className="cursor-pointer">Cash on Delivery</Label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="cursor-pointer">Credit/Debit Card</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="wallet" id="wallet" />
                  <Label htmlFor="wallet" className="cursor-pointer">Digital Wallet</Label>
                </div>
              </RadioGroup>
              
              {paymentMethod === 'card' && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg space-y-3">
                  <div>
                    <Label htmlFor="cardNumber" className="text-xs">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="expiryDate" className="text-xs">Expiry Date</Label>
                      <Input id="expiryDate" placeholder="MM/YY" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-xs">CVV</Label>
                      <Input id="cvv" type="password" placeholder="123" className="mt-1" />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          {/* Order Summary */}
          <Card className="border-none shadow-md">
            <CardContent className="p-4">
              <h3 className="font-medium mb-4">Order Summary</h3>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base fare</span>
                  <span>$20.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Distance fee (5.2 km)</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Service fee</span>
                  <span>$2.00</span>
                </div>
                <div className="flex justify-between font-medium border-t border-gray-200 pt-2 mt-2">
                  <span>Total</span>
                  <span>$27.00</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
        <Button 
          onClick={handleConfirmBooking}
          className="w-full bg-purple-700 hover:bg-purple-800"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
