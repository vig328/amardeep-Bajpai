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

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <div className="flex flex-col items-start text-left">
            {/* Badge: Added mt-6 to bring it down, hover:bg-same to disable highlight */}
            <Badge
              className="mt-6 mb-8 bg-[#EEF2FF] hover:bg-[#EEF2FF] text-[#6366F1] border-[#E0E7FF] px-5 py-2 rounded-full text-sm font-semibold tracking-wide cursor-default transition-none"
            >
              🚀 AI & Digital Transformation Leader | Entrepreneur | Educator
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-[#111827] leading-[1.1]">
              Amardeep Bajpai <br />
              <span className="text-[#6366F1]">
                Transforming Innovation into Business Growth
              </span>
            </h1>

            <div className="text-lg text-[#4B5563] leading-relaxed max-w-2xl mb-2">
              <p className="mb-4">
                With over 15 years of experience in AI, digital transformation,
                entrepreneurship, e-commerce, marketing, and strategy consulting,
                Amardeep Bajpai stands at the intersection of innovation and
                business growth.
              </p>

              {showMore && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
                  <p>
                    As the Founder & CEO of Webisdom, Amardeep has built one of
                    India’s leading digital transformation companies, serving clients
                    such as Domino’s, IFB Appliances, MakeMyTrip, and Tata.
                  </p>
                  <p>
                    Beyond entrepreneurship, Amardeep serves as a Visiting Professor
                    at MDI Gurgaon and IMT Ghaziabad, mentoring professionals in e-commerce
                    strategy and branding.
                  </p>
                </div>
              )}
            </div>

            <button
              className="mb-10 text-[#6366F1] font-bold text-sm flex items-center gap-1 hover:text-[#4F46E5] transition-colors"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read Less ↑" : "Read More ↓"}
            </button>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-8 mb-12 border-t border-gray-100 pt-8 w-full">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-[#6366F1]" />
                <span className="text-xs font-bold text-[#374151] uppercase tracking-widest">15+ Years Exp.</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#6366F1]" />
                <span className="text-xs font-bold text-[#374151] uppercase tracking-widest">300+ Brands</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#6366F1]" />
                <span className="text-xs font-bold text-[#374151] uppercase tracking-widest">5 Unicorns Scaled</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <BookingForm
                trigger={
                  <Button size="lg" className="bg-[#4F46E5] hover:bg-[#3730A3] text-white rounded-xl px-10 py-7 text-lg font-bold shadow-xl shadow-indigo-100 group transition-all">
                    Book Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              {/* Explore Services Button: Removed hover:bg-[#F9FAFB] to keep it static */}
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-xl px-10 py-7 text-lg font-bold border-2 border-[#E5E7EB] bg-white text-[#111827] hover:bg-white hover:text-[#111827] transition-none" 
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[550px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
              <img
                src={heroImage}
                alt="Amardeep Bajpai"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E40AF]/60 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-300/20 blur-[100px] rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-300/20 blur-[100px] rounded-full -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
