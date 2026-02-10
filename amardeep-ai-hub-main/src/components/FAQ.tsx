import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import BookingForm from "./BookingForm";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What services does Amardeep Bajpai provide?",
    answer:
      "Amardeep offers a wide range of services including business and management consulting, advertising and marketing strategy, brand consulting, e-commerce transformation, web analytics, and AI advisory. Each engagement is designed to deliver measurable business impact.",
  },
  {
    question: "How can I contact Amardeep for consulting or advisory services?",
    answer:
      "You can reach out through the Contact page on this website or connect directly via LinkedIn, Instagram, YouTube, or Twitter. Amardeep is responsive to both corporate and startup consulting inquiries.",
  },
  {
    question: "What industries does Amardeep specialize in?",
    answer:
      "Amardeep has consulting experience across multiple sectors including e-commerce, healthcare, education, finance, and retail. His work focuses on using technology and data to drive business transformation across diverse industries.",
  },
  {
    question: "What makes Amardeep’s approach to AI unique?",
    answer:
      "He blends deep technical knowledge with strategic business thinking. Rather than focusing solely on technology, Amardeep ensures that every AI adoption aligns with business goals, creating real-world value and measurable outcomes.",
  },
  {
    question: "How has Webisdom contributed to digital transformation?",
    answer:
      "Under Amardeep’s leadership, Webisdom has partnered with top brands like Domino’s, IFB, MakeMyTrip, and Tata to achieve scalable digital success. The company focuses on data-driven transformation and AI-led business strategy.",
  },
  {
    question: "Does Amardeep offer online consulting sessions?",
    answer:
      "Yes, Amardeep provides both online and in-person consulting sessions from South Delhi. Virtual sessions are available for clients across India and overseas, ensuring flexibility and accessibility.",
  },
  {
    question: "What role does Amardeep play in education?",
    answer:
      "Amardeep serves as a Visiting Professor at MDI Gurgaon and IMT Ghaziabad, where he teaches digital marketing and business strategy. He integrates real-world insights from industry into his academic sessions.",
  },
  {
    question: "How can AI help my business grow?",
    answer:
      "AI enhances decision-making, improves customer engagement, and boosts operational efficiency. By leveraging AI, businesses can automate repetitive tasks, gain predictive insights, and achieve sustainable growth.",
  },
  {
    question: "Can startups collaborate with Amardeep?",
    answer:
      "Absolutely. Amardeep mentors and consults with startups to help them scale strategically. He provides guidance on innovation, market fit, and AI adoption to accelerate growth and competitiveness.",
  },
  {
    question: "What advice does Amardeep give to entrepreneurs?",
    answer:
      "He encourages entrepreneurs to focus on solving real-world problems, think long-term about scalability, and use data-driven insights for innovation. Consistency, adaptability, and integrity form the foundation of his leadership philosophy.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
            Common Questions <span className="text-gradient">Answered</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Find answers to the most common questions about consulting, AI advisory,
            and digital transformation with Amardeep Bajpai.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#004AAD] text-white rounded-2xl border border-transparent px-6 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline text-white">
                  <span className="font-heading font-semibold text-lg sm:text-xl">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-white/90">
                  <p className="leading-relaxed text-base sm:text-lg">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 shadow-soft">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
                Don’t see your question answered here? Feel free to reach out for
                personalized insights or schedule a one-on-one consultation to explore
                how Amardeep can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingForm
                  trigger={
                    <Button size="lg" className="group">
                      Schedule a Call
                      <MessageCircle className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  }
                />
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Send Message</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
