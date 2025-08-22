import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const WorkSection = () => {
  const features = [
    {
      id: 1,
      title: "Medication Tracking",
      category: "Core Feature",
      description: "Monitor your GLP-1 medication doses, track side effects, and maintain a complete health record for informed decision-making.",
      image: project1,
      year: "2024"
    },
    {
      id: 2,
      title: "Progress Analytics",
      category: "Insights",
      description: "Visualize your health journey with comprehensive charts, weight tracking, and personalized progress reports.",
      image: project2,
      year: "2024"
    },
    {
      id: 3,
      title: "Expert Content Library",
      category: "Education",
      description: "Access evidence-based articles, medication guides, and expert insights to stay informed about your treatment options.",
      image: project3,
      year: "2024"
    }
  ];

  return (
    <section id="work" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Key</span> Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how Lotessa's comprehensive features support your GLP-1 medication journey with confidence and clarity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.id} 
              className="group hover-lift cursor-pointer creative-border bg-card/50 backdrop-blur-sm border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Feature Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {feature.year}
                  </div>
                </div>

                {/* Feature Info */}
                <div className="p-6">
                  <div className="text-sm text-accent font-medium mb-2">
                    {feature.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-accent hover:text-creative-orange transition-colors font-medium text-lg">
            Explore All Features
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;