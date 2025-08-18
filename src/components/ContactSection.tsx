import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const ContactSection = () => {
  return <section className="pt-6 pb-24 lg:pt-8 lg:pb-32 gradient-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="rounded-2xl px-[22px] py-8 lg:px-[38px] lg:py-12 shadow-sm gradient-bg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] font-normal text-[#001F3F] font-sans mb-8">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h3 className="text-[52px] font-bold text-[#001F3F] leading-tight font-sans">
              We'd Love to Hear from You
            </h3>
            
            <p className="text-slate-600 text-[18px] font-sans font-normal leading-relaxed">
              Questions about the app? Curious about a partnership? Just want to say 
              hello? Drop us a message and the Lotessa team will be in touch.
            </p>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-lg p-6 lg:p-8 shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Add text" className="w-full h-12 text-base" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Add text" className="w-full h-12 text-base" />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-foreground mb-2">
                  Topic
                </label>
                <Select>
                  <SelectTrigger className="w-full h-12 text-base">
                    <SelectValue placeholder="App Support" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="app-support">App Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" rows={6} placeholder="Add text" className="w-full resize-none text-base" />
              </div>

              <Button type="submit" className="w-full community-btn text-center justify-center h-12 text-base font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;