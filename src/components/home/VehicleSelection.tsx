
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Bike, Package, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const VehicleSelection = () => {
  const vehicles = [
    {
      icon: <Truck className="h-8 w-8 text-purple-600" />,
      name: "Mini Truck",
      capacity: "Up to 1000 kg",
      description: "Perfect for moving furniture, appliances, or large inventory.",
      price: "From $25",
    },
    {
      icon: <Package className="h-8 w-8 text-purple-600" />,
      name: "Pickup Truck",
      capacity: "Up to 500 kg",
      description: "Ideal for medium-sized goods and partial home moves.",
      price: "From $20",
    },
    {
      icon: <Bike className="h-8 w-8 text-purple-600" />,
      name: "Bike",
      capacity: "Up to 30 kg",
      description: "Quick delivery for small packages and documents.",
      price: "From $10",
    }
  ];

  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Choose Your Vehicle</h2>
          <p className="text-gray-600">Select the perfect vehicle for your delivery needs</p>
        </div>
        <Link to="/booking/vehicle">
          <Button variant="ghost" className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 mt-4 md:mt-0">
            View all options <ChevronsRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vehicles.map((vehicle, index) => (
          <Card key={index} className="border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="mb-4">
                {vehicle.icon}
              </div>
              <h3 className="text-xl font-semibold">{vehicle.name}</h3>
              <p className="text-sm text-purple-600 font-medium mb-2">{vehicle.capacity}</p>
              <p className="text-gray-600 mb-4">{vehicle.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{vehicle.price}</span>
                <Link to="/booking/vehicle">
                  <Button variant="outline" size="sm" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                    Select
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default VehicleSelection;
