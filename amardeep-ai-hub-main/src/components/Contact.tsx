import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  MessageCircle,
  Calendar,
  Send,
  Youtube,
  Instagram,
  Facebook,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import BookingForm from "./BookingForm";

const googleMapsUrl =
  "https://www.google.com/maps/place/Sector+62,+Noida,+Uttar+Pradesh,+India";

const contactMethods = [
  {
    icon: Instagram,
    title: "Instagram",
    description: "@amardeepbajpaiofficial",
    action: "Visit Profile",
    href: "https://instagram.com/amardeepbajpaiofficial",
  },
  {
    icon: Facebook,
    title: "Facebook",
    description: "Amardeep Bajpai",
    action: "Visit Page",
    href: "https://www.facebook.com/share/1E3fUyQy8E/?mibextid=wwXIfr",
  },
  {
    icon: Youtube,
    title: "YouTube",
    description: "Amardeep",
    action: "Subscribe",
    href: "https://youtube.com/@amardeepbajpai",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    description: "Amardeep Bajpai",
    action: "Connect",
    href: "https://linkedin.com/in/amardeepbajpai",
  },
  {
    icon: Twitter,
    title: "Twitter / X",
    description: "@amardeepbajpai",
    action: "Follow",
    href: "https://twitter.com/amardeepbajpai",
  },
  {
    icon: Mail,
    title: "Email",
    description: "info@amardeepbajpai.com",
    action: "Send Email",
    href: "mailto:info@amardeepbajpai.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+91-9910121485",
    action: "Call Now",
    href: "tel:+91-9910121485",
  },
  {
    icon: MapPin,
    title: "Corporate Office",
    description: "Sector 62, Noida, Uttar Pradesh, India",
    action: "View on Map",
    href: googleMapsUrl,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company || null,
          subject: formData.subject || null,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description:
          "Thank you for your message. I'll get back to you within 24 hours.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F8FAFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header matching your Black/Bold style */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 text-[#111827] leading-tight tracking-tighter">
            We would love to <span className="text-[#6366F1]">hear from you!</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-medium">
            Connect with Amardeep Bajpai for consulting, workshops, or speaking
            engagements. Reach out today and explore opportunities in AI and digital strategy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="h-6 w-6 text-[#6366F1]" />
              <h3 className="text-2xl font-black text-[#111827] tracking-tight">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold mb-2 text-gray-700">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Your first name"
                    className="w-full rounded-xl border-gray-200 focus:border-[#6366F1] focus:ring-[#6366F1]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold mb-2 text-gray-700">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Your last name"
                    className="w-full rounded-xl border-gray-200 focus:border-[#6366F1] focus:ring-[#6366F1]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-700">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@company.com"
                  className="w-full rounded-xl border-gray-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold mb-2 text-gray-700">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your company name"
                  className="w-full rounded-xl border-gray-200"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2 text-gray-700">
                  Subject
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border-gray-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-700">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Write your message..."
                  rows={6}
                  className="w-full rounded-xl border-gray-200"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#111827] hover:bg-black text-white rounded-xl font-bold py-6 transition-all group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Book a Consultation Section */}
            <div className="bg-[#6366F1] rounded-[1.5rem] p-8 mt-8 text-white text-center shadow-xl">
              <Calendar className="h-8 w-8 mb-4 mx-auto text-white" />
              <h3 className="text-xl font-black mb-3 tracking-tight">
                Book a Consultation
              </h3>
              <p className="mb-6 opacity-90 text-sm font-medium">
                Connect directly for AI consulting, digital strategy, or leadership workshops.
              </p>
              <BookingForm
                trigger={
                  <Button variant="secondary" size="lg" className="w-full bg-white text-[#6366F1] hover:bg-gray-100 rounded-xl font-black shadow-lg group">
                    Schedule a Call
                    <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                }
              />
            </div>
          </div>

          {/* Contact Info + Methods */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl bg-white group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#6366F1]/10 transition-colors">
                      <method.icon className="h-6 w-6 text-[#6366F1]" />
                    </div>
                    <h4 className="font-black text-[#111827] mb-1 tracking-tight">
                      {method.title}
                    </h4>
                    <p className="text-xs font-bold text-gray-400 mb-4 truncate px-2">
                      {method.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-gray-100 font-bold hover:bg-[#6366F1] hover:text-white hover:border-[#6366F1] transition-all px-6"
                      asChild
                    >
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-3xl p-6 text-center">
              <h4 className="font-black text-[#111827] mb-2">Response Time</h4>
              <p className="text-sm font-bold text-gray-400">
                All inquiries are typically answered within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
