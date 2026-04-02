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
      <DialogContent className="sm:max-w-xl bg-white p-8 px-[50px] py-[50px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center mb-2" style={{ color: '#001f3f' }}>
            Be First in Line
          </DialogTitle>
          <p className="text-center text-lg font-medium leading-relaxed" style={{ color: '#001f3f' }}>
            Leave your details and we'll notify you the moment<br />
            Lotessa is ready to download.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </Label>
            <Input id="name" type="text" placeholder="Enter your full name" value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} className="bg-muted border-0 h-12" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input id="email" type="email" placeholder="Enter your email address" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="bg-muted border-0 h-12" required />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">
              Are you currently using a GLP-1 medication?
            </Label>
            <RadioGroup value={formData.usingMedication} onValueChange={value => setFormData({
            ...formData,
            usingMedication: value
          })} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="med-yes" />
                <Label htmlFor="med-yes" className="text-sm text-foreground">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="med-no" />
                <Label htmlFor="med-no" className="text-sm text-foreground">No</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="thinking" id="med-thinking" />
                <Label htmlFor="med-thinking" className="text-sm text-foreground">Thinking about it</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">
              Stage of Journey
            </Label>
            <RadioGroup value={formData.journeyStage} onValueChange={value => setFormData({
            ...formData,
            journeyStage: value
          })} className="flex gap-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="stage-beginner" />
                <Label htmlFor="stage-beginner" className="text-sm text-foreground">Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="journey" id="stage-journey" />
                <Label htmlFor="stage-journey" className="text-sm text-foreground">On the journey</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maintenance" id="stage-maintenance" />
                <Label htmlFor="stage-maintenance" className="text-sm text-foreground">Maintenance</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-8">
            {isSubmitting ? "Joining..." : "Join the Waiting List"}
          </Button>

          <p className="text-xs text-center mt-4 leading-relaxed" style={{ color: '#001f3f' }}>
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