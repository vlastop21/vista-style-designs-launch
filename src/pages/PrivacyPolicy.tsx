
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-vista-blue mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: May 4, 2025</p>
          
          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Vista Style Inc. ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We may collect several types of information from and about users of our website, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Personal information such as name, email address, postal address, and phone number.</li>
            <li className="mb-2">Information about your internet connection, the equipment you use to access our website, and usage details.</li>
            <li className="mb-2">Information you provide when filling out forms on our website, including quote requests and contact forms.</li>
            <li className="mb-2">Records and copies of your correspondence if you contact us.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use information that we collect about you or that you provide to us:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">To present our website and its contents to you.</li>
            <li className="mb-2">To provide you with information, products, or services that you request from us.</li>
            <li className="mb-2">To fulfill any other purpose for which you provide it.</li>
            <li className="mb-2">To carry out our obligations and enforce our rights.</li>
            <li className="mb-2">To notify you about changes to our website or any products or services we offer.</li>
            <li className="mb-2">In any other way we may describe when you provide the information.</li>
            <li className="mb-2">For any other purpose with your consent.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your personal information for improper purposes.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">5. Changes to Our Privacy Policy</h2>
          <p className="mb-4">
            It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page.
          </p>

          <h2 className="text-2xl font-semibold text-vista-blue mt-8 mb-4">6. Contact Information</h2>
          <p className="mb-4">
            To ask questions or comment about this privacy policy and our privacy practices, contact us at:
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

export default PrivacyPolicy;
