
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Route Runner</h3>
            <p className="text-gray-600 mb-4">
              Fast and reliable delivery solutions for all your logistics needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-purple-600">Home</Link></li>
              <li><Link to="/booking" className="text-gray-600 hover:text-purple-600">Book a Delivery</Link></li>
              <li><Link to="/track" className="text-gray-600 hover:text-purple-600">Track Order</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-purple-600">Pricing</Link></li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="text-md font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-purple-600">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-purple-600">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                <span className="text-gray-600">123 Delivery Street, Logistics City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-gray-600">support@routerunner.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Route Runner. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><Link to="/terms" className="text-gray-500 hover:text-purple-600">Terms</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-purple-600">Privacy</Link></li>
              <li><Link to="/cookies" className="text-gray-500 hover:text-purple-600">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
