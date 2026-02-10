import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
  ArrowUp,
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "AI Strategy", href: "/services" },
    { name: "Machine Learning", href: "/services" },
    { name: "Digital Transformation", href: "/services" },
    { name: "Executive Training", href: "/services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Media", href: "/media" },
    { name: "FAQ", href: "/faq" },
  ],
  resources: [
    { name: "Gallery", href: "/gallery" },
    { name: "Case Studies", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/amardeepbajpaiofficial/",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/Amardeep.Webisdom",
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/amardeepbajpai",
    label: "Twitter (X)",
    color: "#000000",
  },
  {
    icon: Linkedin,
    href: "https://in.linkedin.com/in/amardeepbajpai",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/@amardeepbajpai",
    label: "YouTube",
    color: "#FF0000",
  },
  {
    icon: Mail,
    href: "mailto:contact@amardeepbajpai.com",
    label: "Email",
    color: "#FFC107",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("newsletter_subscriptions")
        .insert([{ email: email.toLowerCase() }]);

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Subscription Failed",
        description: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                Amardeep Bajpai
              </h3>
              <p className="text-white/90 leading-relaxed max-w-md">
                Leading AI expert and thought leader driving transformative
                solutions in artificial intelligence. Helping organizations
                navigate the future through innovative AI strategies.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                <a href="mailto:contact@amardeepbajpai.com" className="text-white">
                  @amardeepbajpaiofficial
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-yellow-300 flex-shrink-0" />
                <a href="tel:+919910121485" className="text-white">
                  +91-9910121485
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm"
                >
                  <social.icon
                    className="h-5 w-5"
                    style={{ color: social.color }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-white/90">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-white/90">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-white/90">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 p-8 rounded-xl bg-white/10 border border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-heading font-bold mb-3 text-white">
              Stay Updated with AI Insights
            </h3>
            <p className="text-white/90 mb-6">
              Subscribe to receive the latest insights, case studies, and
              exclusive content on AI innovation.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white text-white placeholder:text-white/70"
                disabled={isSubmitting}
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="sm:w-auto bg-yellow-400 text-black"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/80">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Amardeep Bajpai. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-white">
                Terms of Service
              </a>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-white text-white bg-transparent"
          >
            <ArrowUp className="h-4 w-4 mr-2 text-white" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
