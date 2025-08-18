import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog = ({ open, onOpenChange }: WaitlistDialogProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    usingMedication: "",
    journeyStage: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white p-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center text-foreground mb-2">
            Be First in Line
          </DialogTitle>
          <p className="text-center text-muted-foreground text-sm leading-relaxed">
            Leave your details and we'll notify you the moment<br />
            Lotessa is ready to download.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Add text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-muted border-0 h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Add text"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-muted border-0 h-12"
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-foreground">
              Are you currently using a GLP-1 medication?
            </Label>
            <RadioGroup
              value={formData.usingMedication}
              onValueChange={(value) => setFormData({ ...formData, usingMedication: value })}
              className="flex gap-6"
            >
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
            <RadioGroup
              value={formData.journeyStage}
              onValueChange={(value) => setFormData({ ...formData, journeyStage: value })}
              className="flex gap-6"
            >
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

          <Button
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-8"
          >
            Join the Waiting List
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-4 leading-relaxed">
            Your details are safe with us. We promise not to share or sell your personal data.<br />
            <br />
            *Get early access + a free starter guide when this app "arrives"
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;