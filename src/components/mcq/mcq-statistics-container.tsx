/* eslint-disable @typescript-eslint/no-explicit-any */
const StatisticsContainer = ({ stats }: { stats: any }) => {
  return (
    <div className="flex items-center justify-center gap-3 flex-col w-full">
      <div className="text-4xl font-medium text-neutral-500 my-2">
        Statistics
      </div>
      <div className="flex items-center justify-evenly w-full gap-3">
        <div className="border border-green-500 h-[120px] w-[120px] lg:h-36 lg:w-36 flex items-center justify-center rounded-full flex-col gap-3">
          <div className="font-medium ">Correct</div>
          <div className="font-bold lg:text-3xl text-green-500">
            {stats?.correct_options}
          </div>
        </div>
        <div className="border border-red-500 h-[120px] w-[120px] lg:h-36 lg:w-36 flex items-center justify-center rounded-full flex-col gap-3">
          <div className="font-medium ">Incorrect</div>
          <div className="font-bold lg:text-3xl text-red-500">
            {stats?.incorrect_options}
          </div>
        </div>
        <div className="border border-neutral-500 h-[120px] w-[120px] lg:h-36 lg:w-36 flex items-center justify-center rounded-full flex-col gap-3">
          <div className="font-medium ">Unattempted</div>
          <div className="font-bold lg:text-3xl text-neutral-500">
            {stats?.unAttempted}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsContainer;
