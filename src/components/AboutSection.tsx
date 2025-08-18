import { Palette, Lightbulb, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating compelling visual narratives through color, typography, and composition."
    },
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      description: "Developing innovative solutions that align with brand goals and user needs."
    },
    {
      icon: Users,
      title: "Brand Identity",
      description: "Crafting cohesive brand experiences that resonate with target audiences."
    },
    {
      icon: Award,
      title: "Digital Art",
      description: "Exploring contemporary themes through digital mediums and interactive design."
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
                I'm a passionate creative designer with a deep appreciation for the intersection of 
                traditional African aesthetics and contemporary design principles. My work spans 
                across brand identity, digital art, and visual storytelling.
              </p>
              
              <p>
                With over 5 years of experience in the creative industry, I've had the privilege 
                of working with diverse clients, from emerging startups to established brands, 
                helping them communicate their unique stories through thoughtful design.
              </p>
              
              <p>
                My approach combines strategic thinking with artistic expression, always aiming 
                to create designs that are not only visually striking but also meaningful and 
                culturally relevant.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title} 
                className="hover-lift bg-card/50 backdrop-blur-sm border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <skill.icon className="text-accent-foreground" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
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