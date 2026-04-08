import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { motion, Variants } from "framer-motion";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({ title: "Validation Error", description: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      // Mapping firstName and lastName to 'name' for database compatibility
      const submissionData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        topic: "General Inquiry", // Default topic
        message: formData.message
      };

      const { error } = await supabase.from('contacts').insert([submissionData]);
      if (error) throw error;
      
      toast({ title: "Success!", description: "Your message has been sent successfully!" });
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send message.";
      toast({ title: "Error", description: errorMessage, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-40 bg-[#F6F8F7] relative overflow-hidden font-sora">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
           variants={itemVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="mb-24 text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 uppercase">
            Contact Us
          </h1>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_auto_1fr] gap-12 lg:gap-20 items-start"
        >
          {/* Left Column: Heading + Form */}
          <div className="space-y-16">
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[1.1] whitespace-pre-line"
            >
              Fill the form.{"\n"}
              It's easy.
            </motion.h2>

            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit} 
              className="space-y-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="relative group">
                  <Input
                    placeholder="First name"
                    className="placeholder:text-black/30 bg-transparent border-0 border-b border-black/10 rounded-none h-14 px-0 focus-visible:ring-0 focus-visible:border-[#2FB4A5] transition-all duration-300 font-sora text-lg"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2FB4A5] group-focus-within:w-full transition-all duration-500" />
                </div>

                <div className="relative group">
                  <Input
                    placeholder="Last name"
                    className="placeholder:text-black/30 bg-transparent border-0 border-b border-black/10 rounded-none h-14 px-0 focus-visible:ring-0 focus-visible:border-[#2FB4A5] transition-all duration-300 font-sora text-lg"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2FB4A5] group-focus-within:w-full transition-all duration-500" />
                </div>
              </div>

              <div className="relative group">
                <Input
                  type="email"
                  placeholder="Email"
                  className="placeholder:text-black/30 bg-transparent border-0 border-b border-black/10 rounded-none h-14 px-0 focus-visible:ring-0 focus-visible:border-[#2FB4A5] transition-all duration-300 font-sora text-lg"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2FB4A5] group-focus-within:w-full transition-all duration-500" />
              </div>

              <div className="relative group">
                <Textarea
                  placeholder="Write your message"
                  rows={4}
                  className="placeholder:text-black/30 bg-transparent border-0 border-b border-black/10 rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-[#2FB4A5] transition-all duration-300 font-sora text-lg resize-none min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2FB4A5] group-focus-within:w-full transition-all duration-500" />
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-4"
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 px-10 bg-[#FF8A73] hover:bg-[#FF8A73]/90 text-white font-bold rounded-none transition-all duration-300 text-base uppercase tracking-widest min-w-[200px]"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </motion.form>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] bg-black/10 h-[80%] self-center mx-4" />

          {/* Right Column: Info Content */}
          <div className="lg:pt-2">
            <motion.div variants={itemVariants} className="space-y-10">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight">
                Let's talk about <br />
                <span className="text-[#2FB4A5]">everything.</span>
              </h3>
              
              <div className="space-y-8">
                <p className="text-black/60 text-lg md:text-xl leading-relaxed max-w-md">
                  We're here to help you navigate your journey. Whether it's support, 
                  partnerships, or just a friendly hello.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;