import { Palette, Lightbulb, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Smart Tracking",
      description: "Monitor your medication, symptoms, and progress with intuitive tools designed for GLP-1 users."
    },
    {
      icon: Lightbulb,
      title: "Expert Insights",
      description: "Access evidence-based information about GLP-1 medications, alternatives, and best practices."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with others navigating similar health journeys and share experiences."
    },
    {
      icon: Award,
      title: "Personalized Care",
      description: "Get tailored recommendations based on your unique health data and treatment plan."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Lotessa</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Lotessa is your trusted companion in the evolving world of GLP-1 medications. 
                We understand that navigating medication changes, price fluctuations, and treatment 
                alternatives can be overwhelming.
              </p>
              
              <p>
                Our platform combines cutting-edge technology with evidence-based health insights 
                to help you maintain continuity in your health journey, regardless of market changes 
                or medication switches.
              </p>
              
              <p>
                Whether you're continuing with your current treatment, exploring alternatives, 
                or pausing medication, Lotessa provides the tools and support you need to make 
                informed decisions with confidence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Users Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">6+</div>
                <div className="text-sm text-muted-foreground">GLP-1 Medications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Health Tracking</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="hover-lift bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;