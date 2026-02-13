import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/amardeep-profile.jpg"; 
import BookingForm from "./BookingForm";
import { Link } from "react-router-dom";

export default function Hero() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#F8FAFF]"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="flex flex-col items-start text-left">
            
            <Badge
              className="mt-4 mb-6 bg-[#EEF2FF] text-black border-[#E0E7FF] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
            >
              🚀 AI & Digital Transformation Leader | Entrepreneur | Educator
            </Badge>

            {/* Responsive Typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-black mb-6 text-[#111827] leading-tight tracking-tight">
              Amardeep Bajpai
              <span className="text-[#6366F1] block mt-2">
                Transforming Innovation into Business Growth
              </span>
            </h1>

            <div className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl mb-2">
              <p className="mb-4">
                With over 15 years of experience in AI, digital transformation,
                entrepreneurship, e-commerce, marketing, and strategy consulting,
                Amardeep Bajpai stands at the intersection of innovation and
                business growth.
              </p>

              {showMore && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
                  <p>
                    Founder & CEO of Webisdom, serving brands like Domino’s,
                    IFB Appliances, MakeMyTrip, and Tata.
                  </p>
                  <p>
                    Visiting Professor at MDI Gurgaon and IMT Ghaziabad,
                    mentoring professionals in e-commerce strategy and branding.
                  </p>
                </div>
              )}
            </div>

            <button
              className="mb-8 text-[#6366F1] font-bold text-sm flex items-center gap-1 hover:text-[#4F46E5] transition-colors"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read Less ↑" : "Read More ↓"}
            </button>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-6 mb-10 border-t border-gray-100 pt-6 w-full">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#6366F1]" />
                <span className="text-xs font-bold text-[#374151] uppercase tracking-wider">
                  15+ Years Exp.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#6366F1]" />
                <span className="text-xs font-bold text-[#374151] uppercase tracking-wider">
                  300+ Brands
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#6366F1]" />
                <span className="text-xs font-bold text-[#374151] uppercase tracking-wider">
                  5 Unicorns Scaled
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <BookingForm
                trigger={
                  <Button className="bg-[#4F46E5] hover:bg-[#3730A3] text-white rounded-xl px-6 py-4 text-base font-bold shadow-lg w-full sm:w-auto">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                }
              />
              <Button 
                variant="outline" 
                className="rounded-xl px-6 py-4 text-base font-bold border-2 border-[#E5E7EB] bg-white text-[#111827] w-full sm:w-auto"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-[400px] sm:max-w-[480px] lg:max-w-[550px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Amardeep Bajpai"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF]/50 via-transparent to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
