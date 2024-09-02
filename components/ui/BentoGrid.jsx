"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "../elements/Button";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-rows-4 md:grid-cols-6 gap-8 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  titleClassName,
  description,
  className,
  id,
  img,
  imgClassName,
  spareImg,
}) => {
  const [copied, isCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("ammaryasser.online@gmail.com");
    isCopied(true);
  };
  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden ${
          id === 4
            ? "px-10 py-6 flex-col items-center md:items-start justify-center md:justify-start"
            : "justify-between "
        }  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-blac bg-white border border-white/[0.1] flex space-y-4 rounded-3xl`,
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {spareImg && (
        <div className="absolute inset-0">
          <Image
            src={spareImg}
            alt={title}
            width={1000}
            height={1000}
            className={cn(imgClassName, "object-cover object-center")}
          />
        </div>
      )}
      <div
        className={`flex flex-col transition duration-200 text-xl md:text-2xl ${titleClassName}`}
      >
        <div
          className={`flex flex-col justify-between items-end ${
            id === 2 ? "md:flex-col h-full" : "md:flex-row"
          }`}
        >
          <div className={`flex flex-col ${id === 2 ? "px-4" : "p-6"}`}>
            <div className="text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
            <div
              className={`font-sans font-bold text-neutral-600 dark:text-neutral-200 ${
                id === 4 ? "mb-8" : ""
              } z-10`}
            >
              {title}
            </div>
          </div>
          {img && (
            <div className="">
              <Image
                src={img}
                alt={title}
                width={300}
                height={300}
                className={cn(imgClassName, "object-center object-cover")}
              />
            </div>
          )}
        </div>
        {id === 4 ? (
          <div className="relative">
          <div className="absolute -bottom-5 lg:-bottom-10 right-0">
            <Lottie options={{
              loop: copied,
              autoplay: copied,
              animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidyMid slice"
              }
            }} />
          </div>
          <Button position={"left"} className="py-4" onClick={handleCopy}>
            <FaCopy />
            {copied ? "Copied!" : "Copy my email address"}
          </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
