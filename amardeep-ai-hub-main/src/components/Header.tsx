import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";
import logo from "@/assets/AB-logo.png";

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
        "fixed top-0 left-0 right-0 z-50",
        "bg-[#3B82F6] shadow-lg border-b border-white/10"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar height = 80px */}
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO SECTION */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Amardeep Bajpai Logo" 
                className="h-[70px] w-auto object-contain drop-shadow-lg transition-all duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide transition-colors duration-200",
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
                  className="bg-[#FFD700] text-blue-900 font-bold hover:bg-yellow-400 rounded-md px-5 py-2 shadow-md transition-transform active:scale-95"
                >
                  Book Consultation
                </Button>
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 border-t border-white/10 px-4 py-4 space-y-3">
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
