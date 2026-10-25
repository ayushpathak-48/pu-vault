/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
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
import { cn, sendBotMessage } from "@/lib/utils";
import { MessageSquarePlus } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

export const FeedbackFloatingDialog = ({ trigger }: { trigger?: any }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!feedback.trim()) return;
    setLoading(true);

    try {
      const supabase = getSupabaseClient();
      if (supabase) {
        const { error } = await supabase.from("feedback").insert([
          {
            name: name.trim() || "Anonymous",
            feedback,
          },
        ]);
        if (error) console.warn("Supabase feedback insert error:", error);
      }

      toast.success("Feedback submitted successfully!");
      localStorage.setItem("feedbackSubmitted", "true");
      const savedName = name;
      const savedFeedback = feedback;
      setName("");
      setFeedback("");
      setOpen(false);

      const message = `
📩 <b>New Feedback Received!</b>

👤 <b>Name:</b> ${savedName?.trim() || "Anonymous"}
💬 <b>Feedback:</b> ${savedFeedback}
🕒 <b>Time:</b> ${new Date().toLocaleString()}
      `;

      sendBotMessage({ message });
    } catch (err) {
      console.error("Error submitting feedback:", err);
      toast.error("❌ Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!trigger && (
        <div className="fixed bottom-28 right-5 lg:bottom-24 lg:right-10 z-50">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div onClick={() => setOpen(true)} className="cursor-pointer">
                  <div className="size-10 rounded-full shadow-lg bg-card border hover:border-primary/50 transition-all p-1 cursor-pointer flex items-center justify-center">
                    <MessageSquarePlus
                      className={cn(
                        "size-5 text-primary active:scale-[0.95] transition-all",
                      )}
                    />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <div>Give Feedback</div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}

      {/* Feedback Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        {trigger && (
          <DialogTrigger asChild className="p-0">
            {trigger}
          </DialogTrigger>
        )}
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>We value your feedback</DialogTitle>
          </DialogHeader>

          <Input
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-1"
          />

          <Textarea
            placeholder="Type your suggestions, issues or feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-[120px]"
          />

          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Submitting..." : "Submit Feedback"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
