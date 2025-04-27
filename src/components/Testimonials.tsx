
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Vista Style transformed our company uniforms. The quality of embroidery and attention to detail exceeded our expectations. Our team loves the new apparel!",
      author: "Sarah Johnson",
      position: "HR Director, TechCorp Inc.",
      rating: 5,
    },
    {
      quote: "We've used Vista Style for all our promotional products for trade shows. Their items stand out from the competition and have helped boost our brand recognition.",
      author: "Michael Reynolds",
      position: "Marketing Manager, Innovex",
      rating: 5,
    },
    {
      quote: "The customer service at Vista Style is unmatched. They worked with us to create custom branded merchandise that perfectly represents our company values.",
      author: "Jennifer Martinez",
      position: "CEO, Martinez Consulting",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-vista-blue/5">
      <div className="container mx-auto">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Hear from businesses that have elevated their brand with Vista Style
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-white animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-vista-gold fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-semibold text-vista-blue">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
