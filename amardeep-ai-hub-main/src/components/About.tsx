import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Target, Eye, Heart, Lightbulb } from "lucide-react";
import aboutImage from "@/assets/forabout.jpg";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Empower businesses with AI-driven strategies and digital transformation to achieve measurable growth. Turn complex challenges into simple, actionable, and impactful solutions for lasting success.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Create a future where technology and human intelligence work together seamlessly to drive progress. Enable organizations to innovate, adapt, and lead in an ever-evolving digital world.",
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Innovation with purpose, integrity, collaboration, continuous learning, and customer-first thinking. These principles guide every project, partnership, and decision for meaningful impact.",
  },
  {
    icon: Lightbulb,
    title: "Philosophy",
    description:
      "Technology should amplify human potential, not replace it, delivering results that matter. Align purpose, people, and innovation to turn vision into action and ideas into reality.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Header Section ===== */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            About <span className="text-gradient">Amardeep Bajpai</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Amardeep Bajpai is a visionary AI and Digital Transformation leader
            with over 15 years of dynamic experience across entrepreneurship,
            consulting, and strategic marketing. He combines deep technical
            insight with business acumen to design growth strategies that
            deliver tangible results. He has collaborated with 300+ brands
            globally, playing a central role in building five unicorns from the
            ground up.
          </p>
        </div>

        {/* ===== Blue Background Section (Info + Image) ===== */}
        <div className="bg-[#002b6b] text-white rounded-2xl p-10 lg:p-14 mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* ===== Left Side: Biography ===== */}
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-heading font-extrabold mb-6">
                Career Highlights
              </h3>
              <div className="prose prose-lg text-white/90 space-y-4">
                <p className="text-lg leading-relaxed">
                  <strong>Founder – Webisdom (2009 – Present):</strong> Founded a
                  leading digital transformation company specializing in UX,
                  digital technology, marketing, content creation, and digital
                  centers of excellence. Grew the company by 80% year on year,
                  built a 100+ member team, expanded operations to five Indian
                  cities and offices in Dubai and Muscat, and developed
                  proprietary mobile and internet technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Chief Marketing Officer – AskmeBazaar (2014 – 2016):</strong>{" "}
                  Led marketing strategy and digital expansion, driving user
                  acquisition and brand growth across key verticals.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Investor – 9stacks (2017 – 2021):</strong> Supported
                  innovation and scaling in India’s online gaming sector.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>Chief Marketing Officer – Raptor Supplies Limited (2019 – 2021):</strong>{" "}
                  Directed global brand and digital marketing efforts for the
                  company.
                </p>

                <h3 className="text-3xl font-heading font-extrabold mt-10">
                  Academic Background
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>PGDM (MBA Equivalent) – IIM Ahmedabad (2004 – 2006)</li>
                  <li>
                    B.Tech in Electronics & Telecommunication – H.B.T.I. (2000 – 2004)
                  </li>
                  <li>Schooling – K.V. Andrews Ganj, New Delhi</li>
                </ul>

                <h3 className="text-3xl font-heading font-extrabold mt-10">
                  Academic Engagement
                </h3>
                <p className="text-lg leading-relaxed">
                  As a Visiting Professor at MDI Gurgaon and IMT Ghaziabad,
                  Amardeep has trained professionals at Etisalat (UAE) and Khimji
                  Ramdas (Oman) in digital strategy, e-commerce, SEO, SEM, mobile
                  marketing, and crisis management.
                </p>

                <h3 className="text-3xl font-heading font-extrabold mt-10">
                  Professional Philosophy
                </h3>
                <p className="text-lg leading-relaxed">
                  Amardeep believes in innovation through research, team
                  development, and customer-centric thinking. His strength lies in
                  analytical problem-solving and results-oriented leadership that
                  bridges business vision with technology execution.
                </p>
              </div>
            </div>

            {/* ===== Right Side: Image ===== */}
            <div className="lg:w-1/2 flex justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-primary/30 rounded-2xl blur-xl opacity-25 animate-pulse-glow"></div>
                <img
                  src={aboutImage}
                  alt="Amardeep Bajpai"
                  className="relative w-full h-[520px] object-contain mix-blend-lighten drop-shadow-2xl"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Stats Section ===== */}
        <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift mb-20">
          <h3 className="text-3xl font-heading font-extrabold mb-6 text-center">
            Impact at a Glance
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">
                Years of Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">300+</div>
              <div className="text-sm text-muted-foreground">
                Global Brand Partnerships
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-sm text-muted-foreground">
                Startups Scaled to Unicorns
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/Noida,+Uttar+Pradesh,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary/5 rounded-lg p-2 transition-colors group"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-xl font-bold text-primary">Noida</div>
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                Location, India
              </div>
            </a>
          </div>
        </div>

        {/* ===== Mission, Vision, Values, Philosophy ===== */}
        <div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-center mb-12">
            Mission, Vision, Values &{" "}
            <span className="text-gradient">Philosophy</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
