import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Calendar, MapPin, Users } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Global Fintech Festival 2025, Mumbai",
    description:
      "The world’s largest fintech gathering with 100,000+ participants from 75+ countries. Focus on AI shaping finance, risk models, payments, and customer experiences.",
    category: "Event",
    date: "2025",
    location: "Mumbai, India",
    imageUrl: "https://light-azure-1wpqme6nhh.edgeone.app/AB%20Global%20Fintech%20Festival%201.jpg",
    attendees: "100,000+",
  },
  {
    id: 2,
    title: "We360.ai CXO Round Table – Delhi Edition",
    description:
      "A forum bringing together visionary leaders to reimagine collaboration, inspire innovation, and shape the future of business and technology.",
    category: "Roundtable",
    date: "2025",
    location: "Delhi, India",
    imageUrl: "https://increasing-jade-fyp3eatpmz.edgeone.app/AB%20-%20We%202.jpg",
    attendees: "50+ CXOs",
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass at IILM University",
    description:
      "A session on Digital Marketing, SEO & SEM with MBA students. Focus on curiosity, creativity, and shared learning experiences.",
    category: "Education",
    date: "2025",
    location: "Gurgaon, India",
    imageUrl: "https://visual-harlequin-jaapzrfaey.edgeone.app/AB%20IILM%20University%201.jpg",
    attendees: "100+ students",
  },
  {
    id: 4,
    title: "Business Growth Masterclass at ISB Hyderabad",
    description:
      "Educational masterclass on thriving in a competitive market, business strategy, and actionable insights for future leaders. Focused on innovation and entrepreneurial thinking.",
    category: "Education", // ✅ changed from Workshop → Education
    date: "2025",
    location: "Hyderabad, India",
    imageUrl: "https://incredible-green-usu3uifntt.edgeone.app/AB%20ISB%20Hyderabad.jpg",
    attendees: "150+ students",
  },
  {
    id: 5,
    title: "Digital Marketing Exploration in Nairobi",
    description:
      "Exploring Africa’s digital economy, aligning technology with culture, and fostering global marketing conversations.",
    category: "Event",
    date: "2025",
    location: "Nairobi, Kenya",
    imageUrl: "https://evident-gray-iv0ggntd3d.edgeone.app/AB,%20Nairobi%20-%20Africa.jpg",
    attendees: "200+",
  },
  {
    id: 6,
    title: "World Digital Marketing Congress 2025",
    description:
      "Redefining marketing with AI-driven insights and hyper-personalized experiences, emphasizing human creativity powered by technology.",
    category: "Event",
    date: "2025",
    location: "Mumbai, India",
    imageUrl: "https://statistical-azure-zzxx7a9jdo.edgeone.app/AB%20World%20digital%20marketing%20congress%201.jpg",
    attendees: "500+",
  },
  {
    id: 7,
    title: "Meeting Acharya Prashant",
    description:
      "A deep reflective discussion on consciousness, unlearning, and understanding intelligence, reshaping perspective and awareness.",
    category: "Meeting",
    date: "2025",
    location: "Delhi, India",
    imageUrl: "https://anxious-turquoise-v9mcilgufw.edgeone.app/AB%20Archarya%20Prashant.jpg",
    attendees: "Private",
  },
  {
    id: 8,
    title: "Conversation with Sameer Nigam",
    description:
      "Discussing leadership, emotional intelligence, work-life balance, and sustainable success through human-centric leadership.",
    category: "Meeting",
    date: "2025",
    location: "Bengaluru, India",
    imageUrl: "https://middle-fuchsia-gtrge9zora.edgeone.app/AB%20Sameer%20Nigam.jpg",
    attendees: "Private",
  },
  {
    id: 9,
    title: "Business Simulation at Karnavati University",
    description:
      "Interactive session exploring real-world challenges through a Business Simulation, enhancing perspective and practical understanding.",
    category: "Education",
    date: "2025",
    location: "Ahmedabad, India",
    imageUrl: "https://obliged-lavender-ox7zkaby7g.edgeone.app/AB%20-%20Dr.Salim%20Ali%20Shamsher,%20CMA.jpg",
    attendees: "120 students",
  },
  {
    id: 10,
    title: "Meeting Boman Irani",
    description:
      "Engaging conversation with the actor-turned-director, exploring creativity, reinvention, and lifelong learning.",
    category: "Meeting",
    date: "2025",
    location: "Chicago, USA",
    imageUrl: "https://powerful-violet-aotatsb5g0.edgeone.app/AB%20-%20Boman%20Irani.jpg",
    attendees: "Private",
  },
  {
    id: 11,
    title: "Farewell Class at HSB",
    description:
      "Teaching students about AI, IoT, Robotics, Cloud Computing, and inspiring future leaders to innovate and explore.",
    category: "Education",
    date: "2025",
    location: "Noida, India",
    imageUrl: "https://regional-pink-kmfuvn8pqc.edgeone.app/AB%20-%20HSB.jpg",
    attendees: "50 students",
  },
  {
    id: 12,
    title: "Meeting Shri Ramdas Athawale",
    description:
      "Discussion on inclusion, equality, and leadership driven by purpose and empathy, inspiring reflection and action.",
    category: "Meeting",
    date: "2025",
    location: "Delhi, India",
    imageUrl: "https://horrible-violet-oyemoygz07.edgeone.app/AB%20-%20Ramdas%20Athawale.jpg",
    attendees: "Private",
  },
  {
    id: 13,
    title: "Catching up with Vijay Rajagopal",
    description:
      "Reconnecting with a friend and exploring technology, business evolution, and exchanging valuable insights.",
    category: "Meeting",
    date: "2025",
    location: "Delhi, India",
    imageUrl: "https://testy-copper-ps3eaigtx3.edgeone.app/AB%20-%20Vijay%20Rajagopal.jpg",
    attendees: "Private",
  },
  {
    id: 14,
    title: "AI Course Launch at JK Lakshmipat University HSB",
    description:
      "Proud, excited, and humbled to launch my Artificial Intelligence course at JK Lakshmipat University HSB. This course isn’t just about learning AI—it’s about igniting a movement and empowering future leaders.",
    category: "Education",
    date: "2025",
    location: "Jaipur, India",
    imageUrl: "https://minimal-plum-hccfxl2urk.edgeone.app/AB%20-%20AI.jpg",
    attendees: "100+ students",
  },
  {
    id: 15,
    title: "Express Adda with Union Minister Jyotiraditya Scindia",
    description:
      "Inspiring discussion on India’s telecom advancements, North Eastern connectivity, and inclusive growth strategies shaping the nation’s digital future.",
    category: "Event",
    date: "2025",
    location: "New Delhi, India",
    imageUrl: "https://devoted-pink-5xps4kow3w.edgeone.app/AB%20-%20Jyotiraditya%20Scindia%201.jpg",
    attendees: "Leaders & Media",
  },
  {
    id: 16,
    title: "Prayers and Healing for Sadhguru",
    description:
      "Sending healing vibes and heartfelt prayers to Sadhguru during his recovery. His resilience and wisdom continue to inspire millions worldwide.",
    category: "Reflection",
    date: "2025",
    location: "Coimbatore, India",
    imageUrl: "https://ridiculous-pink-x8kxyaelzl.edgeone.app/AB%20-%20Sadhguru%27s.jpg",
    attendees: "Global Well-Wishers",
  },
  {
    id: 17,
    title: "How to Build Your Brand on LinkedIn",
    description:
      "Practical strategies to improve your LinkedIn presence — create value, engage meaningfully, and become a trusted industry expert.",
    category: "Workshop",
    date: "2025",
    location: "Online",
    imageUrl: "https://worldwide-coffee-havaichown.edgeone.app/AB%20-%20GL%20Bajaj%20institute%20of%20technology%20and%20management.jpg",
    attendees: "Global Audience",
  },
  {
    id: 18,
    title: "Visit to IIM Indore",
    description:
      "Delighted to engage with the bright minds of IIM Indore. Their curiosity and energy reflect the institute’s excellence in leadership education.",
    category: "Education",
    date: "2025",
    location: "Indore, India",
    imageUrl: "https://grieving-amethyst-vmu5vtfgr1.edgeone.app/image.png",
    attendees: "Students & Faculty",
  },
  {
    id: 19,
    title: "Meeting with Facebook’s Anthony Russell",
    description:
      "Engaging dialogue with Anthony Russell from Facebook on innovation, digital transformation, and the future of workplace ecosystems.",
    category: "Meeting",
    date: "2025",
    location: "Mumbai, India",
    imageUrl: "https://zealous-silver-mvx82e2x5c.edgeone.app/AB%20-%20Mr.Anthony%20Russell.jpg",
    attendees: "Leadership Team",
  },
];

const categories = ["All", "Event", "Roundtable", "Workshop", "Education", "Meeting", "Reflection"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Moments from the <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A visual journey through masterclasses, events, meetings, and meaningful collaborations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover-lift overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Badge className="absolute top-3 left-3 bg-black/80 text-white border-0 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-heading font-semibold text-base sm:text-lg mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <Calendar className="h-3 w-3" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Badge className="mb-4">{item.category}</Badge>
                    <h3 className="text-3xl font-heading font-bold mb-4">{item.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
