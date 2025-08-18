import { Users } from "lucide-react";
import communityAvatars from "@/assets/community-avatars.jpg";

const CommunitySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-muted-foreground mb-4">
            Join the Community
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Community Illustration */}
          <div className="relative">
            <img
              src={communityAvatars}
              alt="Community of people connected together"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary">
              You're Not Alone
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a supportive, judgement-free community where you can ask questions, 
              share progress, and connect with others who understand your journey. 
              Whether you're just starting or deep into your transformation, there's a 
              space for you here.
            </p>

            <button className="community-btn">
              <Users size={20} />
              Join the Lotessa Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;