
import { Shirt, Tags, ImageIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const serviceItems = [
    {
      title: "Corporate Apparel",
      description: "High-quality branded uniforms, shirts, jackets, and more, customized with your company logo and colors.",
      icon: <Shirt className="h-12 w-12 text-vista-blue" />,
    },
    {
      title: "Promotional Products",
      description: "Branded merchandise including pens, mugs, tech accessories, and bags that keep your brand visible.",
      icon: <Tags className="h-12 w-12 text-vista-blue" />,
    },
    {
      title: "Logo Embroidery",
      description: "Precision embroidery services that deliver durable, professional representations of your logo on any fabric.",
      icon: <ImageIcon className="h-12 w-12 text-vista-blue" />,
    }
  ];

  return (
    <section id="services" className="section-padding gradient-bg">
      <div className="container mx-auto">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We provide comprehensive branding solutions to help your business make a lasting impression
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-vista-blue text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-vista-blue/5 p-8 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-vista-blue mb-4">Custom Solutions</h3>
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for? We specialize in creating custom solutions tailored specifically to your brand requirements.
            </p>
            <Button className="bg-vista-blue hover:bg-vista-lightblue text-white">Contact Our Team</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
