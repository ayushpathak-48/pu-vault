/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomErrorPage } from "@/components/custom-error-page";
import { DownloadAndViewButton } from "@/components/download-and-view-button";
import { useDataGetters } from "@/hooks/use-data-getters";
import Link from "next/link";
import React from "react";

const AsssignmentsPage = () => {
    const { getAssignments } = useDataGetters();
    const assignments = getAssignments();

    if (assignments.length == 0) {
        return <CustomErrorPage errorText="Assignments not available right now" />;
    }

    return (
        <div className="p-5 flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-4">
                {assignments?.map((software: any) => (
                    <div
                        key={software.id}
                        className="flex items-center justify-between bg-gray-100 dark:bg-[#181818] p-4 rounded-lg"
                    >
                        <Link target="_blank" href={software.href}>
                            <h2 className="text-base md:text-lg font-medium hover:text-primary transition-all">
                                {software.title}
                            </h2>
                        </Link>
                        <DownloadAndViewButton variant="ghost" href={software.href} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AsssignmentsPage;
