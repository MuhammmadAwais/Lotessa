import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@lotessa.design",
      href: "mailto:hello@lotessa.design"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+27 123 456 789",
      href: "tel:+27123456789"
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "Johannesburg, South Africa",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Create Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{item.title}</div>
                    <a 
                      href={item.href} 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item.detail}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Ready to start a project?</h4>
              <p className="mb-6 opacity-90">
                Let's discuss your ideas and create something amazing together. 
                I'm always excited to take on new challenges and bring creative visions to life.
              </p>
              <Button 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule a Call
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="hover-lift bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <Input 
                    id="project" 
                    placeholder="Brand Identity, Website Design, etc." 
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Tell me about your project..." 
                    className="bg-background/50"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;