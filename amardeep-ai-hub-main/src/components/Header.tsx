import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Media", href: "/media" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-white/10",
        "bg-[#3B82F6] shadow-md"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* --- ENLARGED LOGO SECTION --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group relative">
              <img 
                src="https://i.ibb.co/WvFNdHRC/AB-logo-PNG-Transp.png" 
                alt="Amardeep Bajpai Logo" 
                /* Increased from h-14 to h-28 for maximum clarity */
                /* Added translate-y to center the overhang visually */
                className="h-28 w-auto object-contain drop-shadow-2xl transition-all duration-300 group-hover:scale-110 translate-y-2"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-wider transition-colors",
                  location.pathname === item.href
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-200"
                )}
              >
                {item.name}
              </Link>
            ))}
            <BookingForm
              trigger={
                <Button
                  className="bg-[#FFD700] text-blue-900 font-black hover:bg-yellow-400 rounded-md px-6 py-2 shadow-lg transition-transform active:scale-95"
                >
                  Book Consultation
                </Button>
              }
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 border-t border-white/10 px-4 py-4 space-y-2">
           {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-white py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
        </div>
      )}
    </header>
  );
}
