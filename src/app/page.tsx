import { SelectSpecialization } from "@/components/select-specialization";
import { ContentTypeTabs } from "@/components/tabs/content-type-tabs";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const specialization = cookieStore.get("specialization")?.value;
  console.log({ specialization });
  return (
    <div className="w-full">
      {!specialization && (
        <div className="p-5">
          <SelectSpecialization />
        </div>
      )}
      <ContentTypeTabs specialization={specialization} />
    </div>
  );
}
