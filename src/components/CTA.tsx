
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-vista-blue text-white overflow-hidden relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-vista-lightblue/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-vista-gold/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Brand?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Partner with Vista Style for premium promotional products and corporate apparel that make a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-vista-blue hover:bg-vista-gold hover:text-vista-blue text-base font-medium px-8 py-6">
              Request a Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base font-medium px-8 py-6">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
