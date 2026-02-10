import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, User, Mail, Phone, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

interface BookingFormProps {
  trigger: React.ReactNode;
  title?: string;
}

export default function BookingForm({ trigger, title = "Book Your AI Consultation" }: BookingFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.serviceType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    try {
      const { error } = await supabase.from('consultations').insert({
        user_id: user?.id || null,
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        service_interest: formData.serviceType,
        preferred_date: formData.preferredDate || null,
        preferred_time: formData.preferredTime || null,
        project_details: formData.message || null,
      });

      if (error) throw error;

      toast({
        title: "Consultation Booked!",
        description: "Thank you for your interest. I'll contact you within 24 hours to confirm your consultation.",
      });

      // Reset form and close dialog
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
      setIsOpen(false);
    } catch (error: any) {
      toast({
        title: "Booking Failed",
        description: error.message || "Could not book consultation. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center">{title}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                <User className="inline h-4 w-4 mr-1" />
                First Name *
              </label>
              <Input
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name *
              </label>
              <Input
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                <Mail className="inline h-4 w-4 mr-1" />
                Email Address *
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                <Phone className="inline h-4 w-4 mr-1" />
                Phone Number
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              <Building className="inline h-4 w-4 mr-1" />
              Company/Organization
            </label>
            <Input
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
              placeholder="Your company name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Service Interest *
            </label>
            <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service you're interested in" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-strategy">AI Strategy & Consulting</SelectItem>
                <SelectItem value="ml-solutions">Machine Learning Solutions</SelectItem>
                <SelectItem value="innovation-workshop">Innovation Workshops</SelectItem>
                <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                <SelectItem value="ai-ethics">AI Ethics & Governance</SelectItem>
                <SelectItem value="executive-training">Executive Training</SelectItem>
                <SelectItem value="general-consultation">General Consultation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Preferred Date
              </label>
              <Input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Preferred Time
              </label>
              <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select preferred time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="9:00">9:00 AM</SelectItem>
                  <SelectItem value="10:00">10:00 AM</SelectItem>
                  <SelectItem value="11:00">11:00 AM</SelectItem>
                  <SelectItem value="14:00">2:00 PM</SelectItem>
                  <SelectItem value="15:00">3:00 PM</SelectItem>
                  <SelectItem value="16:00">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Project Details
            </label>
            <Textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell me about your AI challenges, goals, and what you'd like to discuss..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Book Consultation
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}