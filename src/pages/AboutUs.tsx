
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen gradient-bg">
        <section className="section-padding container mx-auto">
          <h1 className="section-title">About Us</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-vista-blue mb-6">
              Your Trusted Partner in Promotional Solutions
            </h2>
            
            <p className="text-gray-700 mb-8">
              Vista Style Inc. has successfully enhanced client brand visibility through exceptional 
              promotional products and cost-effective solutions since 1995. We are located in 
              Mississauga (Ontario), but serve the whole Canada via efficient shipping and 
              communication solutions.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-vista-blue mb-3">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the leading promotional agency in Canada, renowned for our commitment to 
                quality, affordability, and client satisfaction.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-vista-blue mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide businesses with affordable, high-quality promotional products that 
                elevate brand recognition and customer engagement.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutUs;
