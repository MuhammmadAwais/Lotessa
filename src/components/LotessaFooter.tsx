import { Heart, Download, Users, Instagram, Linkedin, Facebook } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useState } from "react";
import LegalModal from "./LegalModal";
import TermsContent from "./TermsContent";
import PrivacyContent from "./PrivacyContent";
import TermsConditionsContent from "./TermsConditionsContent";
import WaitlistDialog from "./WaitlistDialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const LotessaFooter = () => {
  const { trackInteraction } = useAnalytics();
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [waitlistDialogOpen, setWaitlistDialogOpen] = useState(false);
  const [isReportIssueOpen, setIsReportIssueOpen] = useState(false);
  const [reportForm, setReportForm] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    issue_type: 'Other'
  });
  
  return (
    <footer className="py-12 mt-16" style={{
      background: '#EFEEE7'
    }}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Logo - Separate Row */}
        <div className="flex items-center mb-6">
          <img src="/lovable-uploads/69f7fc17-c67d-4671-ade7-a76320c0adb8.png" alt="Lotessa logo" className="h-10" />
        </div>

        {/* Main Content - 2 Columns */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 min-h-[160px]">
          {/* Left Content */}
          <div className="flex flex-col justify-between px-0 my-[10px]">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
                             <button 
                 className="flex items-center justify-center"
                 onClick={() => {
                   trackInteraction('click', 'download_button_footer');
                   window.open('https://app.lotessa.app/register', '_blank');
                 }}
                 onMouseEnter={() => trackInteraction('hover', 'download_button_footer')}
               >
                 <img src="/lovable-uploads/Group 52.png" alt="Download the App" className="h-12 w-auto" />
               </button>
              
                             <button 
                 className="flex items-center justify-center"
                 onClick={() => {
                   trackInteraction('click', 'join_community_footer');
                   window.open('https://app.lotessa.app/register', '_blank');
                 }}
               >
                 <img src="/lovable-uploads/a97005af-398c-4b31-af1a-d153e144ef44.png" alt="Join the Lotessa Community" className="h-12 w-auto" />
               </button>
            </div>

            {/* Social Media - Aligned with Terms */}
            <div className="flex gap-6 mt-8 lg:mt-0 mx-[10px]">
              <a href="https://www.instagram.com/lotessa.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Instagram">
                <img src="/lovable-uploads/dd5fb84e-0a6c-4d43-a075-987ba10c3bc9.png" alt="Instagram" className="w-12 h-12" />
              </a>
              <a href="https://www.linkedin.com/company/lotessa-digital-health-ltd/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="LinkedIn">
                <img src="/lovable-uploads/ab5cf166-f44f-433b-bcff-4658d708f98e.png" alt="LinkedIn" className="w-12 h-12" />
              </a>
              <a href="https://www.facebook.com/lotessa.app" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" aria-label="Facebook">
                <img src="/lovable-uploads/e9b6ce86-0005-45cb-8b4a-eda5b5b26234.png" alt="Facebook" className="w-12 h-12" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between">
            <p className="leading-relaxed text-lg" style={{
            color: '#001f3f'
          }}>
              Lotessa is <span className="font-semibold underline">not a medical device</span> and does not provide medical advice. 
              Always consult a qualified healthcare professional regarding your health condition and treatment.
            </p>
            
            <div className="flex flex-wrap gap-6 mt-8 lg:mt-0">
              <button 
                onClick={() => {
                  setIsTermsOpen(true);
                }}
                onMouseEnter={() => {}}
                className="hover:text-primary transition-all duration-200 underline font-medium text-base cursor-pointer hover:scale-105" 
                style={{ color: '#001f3f' }}
              >
                Terms and Conditions
              </button>
              <button 
                onClick={() => {
                  setIsCookiesOpen(true);
                }}
                onMouseEnter={() => {}}
                className="hover:text-primary transition-all duration-200 underline font-medium text-base cursor-pointer hover:scale-105" 
                style={{ color: '#001f3f' }}
              >
                Cookies Policy
              </button>
              <button 
                onClick={() => {
                  setIsPrivacyOpen(true);
                }}
                onMouseEnter={() => {}}
                className="hover:text-primary transition-all duration-200 underline font-medium text-base cursor-pointer hover:scale-105" 
                style={{ color: '#001f3f' }}
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => {
                  setIsReportIssueOpen(true);
                }}
                onMouseEnter={() => {}}
                className="hover:text-primary transition-all duration-200 underline font-medium text-base cursor-pointer hover:scale-105" 
                style={{ color: '#001f3f' }}
              >
                Report an issue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
                  <LegalModal
              isOpen={isCookiesOpen}
              onClose={() => setIsCookiesOpen(false)}
              title="Website Privacy and Cookies Policy"
              content={<TermsContent />}
            />
      
      <LegalModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
        content={<PrivacyContent />}
      />
      
      <LegalModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Digital Products Terms and Conditions"
        content={<TermsConditionsContent />}
      />
      
      <WaitlistDialog open={waitlistDialogOpen} onOpenChange={setWaitlistDialogOpen} />
      
      {/* Report Issue Modal */}
      <Dialog open={isReportIssueOpen} onOpenChange={setIsReportIssueOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">Report an Issue</DialogTitle>
          </DialogHeader>
          
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                type="text"
                value={reportForm.name}
                onChange={(e) => setReportForm({...reportForm, name: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={reportForm.email}
                onChange={(e) => setReportForm({...reportForm, email: e.target.value})}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={reportForm.phone}
                onChange={(e) => setReportForm({...reportForm, phone: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="issue_type">Issue Type *</Label>
              <Select
                value={reportForm.issue_type}
                onValueChange={(value) => setReportForm({...reportForm, issue_type: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Login issue">Login issue</SelectItem>
                  <SelectItem value="Issue while entering the data">Issue while entering the data</SelectItem>
                  <SelectItem value="Registration issue">Registration issue</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Issue Description *</Label>
              <Textarea
                id="description"
                value={reportForm.description}
                onChange={(e) => setReportForm({...reportForm, description: e.target.value})}
                rows={4}
                required
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsReportIssueOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={async (e) => {
                  e.preventDefault();
                  
                  // Validate required fields
                  if (!reportForm.name || !reportForm.email || !reportForm.description || !reportForm.issue_type) {
                    toast({
                      title: "Error",
                      description: "Please fill in all required fields.",
                      variant: "destructive"
                    });
                    return;
                  }
                  
                  try {
                    // Insert the report into the database
                    const { error } = await supabase
                      .from('report_issues')
                      .insert([
                        {
                          name: reportForm.name,
                          email: reportForm.email,
                          phone: reportForm.phone || null,
                          title: reportForm.issue_type, // Use issue_type as title
                          description: reportForm.description,
                          issue_type: reportForm.issue_type,
                          status: 'open',
                          priority: 'medium'
                        }
                      ]);
                    
                    if (error) {
                      console.error('Error submitting report:', error);
                      toast({
                        title: "Error",
                        description: "Failed to submit your report. Please try again.",
                        variant: "destructive"
                      });
                    } else {
                      toast({
                        title: "Success",
                        description: "Thank you for reporting the issue. We will get back to you soon.",
                      });
                      
                      // Reset form and close modal
                      setReportForm({name: '', email: '', phone: '', description: '', issue_type: 'Other'});
                      setIsReportIssueOpen(false);
                    }
                  } catch (error) {
                    console.error('Unexpected error:', error);
                    toast({
                      title: "Error",
                      description: "An unexpected error occurred. Please try again.",
                      variant: "destructive"
                    });
                  }
                }}
                className="flex-1"
              >
                Submit Report
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default LotessaFooter;