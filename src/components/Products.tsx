
import { Button } from '@/components/ui/button';

const Products = () => {
  const categories = [
    {
      title: "Plain T-Shirts",
      image: "/lovable-uploads/46cc21d5-375d-43bf-84f6-18e7c10a77df.png",
      highlight: false,
    },
    {
      title: "Jackets & Outerwear",
      image: "/lovable-uploads/46cc21d5-375d-43bf-84f6-18e7c10a77df.png",
      highlight: true,
    },
    {
      title: "Hoodies",
      image: "/lovable-uploads/46cc21d5-375d-43bf-84f6-18e7c10a77df.png",
      highlight: false,
    },
    {
      title: "Dress Shirts",
      image: "/lovable-uploads/46cc21d5-375d-43bf-84f6-18e7c10a77df.png",
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-lg animate-fade-in ${
                category.highlight ? 'col-span-1 md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="aspect-[4/3] w-full">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-vista-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-xl mb-2">{category.title}</h3>
                <Button asChild variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white hover:text-vista-blue w-full">
                  <a href="#products">View Collection</a>
                </Button>
              </div>
            </div>
          ))}
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
