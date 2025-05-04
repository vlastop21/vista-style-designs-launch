
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const QuoteRequest = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real-world scenario, this would be connected to a backend
      // For now, we'll simulate the email sending
      console.log("Sending email to info@vistastyleinc.com");
      console.log("Form data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Quote request submitted successfully!", {
        description: "We'll get back to you as soon as possible."
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
      
      // Redirect to home after success
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit quote request", {
        description: "Please try again later or contact us directly."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-vista-blue mb-2">Request a Quote</h1>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you with a customized quote for your business needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <Input 
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="John"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input 
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                  placeholder="Tell us about your project, requirements, quantities, and any other details that would help us provide an accurate quote."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-vista-blue hover:bg-vista-lightblue text-white py-6"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Quote Request"}
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Your information will be handled according to our privacy policy. We'll respond to your request within 1-2 business days.
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuoteRequest;
