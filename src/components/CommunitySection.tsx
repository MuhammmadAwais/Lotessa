import { Users } from "lucide-react";
import communityAvatars from "@/assets/community-avatars.jpg";
const CommunitySection = () => {
  return <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl p-8 lg:p-12 shadow-sm bg-[#f5f5f3]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-muted-foreground mb-4">
            Join the Community
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Community Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="max-w-md mx-auto lg:mx-0">
              <img src={communityAvatars} alt="Community of diverse people connected with dotted lines representing supportive network" className="w-full h-auto" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              You're Not Alone
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a supportive, judgement-free community where you can ask questions, 
              share progress, and connect with others who understand your journey. 
              Whether you're just starting or deep into your transformation, there's a 
              space for you here.
            </p>

            <div className="pt-4">
              <button className="community-btn">
                <Users size={20} />
                Join the Lotessa Community
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>;
};
export default CommunitySection;