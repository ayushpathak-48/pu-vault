"use client";

import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
    return (
        <div className="h-36 w-full flex items-center justify-center">
            <Loader className="animate-spin size-6" />
        </div>
    );
};

export default loading;
