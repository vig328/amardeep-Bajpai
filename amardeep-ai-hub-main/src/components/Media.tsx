// src/components/Media.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Mic } from "lucide-react";

const mediaItems = [
  {
    title: "IoT for Digital Transformation",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/iot-digital-transformation-amardeep-bajpai/?trackingId=hVdGS7yrT0264qS8dZEeGw%3D%3D",
    date: "Sep 8, 2015",
    description: "The Internet of Things (IoT) is revolutionizing the digital world by connecting people, processes, and devices—driving smarter decisions, efficiency, and new business opportunities.",
    category: "Article"
  },
  {
    title: "Transforming into Phygital - When Digital and Physical Marketing Intertwine",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/transforming-phygital-when-digital-physical-marketing-bajpai/?trackingId=hVdGS7yrT0264qS8dZEeGw%3D%3D",
    date: "Sep 18, 2015",
    description: "Discover how Phygital marketing merges online and offline experiences, empowering brands to connect meaningfully and grow faster.",
    category: "Article"
  },
  {
    title: "Are you prepared for the Digital Disruption battlefield?",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/you-prepared-digital-disruption-battlefield-amardeep-bajpai/?trackingId=hVdGS7yrT0264qS8dZEeGw%3D%3D",
    date: "Oct 9, 2015",
    description: "Digital disruption poses both challenges and opportunities, rewarding businesses that embrace innovation, mobile, and social strategies.",
    category: "Article"
  },
  {
    title: "Why Your Business Needs Mobile App?",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/why-your-business-needs-mobile-app-amardeep-bajpai/?trackingId=hVdGS7yrT0264qS8dZEeGw%3D%3D",
    date: "Oct 14, 2015",
    description: "Mobile apps are transforming business promotion by enhancing customer engagement, brand visibility, and revenue growth.",
    category: "Article"
  },
  {
    title: "What if you could Quantify User Experience of your Website?",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/what-you-could-quantify-user-experience-your-website-amardeep-bajpai/?trackingId=hVdGS7yrT0264qS8dZEeGw%3D%3D",
    date: "Oct 16, 2015",
    description: "Optimizing user experience through tools like the UX Index helps brands enhance engagement, improve ROI, and gain a competitive edge.",
    category: "Article"
  },
  {
    title: "Start ups: Endure the short term pain for long term benefits",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/start-ups-endure-short-term-pain-long-benefits-amardeep-bajpai/?trackingId=JWnWUzqgSyCfWhDG6VMSFw%3D%3D",
    date: "Oct 28, 2015",
    description: "Building a start-up requires patience, determination, and a clear goal—overcoming short-term challenges leads to long-term growth and success.",
    category: "Article"
  },
  {
    title: "CIOs: Take a call on the right Digital transformation culture for your Organisation",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/cios-take-call-right-digital-transformation-culture-your-bajpai/?trackingId=JWnWUzqgSyCfWhDG6VMSFw%3D%3D",
    date: "Oct 30, 2015",
    description: "Successful digital transformation requires visionary leadership, tech-savvy boards, and an agile culture to drive innovation and customer-centric growth.",
    category: "Article"
  },
  {
    title: "Digital Transformation Challenges in High Tech Industries",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/digital-transformation-challenges-high-tech-amardeep-bajpai/?trackingId=JWnWUzqgSyCfWhDG6VMSFw%3D%3D",
    date: "Nov 4, 2015",
    description: "High-tech companies face digital transformation challenges in data management, customer engagement, and agile operations amid rapid technological change.",
    category: "Article"
  },
  {
    title: "As the company grows, so does the role of a CEO",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/company-grows-so-does-role-ceo-amardeep-bajpai/?trackingId=JWnWUzqgSyCfWhDG6VMSFw%3D%3D",
    date: "Nov 7, 2015",
    description: "A CEO drives strategy, builds culture, and leads transformation while navigating complex business landscapes and setting the tone for organizational success.",
    category: "Article"
  },
  {
    title: "The Curious Cases of Housing, LocalBanya and TinyOwl",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/curious-cases-housing-localbanya-tinyowl-amardeep-bajpai/?trackingId=JWnWUzqgSyCfWhDG6VMSFw%3D%3D",
    date: "Dec 1, 2015",
    description: "Lessons from Indian start-ups: adapt to the market, innovate frugally, and build for sustainability.",
    category: "Article"
  },
  {
    title: "4 Biggest Challenges I faced while running a Start-Up",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/4-biggest-challenges-i-faced-while-running-start-up-amardeep-bajpai/?trackingId=JWnWUzqgSyCfWhDG6VMSFw%3D%3D",
    date: "Dec 16, 2015",
    description: "Navigating a start-up comes with challenges like positioning, finding the right talent, handling failures, and adapting to market changes—overcoming them is key to sustainable growth.",
    category: "Article"
  },
  {
    title: "Do not be a Start-up Slut",
    outlet: "LinkedIn",
    url: "https://www.linkedin.com/pulse/do-start-up-slut-amardeep-bajpai/?trackingId=JWnWUzqgSyCfWhDG6VMSFw%3D%3D",
    date: "April 11, 2016",
    description: "Many startups fail because entrepreneurs focus on showy appearances and fundraising rather than executing a solid, revenue-driven business model.",
    category: "Article"
  }
];


