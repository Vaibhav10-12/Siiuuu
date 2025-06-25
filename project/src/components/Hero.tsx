import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-orange-200 to-blue-200 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center text-4xl font-bold text-gray-700">
              JD
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-4 border-white animate-pulse"></div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
          Jane Doe
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
          Creative Developer & Digital Artist
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting beautiful digital experiences with code, creativity, and a passion for innovation. 
          Let's build something extraordinary together.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <Github className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors" />
          </a>
          <a href="#" className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-500 transition-colors" />
          </a>
          <a href="#" className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <Mail className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:from-orange-500 hover:to-orange-600"
          >
            View My Work
          </button>
          <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200">
            Download CV
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </button>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-200/30 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;