import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Mail, Phone } from 'lucide-react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Contact Options */}
      <div className={`mb-4 space-y-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <a
          href="mailto:jane.doe@example.com"
          className="flex items-center space-x-3 bg-white shadow-lg rounded-full py-3 px-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
        >
          <Mail className="w-5 h-5 text-orange-500" />
          <span className="font-medium text-gray-700 group-hover:text-orange-500">Email Me</span>
        </a>
        <a
          href="tel:+15551234567"
          className="flex items-center space-x-3 bg-white shadow-lg rounded-full py-3 px-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
        >
          <Phone className="w-5 h-5 text-blue-500" />
          <span className="font-medium text-gray-700 group-hover:text-blue-500">Call Me</span>
        </a>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;