
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Discover our wide range of customizable products for your business needs
        </p>
        
        <Link to="/quote-request" className="block">
          <div className="relative w-full mb-10 animate-fade-in overflow-hidden rounded-lg transition-transform hover:scale-[1.01] hover:shadow-lg">
            <AspectRatio ratio={16/9} className="w-full">
              <img 
                src="/lovable-uploads/46cc21d5-375d-43bf-84f6-18e7c10a77df.png" 
                alt="Featured Products" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Products;
