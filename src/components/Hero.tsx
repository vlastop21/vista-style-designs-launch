
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(192,192,192,0.2),transparent_70%)]"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vista-blue">
              Elevate Your Brand Identity
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Premium promotional products, corporate apparel, and professional logo embroidery services tailored for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-vista-blue hover:bg-vista-lightblue text-white px-8 py-6 text-base">
                <Link to="/quote-request">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" className="border-vista-blue text-vista-blue hover:bg-vista-blue/10 px-8 py-6 text-base">
                <a href="#products">View Products</a>
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">Trusted by companies nationwide</p>
            </div>
          </div>
          <div className="relative h-64 md:h-96 lg:h-[500px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-vista-blue/5 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/29071981-2a00-4f80-bd1e-549d30855fa9.png"
                  alt="Corporate Apparel and Promotional Products" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
