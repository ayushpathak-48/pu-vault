import { AttendanceCalcForm } from "@/components/attendance-calc-form";
import { Metadata } from "next";
import { Calculator, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Attendance Calculator & Bunk Planner | PU Vault",
  description: "Calculate your Parul University attendance percentage, check exam eligibility threshold (75%), and see how many classes you can safely miss.",
};

const AttendanceCalculatorPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-6 md:py-8 space-y-3.5 sm:space-y-6 md:space-y-8">
      <div className="text-center space-y-1.5 sm:space-y-2 max-w-lg mx-auto">
        <div className="size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-xs border border-primary/20 backdrop-blur-md">
          <Calculator className="size-5 sm:size-6" />
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Attendance & Bunk Calculator
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Input your total and attended slots to calculate your exact percentage, find out if you qualify for university exams (75% rule), and plan your bunks.
        </p>
      </div>

      <AttendanceCalcForm />

      {/* Parul University Rule Info Box */}
      <div className="w-full p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/60 dark:border-white/[0.08] shadow-xs text-xs text-muted-foreground space-y-2">
        <div className="font-bold text-foreground flex items-center gap-2">
          <ShieldCheck className="size-4 text-emerald-500" />
          Parul University Academic Policy Reminder
        </div>
        <p className="leading-relaxed">
          Under PU regulations, students must maintain at least <strong>75% attendance</strong> in each subject to be eligible to appear in end-semester examinations. Medical leave exemptions require timely submission of certificates to the Dean/HOD.
        </p>
      </div>
    </div>
  );
};

export default AttendanceCalculatorPage;
