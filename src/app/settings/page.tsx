"use client";

import { CourseSelectBox } from "@/components/course-select-box";
import { SelectDivision } from "@/components/select-division";
import { SemSelectBox } from "@/components/sem-select-box";
import { ToggleMode } from "@/components/toggle-mode";
import { ToggleThemeColor } from "@/components/toggle-theme-color";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useDataStore } from "@/stores/data.store";

const SettingsPage = () => {
  const bottomTabsEnabled = useDataStore((state) => state.bottomTabsEnabled);
  const setBottomTabsEnabled = useDataStore(
    (state) => state.setBottomTabsEnabled,
  );

  return (
    <div className="w-full p-5 flex flex-col gap-4">
      <div className="flex  gap-2 rounded-lg items-center p-2">
        <div className="font-medium text-lg">Course:</div>
        <CourseSelectBox showToast />
      </div>
      <Separator />
      <div className="flex  gap-2 rounded-lg items-center p-2">
        <div className="font-medium text-lg">Semester:</div>
        <SemSelectBox showToast />
      </div>
      <Separator />
      <div className="flex  gap-2 rounded-lg items-center p-2">
        <div className="font-medium text-lg">Division:</div>
        <SelectDivision />
      </div>
      <Separator />
      <div className="flex  gap-2 rounded-lg items-center p-2">
        <div className="font-medium text-lg">Theme Mode:</div>
        <ToggleMode />
      </div>
      <Separator />
      <div className="flex  gap-2 rounded-lg items-center p-2">
        <div className="font-medium text-lg">Theme Color:</div>
        <ToggleThemeColor />
      </div>
      <Separator />
      <div className="flex justify-between gap-2 rounded-lg items-center p-2 md:hidden">
        <Label htmlFor="bottomTabSwitch" className="font-medium text-lg">
          Bottom tabs on mobile
        </Label>
        <Switch
          id="bottomTabSwitch"
          checked={bottomTabsEnabled}
          onCheckedChange={(val) => setBottomTabsEnabled(val)}
        />
      </div>
    </div>
  );
};

export default SettingsPage;
