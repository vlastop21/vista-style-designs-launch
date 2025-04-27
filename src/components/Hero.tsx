import { Button } from '@/components/ui/button';

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
              <Button className="bg-vista-blue hover:bg-vista-lightblue text-white px-8 py-6 text-base">
                Request a Quote
              </Button>
              <Button variant="outline" className="border-vista-blue text-vista-blue hover:bg-vista-blue/10 px-8 py-6 text-base">
                View Products
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">Trusted by companies nationwide</p>
              <div className="flex flex-wrap gap-6 mt-4 items-center opacity-70">
                <div className="h-8 w-20 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-16 bg-gray-300 rounded"></div>
                <div className="h-8 w-28 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-96 lg:h-[500px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full bg-vista-blue/5 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606293459339-aa5cd72d9582"
                  alt="Corporate Apparel and Promotional Products" 
                  className="w-full h-full object-cover"
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
