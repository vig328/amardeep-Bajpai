import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  BarChart,
  Megaphone,
  Sparkles,
  ShoppingBag,
  LineChart,
  Brain,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import BookingForm from "./BookingForm";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description:
      "Strategic guidance for startups and enterprises to streamline business models, identify growth levers, and adopt digital transformation frameworks that drive profitability.",
    features: [
      "Business Model Optimization",
      "Growth Strategy Design",
      "Digital Transformation Roadmap",
      "Profitability Enhancement"
    ],
    color: "primary"
  },
  {
    icon: BarChart,
    title: "Management Consulting",
    description:
      "Comprehensive consulting support covering market entry strategy, operational efficiency, and data-driven decision-making to enhance organizational performance.",
    features: [
      "Market Entry Strategy",
      "Operational Optimization",
      "Performance Benchmarking",
      "Data-driven Decisions"
    ],
    color: "secondary"
  },
  {
    icon: Megaphone,
    title: "Advertising & Marketing Consulting",
    description:
      "Integrated marketing strategies combining digital campaigns, brand positioning, and customer engagement to maximize ROI across all channels.",
    features: [
      "Digital Campaign Strategy",
      "Brand Positioning",
      "Customer Engagement",
      "ROI Optimization"
    ],
    color: "accent"
  },
  {
    icon: Sparkles,
    title: "Brand Consulting",
    description:
      "Expertise in building and rejuvenating brands with a focus on identity, messaging, and long-term market impact.",
    features: [
      "Brand Identity Development",
      "Rebranding Strategy",
      "Messaging Framework",
      "Market Impact Analysis"
    ],
    color: "primary"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce & Digital Transformation Strategy",
    description:
      "End-to-end digital roadmap development covering e-commerce architecture, mobile strategy, and AI-enabled automation for seamless customer journeys.",
    features: [
      "E-Commerce Architecture",
      "Mobile-first Strategy",
      "AI Automation Planning",
      "Customer Experience Design"
    ],
    color: "secondary"
  },
  {
    icon: LineChart,
    title: "Web Analytics & Data Strategy",
    description:
      "Implementing and managing analytics frameworks that turn insights into action, supporting business intelligence and marketing optimization.",
    features: [
      "Analytics Framework Setup",
      "Data-driven Insights",
      "Business Intelligence",
      "Marketing Optimization"
    ],
    color: "accent"
  },
  {
    icon: Brain,
    title: "AI & Innovation Advisory",
    description:
      "Helping organizations identify, prototype, and implement AI-driven solutions that unlock efficiency and scale.",
    features: [
      "AI Opportunity Identification",
      "Prototype Development",
      "Implementation Support",
      "Innovation Strategy"
    ],
    color: "primary"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Strategic <span className="text-gradient">Consulting Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            From business strategy to digital transformation, Amardeep Bajpai offers end-to-end 
            consulting solutions that help organizations innovate, scale, and achieve sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift group cursor-pointer">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-${service.color}/10`}
                >
                  <service.icon className={`h-6 w-6 text-${service.color}`} />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Availability Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Available for Consulting Engagements
          </h3>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Available for consulting — Remote or In Person (South Delhi).  
            Engagements include Management Consulting, Marketing Consulting, Brand Consulting, 
            and Business Advisory.
          </p>
          <div className="flex justify-center">
            <BookingForm
              trigger={
                <Button variant="secondary" size="lg" className="group">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
