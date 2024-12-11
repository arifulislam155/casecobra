import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

const MaxWidthWrapper = ({
  ClassName,
  children,
}: {
  ClassName?: string;
  children: ReactNode;
}) => {
  return (
    <div className='{cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20, className)}'>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
