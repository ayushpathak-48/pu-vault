import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ytVideoCategories,
  ytVideos,
} from "@/lib/constants/sem-2/yt-tutorials.constant";
// import Image from "next/image";

const page = () => {
  return (
    <div className="p-5">
      <div className="flex items-center gap-2">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full flex items-center justify-around p-1 h-max overflow-x-auto border gap-6">
            <TabsTrigger
              value={"all"}
              className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            {ytVideoCategories.map((category) => (
              // <div key={category.key}>{category.label}</div>
              <TabsTrigger
                key={category.key}
                value={category.key}
                className="py-2 data-[state=active]:bg-slate-700 data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center gap-6 p-2 mt-2 flex-wrap justify-evenly">
        {ytVideos.map((video) => (
          <div key={video.key} className="h-[214px] w-[318px] rounded-md">
            {/* <Image
              src={`https://i.ytimg.com/vi/${video.videoId}/hq720.jpg`}
              alt={video.title}
              height={214}
              width={318}
              className="rounded-md cursor-pointer"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
