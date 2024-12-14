import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="Phone template"
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <img className="object-cover" src={imgSrc} alt="Overlay Phone image" />
      </div>
    </div>
  );
};

export default Phone;
