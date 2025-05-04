
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-[150px] items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/d9a9e2f7-c592-4421-93ff-a8b941e1896d.png" 
                alt="Vista Style Logo" 
                className="h-36 w-auto"
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-vista-blue hover:text-vista-lightblue transition-colors">
              Home
            </Link>
            <a href="#services" className="text-sm font-medium text-vista-blue hover:text-vista-lightblue transition-colors">
              Services
            </a>
            <a href="#products" className="text-sm font-medium text-vista-blue hover:text-vista-lightblue transition-colors">
              Products
            </a>
            <a href="#testimonials" className="text-sm font-medium text-vista-blue hover:text-vista-lightblue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-sm font-medium text-vista-blue hover:text-vista-lightblue transition-colors">
              Contact
            </a>
            <Button asChild className="bg-vista-blue hover:bg-vista-lightblue text-white">
              <Link to="/quote-request">Get a Quote</Link>
            </Button>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-vista-blue hover:text-vista-lightblue focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-vista-blue hover:text-vista-lightblue">
              Home
            </Link>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-vista-blue hover:text-vista-lightblue">
              Services
            </a>
            <a href="#products" className="block px-3 py-2 text-base font-medium text-vista-blue hover:text-vista-lightblue">
              Products
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-vista-blue hover:text-vista-lightblue">
              Testimonials
            </a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-vista-blue hover:text-vista-lightblue">
              Contact
            </a>
            <Button asChild className="mt-2 w-full bg-vista-blue hover:bg-vista-lightblue text-white">
              <Link to="/quote-request">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
