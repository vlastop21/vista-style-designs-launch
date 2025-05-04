
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-vista-blue mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: May 4, 2025</p>
          
          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            These Terms of Service constitute a legally binding agreement made between you and Vista Style Inc. ("we," "us," or "our") concerning your use of our website and services. By accessing our website, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, you may not access the website or use any of our services.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">2. Products and Services</h2>
          <p className="mb-4">
            Vista Style Inc. provides corporate apparel, promotional products, logo embroidery, and custom design services. All products and services are subject to availability. We reserve the right to discontinue any product or service at any time.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">3. Ordering and Payment</h2>
          <p className="mb-4">
            When placing an order, you agree to provide current, complete, and accurate information. All payments must be received in full before the production of orders begins, unless otherwise specified in a written agreement. We accept various payment methods as indicated on our website or provided during the order process.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">4. Shipping and Delivery</h2>
          <p className="mb-4">
            Shipping times are estimates and cannot be guaranteed. We are not responsible for delays caused by shipping carriers or customs. Risk of loss and title for items purchased pass to you upon delivery to the shipping carrier.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            Our website and its entire contents, features, and functionality are owned by Vista Style Inc. and are protected by copyright, trademark, and other intellectual property laws. When you provide logos or designs for our services, you represent that you have the rights to use such content and to grant us the right to use it for fulfilling your order.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            In no event will Vista Style Inc., or its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services or products.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">7. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms of Service at any time. We will inform you of any changes by updating the "Last updated" date of these Terms of Service. Your continued use of the website after such modifications will constitute your acknowledgment and acceptance of the modified terms.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">8. Contact Us</h2>
          <p className="mb-4">
            For any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mb-4">
            <strong>Vista Style Inc.</strong><br />
            201-1065 Canadian Pl #1116<br />
            Mississauga ON L4W 0C2<br />
            info@vistastyleinc.com<br />
            (249) 733-8973
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
