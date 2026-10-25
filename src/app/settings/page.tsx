"use client";

import { useState } from "react";
import { CourseSelectBox } from "@/components/course-select-box";
import { SelectSpecialization } from "@/components/select-specialization";
import { SemSelectBox } from "@/components/sem-select-box";
import { ToggleMode } from "@/components/toggle-mode";
import { ToggleThemeColor } from "@/components/toggle-theme-color";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/stores/data.store";
import {
  Settings,
  User,
  GraduationCap,
  Palette,
  Save,
  FileText,
  Shield,
  Info,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function SettingsPage() {
  const bottomTabsEnabled = useDataStore((state) => state.bottomTabsEnabled);
  const setBottomTabsEnabled = useDataStore(
    (state) => state.setBottomTabsEnabled,
  );

  const user = useDataStore((state) => state.user);
  const setUser = useDataStore((state) => state.setUser);

  const [name, setName] = useState(user?.name || "");
  const [enrollment, setEnrollment] = useState(user?.enrollment || "");

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: name.trim(),
      enrollment: enrollment.trim(),
    });
    toast.success("Profile details saved successfully!");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-6 md:space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
            <Settings className="size-5" />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
            Settings & Preferences
          </h1>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">
          Manage your student profile, academic semester, specialization, and interface appearance.
        </p>
      </div>

      <div className="space-y-6">
        {/* Student Profile Glass Card */}
        <div className="p-6 md:p-7 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-white/40 dark:border-white/[0.06]">
            <User className="size-4 text-primary" />
            <h2 className="text-base font-bold text-foreground">Student Identity</h2>
          </div>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl h-10"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="enrollment" className="text-xs font-semibold">
                  Enrollment Number
                </Label>
                <Input
                  id="enrollment"
                  placeholder="e.g. 230303126001"
                  value={enrollment}
                  onChange={(e) => setEnrollment(e.target.value)}
                  className="rounded-xl h-10"
                />
              </div>
            </div>

            <Button type="submit" size="default" className="rounded-xl font-semibold gap-2 shadow-xs">
              <Save className="size-4" /> Save Profile
            </Button>
          </form>
        </div>

        {/* Academic Configuration Glass Card */}
        <div className="p-6 md:p-7 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-white/40 dark:border-white/[0.06]">
            <GraduationCap className="size-4 text-primary" />
            <h2 className="text-base font-bold text-foreground">
              Academic Curriculum
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Course Program</Label>
              <CourseSelectBox showToast />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Active Semester</Label>
              <SemSelectBox showToast />
            </div>

            <div className="space-y-1.5">
              <Label className="text-xs font-semibold">Specialization Track</Label>
              <SelectSpecialization />
            </div>
          </div>
        </div>

        {/* Appearance & Themes Glass Card */}
        <div className="p-6 md:p-7 rounded-3xl bg-white/65 dark:bg-zinc-900/40 backdrop-blur-2xl backdrop-saturate-180 border border-white/60 dark:border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.85)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] space-y-5">
          <div className="flex items-center gap-2.5 pb-3 border-b border-white/40 dark:border-white/[0.06]">
            <Palette className="size-4 text-primary" />
            <h2 className="text-base font-bold text-foreground">
              Theme &amp; Interface
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-xs font-semibold">Dark / Light Mode</Label>
              <div>
                <ToggleMode />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold">Accent Color Theme</Label>
              <div>
                <ToggleThemeColor />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/40 dark:border-white/[0.06] flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="bottomTabSwitch" className="text-sm font-semibold cursor-pointer">
                Mobile Bottom Navigation Bar
              </Label>
              <p className="text-xs text-muted-foreground">
                Display fixed quick navigation icons at the bottom of the screen on mobile devices.
              </p>
            </div>
            <Switch
              id="bottomTabSwitch"
              checked={bottomTabsEnabled}
              onCheckedChange={(val) => setBottomTabsEnabled(val)}
            />
          </div>
        </div>

        {/* Legal & App Links */}
        <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-white/50 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/about" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Info className="size-3" /> About PU Vault
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Shield className="size-3" /> Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors flex items-center gap-1">
              <FileText className="size-3" /> Terms of Service
            </Link>
            <Link href="/disclaimer" className="hover:text-foreground transition-colors">
              Disclaimer
            </Link>
          </div>
          <div>Version 2.0.0</div>
        </div>
      </div>
    </div>
  );
}
