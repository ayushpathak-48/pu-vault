"use client";
import { LoaderCircle } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-52 flex items-center justify-center">
      <LoaderCircle className="animate-spin size-5" />
    </div>
  );
};

export default loading;
