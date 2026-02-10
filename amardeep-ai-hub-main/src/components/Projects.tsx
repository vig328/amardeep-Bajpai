import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";
import { Stethoscope, Wallet, Factory, ShoppingBag, GraduationCap, Shield } from "lucide-react";

const projects = [
  {
    title: "Healthcare AI Transformation",
    client: "Global Healthcare Provider",
    description: "Implemented AI-powered diagnostic systems and predictive analytics to improve patient outcomes and operational efficiency.",
    impact: {
      efficiency: "40% faster diagnosis",
      cost: "$5M annual savings",
      reach: "500K+ patients served"
    },
    technologies: ["Computer Vision", "NLP", "Predictive Analytics"],
    category: "Healthcare"
  },
  {
    title: "Financial Risk Intelligence Platform",
    client: "Leading Investment Bank",
    description: "Developed comprehensive AI platform for real-time risk assessment, fraud detection, and algorithmic trading optimization.",
    impact: {
      efficiency: "60% risk reduction",
      cost: "$12M value created",
      reach: "1M+ transactions daily"
    },
    technologies: ["Machine Learning", "Deep Learning", "Real-time Analytics"],
    category: "Finance"
  },
  {
    title: "Smart Manufacturing Optimization",
    client: "Fortune 500 Manufacturer",
    description: "Created AI-driven manufacturing intelligence system for predictive maintenance and supply chain optimization.",
    impact: {
      efficiency: "35% downtime reduction",
      cost: "$8M operational savings",
      reach: "50+ manufacturing plants"
    },
    technologies: ["IoT Analytics", "Predictive Modeling", "Computer Vision"],
    category: "Manufacturing"
  },
  {
    title: "Customer Experience AI Suite",
    client: "E-commerce Giant",
    description: "Built personalized recommendation engine and intelligent customer service automation platform.",
    impact: {
      efficiency: "25% conversion increase",
      cost: "$15M revenue growth",
      reach: "10M+ customers"
    },
    technologies: ["Recommendation Systems", "Chatbots", "Personalization"],
    category: "Retail"
  },
  {
    title: "Educational AI Assessment Platform",
    client: "Educational Technology Leader",
    description: "Developed adaptive learning platform with AI-powered assessment and personalized learning paths.",
    impact: {
      efficiency: "50% learning improvement",
      cost: "$3M platform value",
      reach: "200K+ students"
    },
    technologies: ["Natural Language Processing", "Adaptive Learning", "Analytics"],
    category: "Education"
  },
  {
    title: "Government Digital Transformation",
    client: "National Government Agency",
    description: "Led comprehensive AI strategy implementation for citizen services automation and policy analytics.",
    impact: {
      efficiency: "70% processing speed",
      cost: "$20M citizen value",
      reach: "5M+ citizens served"
    },
    technologies: ["Process Automation", "Data Analytics", "AI Governance"],
    category: "Government"
  }
];

// Map category to icon
const categoryIcons: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  Healthcare: Stethoscope,
  Finance: Wallet,
  Manufacturing: Factory,
  Retail: ShoppingBag,
  Education: GraduationCap,
  Government: Shield
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Transformative <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how strategic AI implementation has driven measurable results across 
            diverse industries and created lasting impact for organizations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = categoryIcons[project.category];
            return (
              <Card key={index} className="hover-lift group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                      <Icon className="h-5 w-5" />
                      {project.category}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-heading leading-tight">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {project.client}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Impact Metrics */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <TrendingUp className="h-4 w-4 text-primary mr-2" />
                        Efficiency
                      </span>
                      <span className="font-medium">{project.impact.efficiency}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 text-secondary mr-2" />
                        Value
                      </span>
                      <span className="font-medium">{project.impact.cost}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 text-accent mr-2" />
                        Reach
                      </span>
                      <span className="font-medium">{project.impact.reach}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            Cumulative Impact Across All Projects
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-sm text-muted-foreground">Total Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15M+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
