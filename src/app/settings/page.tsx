"use client";

import { useState } from "react";
import { CourseSelectBox } from "@/components/course-select-box";
import { SelectDivision } from "@/components/select-division";
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
  Smartphone,
  Save,
  CheckCircle2,
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
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            <Settings className="size-5" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Settings & Preferences
          </h1>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">
          Manage your student profile, academic semester, division, and interface appearance.
        </p>
      </div>

      <div className="space-y-6">
        {/* Student Profile Card */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/40">
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

            <Button type="submit" size="sm" className="rounded-xl font-semibold gap-1.5">
              <Save className="size-3.5" /> Save Profile
            </Button>
          </form>
        </div>

        {/* Academic Configuration */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/40">
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
              <Label className="text-xs font-semibold">Batch & Division</Label>
              <SelectDivision />
            </div>
          </div>
        </div>

        {/* Appearance & Themes */}
        <div className="p-6 rounded-3xl bg-card border border-border/70 shadow-sm space-y-5">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/40">
            <Palette className="size-4 text-primary" />
            <h2 className="text-base font-bold text-foreground">
              Theme & Interface
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

          <div className="pt-3 border-t border-border/40 flex items-center justify-between">
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
        <div className="p-6 rounded-3xl bg-muted/20 border border-border/50 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
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
