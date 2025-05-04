
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Products = () => {
  const categories = [
    {
      title: "Plain T-Shirts",
      highlight: false,
    },
    {
      title: "Jackets & Outerwear",
      highlight: true,
    },
    {
      title: "Hoodies",
      highlight: false,
    },
    {
      title: "Dress Shirts",
      highlight: false,
    },
  ];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Discover our wide range of customizable products for your business needs
        </p>
        
        <div className="relative w-full mb-10 animate-fade-in overflow-hidden rounded-lg">
          <AspectRatio ratio={16/9} className="w-full">
            <img 
              src="/lovable-uploads/46cc21d5-375d-43bf-84f6-18e7c10a77df.png" 
              alt="Featured Products" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-vista-blue/80 to-transparent flex flex-col justify-end p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className={`text-white animate-fade-in ${
                    category.highlight ? 'col-span-1 md:col-span-2' : ''
                  }`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <h3 className="text-white font-semibold text-xl mb-2">{category.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-vista-blue hover:bg-vista-lightblue text-white px-8">
            <a href="#products">View All Products</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
