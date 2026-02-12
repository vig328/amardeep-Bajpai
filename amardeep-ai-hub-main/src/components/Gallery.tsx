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
    description: "The world’s largest fintech gathering with 100,000+ participants from 75+ countries. Focus on AI shaping finance, risk models, payments, and customer experiences.",
    category: "Event",
    date: "2025",
    location: "Mumbai, India",
    imageUrl: "https://light-azure-1wpqme6nhh.edgeone.app/AB%20Global%20Fintech%20Festival%201.jpg",
    attendees: "100,000+",
  },
  {
    id: 2,
    title: "We360.ai CXO Round Table – Delhi Edition",
    description: "A forum bringing together visionary leaders to reimagine collaboration, inspire innovation, and shape the future of business and technology.",
    category: "Roundtable",
    date: "2025",
    location: "Delhi, India",
    imageUrl: "https://increasing-jade-fyp3eatpmz.edgeone.app/AB%20-%20We%202.jpg",
    attendees: "50+ CXOs",
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass at IILM University",
    description: "A session on Digital Marketing, SEO & SEM with MBA students. Focus on curiosity, creativity, and shared learning experiences.",
    category: "Education",
    date: "2025",
    location: "Gurgaon, India",
    imageUrl: "https://visual-harlequin-jaapzrfaey.edgeone.app/AB%20IILM%20University%201.jpg",
    attendees: "100+ students",
  },
  {
    id: 4,
    title: "Business Growth Masterclass at ISB Hyderabad",
    description: "Educational masterclass on thriving in a competitive market, business strategy, and actionable insights for future leaders.",
    category: "Education",
    date: "2025",
    location: "Hyderabad, India",
    imageUrl: "https://incredible-green-usu3uifntt.edgeone.app/AB%20ISB%20Hyderabad.jpg",
    attendees: "150+ students",
  },
  {
    id: 5,
    title: "Digital Marketing Exploration in Nairobi",
    description: "Exploring Africa’s digital economy, aligning technology with culture, and fostering global marketing conversations.",
    category: "Event",
    date: "2025",
    location: "Nairobi, Kenya",
    imageUrl: "https://evident-gray-iv0ggntd3d.edgeone.app/AB,%20Nairobi%20-%20Africa.jpg",
    attendees: "200+",
  },
  {
    id: 6,
    title: "World Digital Marketing Congress 2025",
    description: "Redefining marketing with AI-driven insights and hyper-personalized experiences.",
    category: "Event",
    date: "2025",
    location: "Mumbai, India",
    imageUrl: "https://statistical-azure-zzxx7a9jdo.edgeone.app/AB%20World%20digital%20marketing%20congress%201.jpg",
    attendees: "500+",
  },
  {
    id: 7,
    title: "Meeting Acharya Prashant",
    description: "A deep reflective discussion on consciousness, unlearning, and understanding intelligence.",
    category: "Meeting",
    date: "2025",
    location: "Delhi, India",
    imageUrl: "https://anxious-turquoise-v9mcilgufw.edgeone.app/AB%20Archarya%20Prashant.jpg",
    attendees: "Private",
  },
  {
    id: 8,
    title: "Conversation with Sameer Nigam",
    description: "Discussing leadership, emotional intelligence, and sustainable success.",
    category: "Meeting",
    date: "2025",
    location: "Bengaluru, India",
    imageUrl: "https://middle-fuchsia-gtrge9zora.edgeone.app/AB%20Sameer%20Nigam.jpg",
    attendees: "Private",
  },
  {
    id: 9,
    title: "Business Simulation at Karnavati University",
    description: "Interactive session exploring real-world challenges through a Business Simulation.",
    category: "Education",
    date: "2025",
    location: "Ahmedabad, India",
    imageUrl: "https://obliged-lavender-ox7zkaby7g.edgeone.app/AB%20-%20Dr.Salim%20Ali%20Shamsher,%20CMA.jpg",
    attendees: "120 students",
  },
  {
    id: 10,
    title: "Meeting Boman Irani",
    description: "Engaging conversation with the actor-turned-director, exploring creativity and reinvention.",
    category: "Meeting",
    date: "2025",
    location: "Chicago, USA",
    imageUrl: "https://powerful-violet-aotatsb5g0.edgeone.app/AB%20-%20Boman%20Irani.jpg",
    attendees: "Private",
  },
  {
    id: 11,
    title: "Farewell Class at HSB",
    description: "Teaching students about AI, IoT, Robotics, and Cloud Computing.",
    category: "Education",
    date: "2025",
    location: "Noida, India",
    imageUrl: "https://regional-pink-kmfuvn8pqc.edgeone.app/AB%20-%20HSB.jpg",
    attendees: "50 students",
  },
  {
    id: 12,
    title: "Meeting Shri Ramdas Athawale",
    description: "Discussion on inclusion, equality, and leadership driven by purpose.",
    category: "Meeting",
    date: "2025",
    location: "Delhi, India",
    imageUrl: "https://horrible-violet-oyemoygz07.edgeone.app/AB%20-%20Ramdas%20Athawale.jpg",
    attendees: "Private",
  },
  {
    id: 13,
    title: "Catching up with Vijay Rajagopal",
    description: "Reconnecting with a friend and exploring technology and business evolution.",
    category: "Meeting",
    date: "2025",
    location: "Delhi, India",
    imageUrl: "https://testy-copper-ps3eaigtx3.edgeone.app/AB%20-%20Vijay%20Rajagopal.jpg",
    attendees: "Private",
  },
  {
    id: 14,
    title: "AI Course Launch at JK Lakshmipat University",
    description: "Igniting a movement and empowering future leaders in Artificial Intelligence.",
    category: "Education",
    date: "2025",
    location: "Jaipur, India",
    imageUrl: "https://minimal-plum-hccfxl2urk.edgeone.app/AB%20-%20AI.jpg",
    attendees: "100+ students",
  },
  {
    id: 15,
    title: "Express Adda with Jyotiraditya Scindia",
    description: "Inspiring discussion on India’s telecom advancements and connectivity.",
    category: "Event",
    date: "2025",
    location: "New Delhi, India",
    imageUrl: "https://devoted-pink-5xps4kow3w.edgeone.app/AB%20-%20Jyotiraditya%20Scindia%201.jpg",
    attendees: "Leaders & Media",
  },
  {
    id: 16,
    title: "Prayers and Healing for Sadhguru",
    description: "Heartfelt prayers to Sadhguru during his recovery.",
    category: "Reflection",
    date: "2025",
    location: "Coimbatore, India",
    imageUrl: "https://ridiculous-pink-x8kxyaelzl.edgeone.app/AB%20-%20Sadhguru%27s.jpg",
    attendees: "Global Well-Wishers",
  },
  {
    id: 17,
    title: "Build Your Brand on LinkedIn",
    description: "Practical strategies to improve your LinkedIn presence.",
    category: "Workshop",
    date: "2025",
    location: "Online",
    imageUrl: "https://worldwide-coffee-havaichown.edgeone.app/AB%20-%20GL%20Bajaj%20institute%20of%20technology%20and%20management.jpg",
    attendees: "Global Audience",
  },
  {
    id: 18,
    title: "Visit to IIM Indore",
    description: "Engaging with the bright minds and leadership excellence at IIM Indore.",
    category: "Education",
    date: "2025",
    location: "Indore, India",
    imageUrl: "https://grieving-amethyst-vmu5vtfgr1.edgeone.app/image.png",
    attendees: "Students & Faculty",
  },
  {
    id: 19,
    title: "Meeting with Anthony Russell",
    description: "Dialogue on innovation and the future of workplace ecosystems.",
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
    <section id="gallery" className="py-24 bg-[#F8FAFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading matching Hero Typography */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 text-[#111827] leading-tight tracking-tighter">
            Moments from the <span className="text-[#6366F1]">Journey</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 font-bold transition-all ${
                selectedCategory === category 
                ? "bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-lg" 
                : "border-gray-200 text-gray-600 hover:border-[#6366F1]"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Uniform Grid - Fix for Cropping and Alignment */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] overflow-hidden bg-white flex flex-col h-full">
                  
                  {/* PHOTO CONTAINER: The Fixed "Box" */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F1F5F9] flex items-center justify-center">
                    {/* object-contain ensures the FULL photo is visible regardless of its original shape */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Badge Alignment Axis */}
                    <div className="absolute top-5 left-6 z-20">
                      <Badge className="bg-[#111827] text-white border-none px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest shadow-lg">
                        {item.category}
                      </Badge>
                    </div>

                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* CONTENT AREA: Aligned Text */}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="font-black text-xl mb-4 text-[#111827] leading-[1.2] tracking-tight group-hover:text-[#6366F1] transition-colors line-clamp-2 min-h-[2.4em]">
                      {item.title}
                    </h3>
                    
                    <div className="mt-auto space-y-3 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                        <Calendar className="h-4 w-4 text-[#6366F1] shrink-0" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-gray-400">
                        <MapPin className="h-4 w-4 text-[#6366F1] shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl rounded-[2.5rem] p-0 overflow-hidden border-none bg-white">
                <div className="grid md:grid-cols-2">
                  <div className="bg-black/95 flex items-center justify-center min-h-[400px]">
                     <img src={item.imageUrl} className="w-full h-full object-contain" alt={item.title} />
                  </div>
                  <div className="p-10 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-[#EEF2FF] text-[#6366F1] border-none px-4 py-1 font-bold">{item.category}</Badge>
                    <h3 className="text-3xl font-black text-[#111827] mb-6 leading-tight tracking-tighter">{item.title}</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">{item.description}</p>
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-black text-gray-400 block mb-1">Date</span>
                        <div className="flex items-center gap-2 font-black text-[#111827] text-sm"><Calendar className="h-4 w-4 text-[#6366F1]" />{item.date}</div>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-black text-gray-400 block mb-1">Impact</span>
                        <div className="flex items-center gap-2 font-black text-[#111827] text-sm"><Users className="h-4 w-4 text-[#6366F1]" />{item.attendees}</div>
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
