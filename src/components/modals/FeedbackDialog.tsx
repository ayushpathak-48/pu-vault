// "use client";

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { toast } from "sonner";

// // Setup Supabase client (replace with your keys)
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export const FeedbackDialog = () => {
//   const [open, setOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const feedbackSubmitted = localStorage.getItem("feedbackSubmitted");
//     if (!feedbackSubmitted) {
//       setOpen(true);
//     }
//   }, []);

//   const handleSubmit = async () => {
//     if (!feedback.trim()) {
//       toast.error("Please enter your feedback.");
//       return;
//     }

//     setLoading(true);

//     const { error } = await supabase
//       .from("feedback")
//       .insert([{ name: name || null, feedback }]);

//     setLoading(false);

//     if (error) {
//       console.error(error);
//       toast.error("Error saving feedback.");
//     } else {
//       localStorage.setItem("feedbackSubmitted", "true");
//       setOpen(false);
//       toast.success("Thanks for your feedback!");
//     }
//   };

//   return (
//     <AlertDialog open={open}>
//       <AlertDialogContent className="max-md:max-w-[93%] rounded-md">
//         <AlertDialogHeader>
//           <AlertDialogTitle>We value your feedback</AlertDialogTitle>
//           <AlertDialogDescription>
//             Please take a moment to share your thoughts with us.
//           </AlertDialogDescription>
//         </AlertDialogHeader>

//         <div className="space-y-3 py-3">
//           <Input
//             placeholder="Your name (optional)"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <Textarea
//             placeholder="Your feedback (required)"
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             required
//           />
//         </div>

//         <AlertDialogFooter>
//           <AlertDialogAction onClick={handleSubmit} disabled={loading}>
//             {loading ? "Submitting..." : "Submit"}
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { UAParser } from "ua-parser-js"; // ✅ named import, not default

// Setup Supabase client (replace with your keys)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const FeedbackDialog = () => {
  useEffect(() => {
    const feedbackSubmitted = localStorage.getItem("feedbackSubmitted");

    if (!feedbackSubmitted) {
      const saveVisit = async () => {
        const parser = new UAParser();
        const result = parser.getResult();

        const deviceType = result.device.type || "Desktop";
        const deviceModel = result.device.model || "";
        const deviceName = deviceModel
          ? `${deviceType} (${deviceModel})`
          : deviceType;

        const browser = result.browser.name || "Unknown Browser";
        const os = result.os.name || "Unknown OS";

        const { error } = await supabase.from("feedback").insert([
          {
            name: "Anonymous",
            feedback: `new-device | ${deviceName} | ${browser} | ${os}`,
          },
        ]);

        if (!error) {
          localStorage.setItem("feedbackSubmitted", "true");
        } else {
          console.error("Error saving visit:", error);
        }
      };

      saveVisit();
    }
  }, []);

  return null; // nothing rendered
};
