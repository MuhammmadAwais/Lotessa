import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useAnalytics } from "@/features/telemetry/hooks/useAnalytics";
import { toast } from "sonner";
interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const WaitlistDialog = ({
  open,
  onOpenChange
}: WaitlistDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    usingMedication: "",
    journeyStage: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { getBrowserId } = useAnalytics();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form fields
      if (!formData.name.trim()) {
        toast.error("Please enter your name");
        return;
      }
      if (!formData.email.trim()) {
        toast.error("Please enter your email");
        return;
      }
      if (!formData.email.includes('@')) {
        toast.error("Please enter a valid email address");
        return;
      }
      if (!formData.usingMedication) {
        toast.error("Please select if you are currently using a GLP-1 medication");
        return;
      }
      if (!formData.journeyStage) {
        toast.error("Please select your stage of journey");
        return;
      }

      // Save to Supabase
      const { error } = await supabase
        .from('waitlist')
        .insert({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          using_medication: formData.usingMedication,
          journey_stage: formData.journeyStage,
          browser_id: getBrowserId()
        });

      if (error) {
        console.error('Error saving to waitlist:', error);
        toast.error("Something went wrong. Please try again.");
        return;
      }

      toast.success("Thank you! You've been added to our waitlist.");
      onOpenChange(false);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        usingMedication: "",
        journeyStage: ""
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-xl p-8 px-[50px] py-[50px] max-h-[90vh] overflow-y-auto"
        style={{
          background: '#000000',
          border: '2px solid #2FB4A5',
          boxShadow: '0 0 60px rgba(47,180,165,0.25)',
        }}
      >
        <DialogHeader>
          <DialogTitle
            className="text-3xl font-bold text-center mb-2"
            style={{ fontFamily: "'Antonio', sans-serif", color: '#2FB4A5' }}
          >
            Be First in Line
          </DialogTitle>
          <p
            className="font-sora text-center text-lg font-medium leading-relaxed"
            style={{ color: '#F6F8F7', opacity: 0.85 }}
          >
            Leave your details and we'll notify you the moment<br />
            Lotessa is ready to download.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-sora text-sm font-semibold" style={{ color: '#F6F8F7' }}>
              Name
            </Label>
            <Input id="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} className="h-12 font-sora focus-visible:ring-[#2FB4A5] focus-visible:border-[#2FB4A5]" style={{ background: '#111', border: '1px solid #2FB4A5', color: '#F6F8F7' }} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-sora text-sm font-semibold" style={{ color: '#F6F8F7' }}>
              Email
            </Label>
            <Input id="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="h-12 font-sora focus-visible:ring-[#2FB4A5] focus-visible:border-[#2FB4A5]" style={{ background: '#111', border: '1px solid #2FB4A5', color: '#F6F8F7' }} required />
          </div>

          <div className="space-y-3">
            <Label className="font-sora text-sm font-semibold" style={{ color: '#F6F8F7' }}>
              Are you currently using a GLP-1 medication?
            </Label>
            <RadioGroup value={formData.usingMedication} onValueChange={value => setFormData({
            ...formData,
            usingMedication: value
          })} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="med-yes" className="border-[#2FB4A5] text-[#2FB4A5]" />
                <Label htmlFor="med-yes" className="font-sora text-sm" style={{ color: '#F6F8F7' }}>Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="med-no" className="border-[#2FB4A5] text-[#2FB4A5]" />
                <Label htmlFor="med-no" className="font-sora text-sm" style={{ color: '#F6F8F7' }}>No</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="thinking" id="med-thinking" className="border-[#2FB4A5] text-[#2FB4A5]" />
                <Label htmlFor="med-thinking" className="font-sora text-sm" style={{ color: '#F6F8F7' }}>Thinking about it</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="font-sora text-sm font-semibold" style={{ color: '#F6F8F7' }}>
              Stage of Journey
            </Label>
            <RadioGroup value={formData.journeyStage} onValueChange={value => setFormData({
            ...formData,
            journeyStage: value
          })} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="stage-beginner" className="border-[#2FB4A5] text-[#2FB4A5]" />
                <Label htmlFor="stage-beginner" className="font-sora text-sm" style={{ color: '#F6F8F7' }}>Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="journey" id="stage-journey" className="border-[#2FB4A5] text-[#2FB4A5]" />
                <Label htmlFor="stage-journey" className="font-sora text-sm" style={{ color: '#F6F8F7' }}>On the journey</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maintenance" id="stage-maintenance" className="border-[#2FB4A5] text-[#2FB4A5]" />
                <Label htmlFor="stage-maintenance" className="font-sora text-sm" style={{ color: '#F6F8F7' }}>Maintenance</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Coral CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 font-sora font-bold text-sm uppercase tracking-wide rounded-xl transition-all duration-300 active:scale-95 mt-8"
            style={{ background: '#FF8A73', color: '#ffffff', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
          >
            {isSubmitting ? "Joining..." : "Join the Waiting List"}
          </button>

          <p className="font-sora text-xs text-center mt-4 leading-relaxed" style={{ color: '#F6F8F7', opacity: 0.55 }}>
            Your details are safe with us. We promise not to share or sell your personal data.
            <br />
            <br />
            <span className="font-medium">*Get early access + a free starter guide when this app "arrives"</span>
          </p>
        </form>
      </DialogContent>
    </Dialog>;
};
export default WaitlistDialog;