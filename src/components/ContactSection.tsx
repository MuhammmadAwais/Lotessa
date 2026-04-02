import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { checkContactsTable, getSetupInstructions } from "@/lib/database-setup";

interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    topic: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tableExists, setTableExists] = useState<boolean | null>(null);
  const [isCheckingTable, setIsCheckingTable] = useState(true);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Check if the contacts table exists when component mounts
  useEffect(() => {
    const checkTable = async () => {
      try {
        const result = await checkContactsTable();
        setTableExists(result.tableExists);
        
        if (!result.tableExists) {
          console.warn('Contacts table does not exist:', result.message);
        }
      } catch (error) {
        console.error('Error checking table:', error);
        setTableExists(false);
      } finally {
        setIsCheckingTable(false);
      }
    };

    checkTable();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.topic || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    if (!tableExists) {
      toast({
        title: "Database Setup Required",
        description: "The contacts table doesn't exist yet. Please set up the database first.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Submitting form data:', formData);
      
      const { data, error } = await supabase
        .from('contacts')
        .insert([formData])
        .select();

      if (error) {
        console.error('Insert error:', error);
        throw error;
      }

      console.log('Successfully inserted data:', data);

      // Send email notification via edge function
      try {
        console.log('Sending email notification...');
        const emailResponse = await supabase.functions.invoke('send-contact-email', {
          body: formData
        });

        if (emailResponse.error) {
          console.error('Email sending error:', emailResponse.error);
          // Still show success for form submission, but mention email issue
          toast({
            title: "Message Saved!",
            description: "Your message has been saved successfully. We'll get back to you soon! (Email confirmation may be delayed)",
          });
        } else {
          console.log('Email sent successfully:', emailResponse.data);
          toast({
            title: "Success!",
            description: "Your message has been sent and you should receive a confirmation email shortly!",
          });
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Still show success for form submission
        toast({
          title: "Message Saved!",
          description: "Your message has been saved successfully. We'll get back to you soon! (Email confirmation may be delayed)",
        });
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        topic: "",
        message: ""
      });

    } catch (error: any) {
      console.error('Error submitting form:', error);
      
      let errorMessage = "Failed to send message. Please try again later.";
      
      if (error?.message) {
        errorMessage = error.message;
      } else if (error?.details) {
        errorMessage = error.details;
      } else if (error?.hint) {
        errorMessage = error.hint;
      }
      
      // Check for RLS policy errors specifically
      if (error?.message?.includes('row-level security policy')) {
        errorMessage = "Database security policy error. Please contact support or check the setup guide.";
        console.error('RLS Policy Error - Check fix-rls-policies.sql for solution');
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-3 lg:py-5" style={{ background: '#EFEEE7' }}>
      <div className="container mx-auto px-3 max-w-7xl">
        <div className="rounded-2xl px-[16px] py-8 lg:px-[24px] lg:py-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            className="text-display-md font-bold mb-6"
            style={{ fontFamily: "'Antonio', sans-serif", color: '#2FB4A5' }}
          >
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <h3
              className="text-3xl lg:text-4xl font-bold leading-tight"
              style={{ fontFamily: "'Antonio', sans-serif", color: '#2FB4A5' }}
            >
              We'd Love to Hear from You
            </h3>

            <p className="font-sora text-heading-lg font-semibold text-foreground leading-relaxed">
              Questions about the app? Curious about a partnership? Just want to say
              hello? Drop us a message and the Lotessa team will be in touch.
            </p>
          </div>

          {/* Right - Contact Form: teal left-accent + outer glow */}
          <div
            className="rounded-xl p-6 lg:p-8 bg-white"
            style={{
              borderLeft: '4px solid #2FB4A5',
              boxShadow: '0 0 0 1px rgba(47,180,165,0.15), 0 8px 32px rgba(47,180,165,0.10)',
            }}
          >
            {isCheckingTable ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Checking database connection...</p>
              </div>
            ) : !tableExists ? (
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="text-red-500 text-6xl mb-4">⚠️</div>
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Database Setup Required</h3>
                  <p className="text-muted-foreground mb-6">The contacts table doesn't exist yet. Please set up the database first.</p>
                  
                  <div className="bg-muted p-4 rounded-lg text-left">
                    <h4 className="font-semibold mb-2">Quick Setup Instructions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Go to your <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Supabase Dashboard</a></li>
                      <li>Select your project</li>
                      <li>Go to <strong>SQL Editor</strong> in the left sidebar</li>
                      <li>Copy and paste the SQL from <code className="bg-gray-200 px-2 py-1 rounded">setup-contacts-table.sql</code></li>
                      <li>Click <strong>Run</strong> to execute the SQL</li>
                      <li>Refresh this page and try again</li>
                    </ol>
                  </div>
                  
                  <Button 
                    onClick={() => window.location.reload()} 
                    className="mt-4"
                    variant="outline"
                  >
                    Refresh Page After Setup
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-sora text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full h-12 text-base bg-white focus:ring-2 focus-visible:ring-[#2FB4A5] focus-visible:border-[#2FB4A5]"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sora text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-12 text-base bg-white focus-visible:ring-[#2FB4A5] focus-visible:border-[#2FB4A5]"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="topic" className="block font-sora text-sm font-semibold text-foreground mb-2">
                  Topic
                </label>
                <Select value={formData.topic} onValueChange={(value) => handleInputChange('topic', value)}>
                  <SelectTrigger className="w-full h-12 text-base focus:ring-[#2FB4A5] focus:border-[#2FB4A5]">
                    <SelectValue placeholder="Select a topic" />
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
                <label htmlFor="message" className="block font-sora text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none text-base bg-white focus-visible:ring-[#2FB4A5] focus-visible:border-[#2FB4A5]"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </div>

              {/* Coral 'Send Message' button with black text */}
              <Button
                type="submit"
                className="w-full h-14 text-base font-sora font-bold uppercase tracking-wide transition-all duration-300 active:scale-95"
                style={{ background: '#FF8A73', color: '#000000', border: 'none' }}
                disabled={isSubmitting}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#e8705a'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#FF8A73'; }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;