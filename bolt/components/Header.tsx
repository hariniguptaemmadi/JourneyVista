import React, { useState, useEffect } from 'react';
import { Menu, X, Compass } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Compass className="h-8 w-8 text-orange-600" />
          <h1 className="ml-2 text-2xl font-bold text-gray-800">
            Journey<span className="text-orange-600">Vista</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
            Destinations
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
            Culture
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
            Cuisine
          </a>
          <a href="#" className="text-gray-700 hover:text-orange-600 transition-colors">
            Eco Travel
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 px-4 rounded hover:bg-orange-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 px-4 rounded hover:bg-orange-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 px-4 rounded hover:bg-orange-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Culture
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 px-4 rounded hover:bg-orange-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Cuisine
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2 px-4 rounded hover:bg-orange-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Eco Travel
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;