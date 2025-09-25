"use client";

import React, { useState } from "react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ✅ Setup Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const FeedbackFloatingDialog = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!feedback.trim()) return;
    setLoading(true);

    try {
      const { error } = await supabase.from("feedback").insert([
        {
          name: name.trim() || "Anonymous", // 👤 fallback to Anonymous
          feedback,
        },
      ]);

      if (error) throw error;

      toast.success("Feedback submitted successfully!");
      localStorage.setItem("feedbackSubmitted", "true");
      setName("");
      setFeedback("");
      setOpen(false);
    } catch (err) {
      console.error("Error submitting feedback:", err);
      toast.error("❌ Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-5 lg:bottom-24 lg:right-10 z-50">
      {/* Floating Feedback Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div onClick={() => setOpen(true)} className="cursor-pointer">
              <div className="size-10 rounded-full shadow-lg bg-white p-1 cursor-pointer">
                <Image
                  src="/icons/feedback-icon.png"
                  alt="Feedback"
                  height={40}
                  width={40}
                  className="w-full h-full object-contain animate-pulse"
                />
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div>Give Feedback</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {/* Feedback Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>We value your feedback</DialogTitle>
          </DialogHeader>

          {/* Optional Name Field */}
          <Input
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-3"
          />

          {/* Feedback Textarea */}
          <Textarea
            placeholder="Type your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[120px]"
          />

          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
