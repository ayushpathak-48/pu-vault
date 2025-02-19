import { SelectSpecialization } from "@/components/select-specialization";
import { ContentTypeTabs } from "@/components/tabs/content-type-tabs";

export default async function Home() {
  return (
    <div className="w-full">
      {!true && (
        <div className="p-5">
          <SelectSpecialization />
        </div>
      )}
      <ContentTypeTabs />
    </div>
  );
}
