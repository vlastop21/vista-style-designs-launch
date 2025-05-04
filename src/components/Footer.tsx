
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <a href="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/d9a9e2f7-c592-4421-93ff-a8b941e1896d.png" 
                alt="Vista Style Logo" 
                className="h-12 w-auto"
              />
            </a>
            <p className="text-gray-600 mb-6 max-w-xs">
              Premium promotional products and corporate apparel with professional logo embroidery services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-vista-blue">Services</h3>
            <ul className="space-y-4">
              <li><a href="#products" className="text-gray-600 hover:text-vista-blue transition-colors">Corporate Apparel</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-vista-blue transition-colors">Promotional Products</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-vista-blue transition-colors">Logo Embroidery</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-vista-blue transition-colors">Custom Design</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-vista-blue">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-vista-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li><a href="#products" className="text-gray-600 hover:text-vista-blue transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-vista-blue transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-vista-blue">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-vista-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-600">
                  201-1065 Canadian Pl<br />
                  #1116<br />
                  Mississauga ON L4W 0C2
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-vista-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-600">(249) 733-8973</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-vista-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-600">(416) 450-9714</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-vista-blue mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-600">info@vistastyleinc.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Vista Style. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="text-gray-600 hover:text-vista-blue text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-600 hover:text-vista-blue text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