const podcastItems = [
  { title: "Adversarial And Malicious AI networks", outlet: "LinkedIn", date: "Oct 15, 2025", description: "Join Amardeep Bajpai for an insightful podcast on AI & digital transformation where he shares real-world strategies for startup to unicorn growth.", url: "https://www.linkedin.com/events/7383842218748334080/?originTrackingId=gAj8LlCAQhOqupMKPcJXnQ%3D%3D", category: "Podcast" },
  { title: "Autonomous weapons part 2", outlet: "LinkedIn", date: "Oct 10, 2025", description: "Tune in to explore live insights on AI-driven growth and digital strategy with Amardeep Bajpai — your roadmap from startup to scale.", url: "https://www.linkedin.com/events/7382010709053939712/?originTrackingId=ouNKMa4RQ6Oyo04UIRE3nA%3D%3D", category: "Podcast" },
  { title: "Autonomous weapons part 2", outlet: "LinkedIn", date: "Oct 8, 2025", description: "Tune in to explore live insights on AI-driven growth and digital strategy with Amardeep Bajpai — your roadmap from startup to scale.", url: "https://www.linkedin.com/events/7381285748873998336/?originTrackingId=zc%2FZPXFcRvOVGAKZ%2F8%2FwrQ%3D%3D", category: "Podcast" },
  { title: "Autonomous weapons", outlet: "LinkedIn", date: "Oct 1, 2025", description: "Join Amardeep Bajpai for a live session unpacking AI trends and digital strategy insights to empower startups and professionals.", url: "https://www.linkedin.com/events/7378767875509055488/?originTrackingId=vQ9xHVNTQJme5XMGAr3ouQ%3D%3D", category: "Podcast" },
  { title: "The ai revolution in land of Gurukuls", outlet: "LinkedIn", date: "Sep 24, 2025", description: "Join Amardeep Bajpai for a forward-looking session where AI meets actionable strategy to accelerate growth.", url: "https://www.linkedin.com/events/7376219654681260032/?originTrackingId=u4RjECbrRJqu4bK3Lqg1Ng%3D%3D", category: "Podcast" },
  { title: "The ai revolution in land of Gurukuls", outlet: "LinkedIn", date: "Sep 17, 2025", description: "Catch Amardeep Bajpai on this podcast as he dives into actionable ways AI and digital strategy can power your growth story.", url: "https://www.linkedin.com/events/7373728875375316995/?originTrackingId=F58zDP%2B4SeC%2FdZjaw5e2YA%3D%3D", category: "Podcast" },
  { title: "AI Generated Influencers", outlet: "LinkedIn", date: "Sep 10, 2025", description: "Join Amardeep Bajpai and Unnati Harjani as they delve into the ethical implications of AI in warfare—should autonomous weapons decide who lives?", url: "https://www.linkedin.com/events/7371148881075597313/?originTrackingId=SAacSo%2BYRVWnhoey8WyHqQ%3D%3D", category: "Podcast" },
  { title: "The hidden personality of artificial intelligence", outlet: "LinkedIn", date: "Sep 3, 2025", description: "Join Amardeep Bajpai and Unnati Harjani as they delve into the ethical implications of AI in warfare—should autonomous weapons decide who lives?", url: "https://www.linkedin.com/events/7368586020004524032/?originTrackingId=tVLEpEGGTYa1uGpETiQ4iQ%3D%3D", category: "Podcast" },
  { title: "Scaling Smarter – How AI Turns Chaos into Growth", outlet: "LinkedIn", date: "Aug 27, 2025", description: "Discover how AI transforms chaos into growth with Amardeep Bajpai in this insightful ‘Scaling Smarter’ session.", url: "https://www.linkedin.com/events/7366058912057339904/?originTrackingId=ZcIObl75R7WhAJfH0DvWCw%3D%3D", category: "Podcast" },
  { title: "AI for Business Leaders: From Hype to Hands-On Growth", outlet: "LinkedIn", date: "Aug 20, 2025", description: "Join Amardeep Bajpai as he discusses how AI can transform chaos into structured growth in this insightful episode of 'Scaling Smarter'.", url: "https://www.linkedin.com/events/7363156302660866049/?originTrackingId=EJY1fL9xRs2ilLiQzU%2FIkg%3D%3D", category: "Podcast" },
  { title: "THE AI APOCALYPSE OR GOLDEN AGE", outlet: "LinkedIn", date: "Aug 13, 2025", description: "Join Amardeep Bajpai as he explores how AI transforms chaos into structured growth in this insightful episode of 'Scaling Smarter'.", url: "https://www.linkedin.com/events/7360947182587301889/?originTrackingId=psXs1BkmSkyQVNox7lShGw%3D%3D", category: "Podcast" },
];

export default function Media() {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="media" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Articles Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Published <span className="text-gradient">Articles & Insights</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A curated collection of thought-provoking articles exploring innovation, technology, and leadership — published on LinkedIn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {mediaItems.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleClick(item.url)}
              className="hover-lift group cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" />
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <CardTitle className="text-xl font-heading mb-1">{item.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{item.outlet}</p>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Podcast Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Latest <span className="text-gradient">Podcasts</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Listen to Amardeep Bajpai share insights on AI, startups, and digital strategy through engaging podcasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcastItems.map((item, index) => (
            <Card
              key={index}
              onClick={() => handleClick(item.url)}
              className="hover-lift group cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs flex items-center gap-1">
                    <Mic className="w-3.5 h-3.5" />
                    {item.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <CardTitle className="text-xl font-heading mb-1">{item.title}</CardTitle>
                <p className="text-sm text-primary font-medium">{item.outlet}</p>
              </CardHeader>
              <CardContent>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
