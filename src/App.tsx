
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Booking from "./pages/booking/Booking";
import LocationPicker from "./pages/booking/LocationPicker";
import VehicleSelector from "./pages/booking/VehicleSelector";
import BookingConfirmation from "./pages/booking/BookingConfirmation";
import OrderTracking from "./pages/tracking/OrderTracking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking/location" element={<LocationPicker />} />
          <Route path="/booking/vehicle" element={<VehicleSelector />} />
          <Route path="/booking/confirmation" element={<BookingConfirmation />} />
          <Route path="/track" element={<OrderTracking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
