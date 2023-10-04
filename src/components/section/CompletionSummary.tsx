"use client";
import { cn, nFormatter, price } from "@/lib/utils";
import React, { Fragment, useEffect, useState } from "react";
import BlurImage from "@/components/BlurImage";
import { Heading } from "@/components/Heading";
import axios from "@/lib/axios";
import Image from "next/image";
import { LocateIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import support_icon from "@/images/support_icon.png";
import service_chooseUsIcon from "@/images/service_chooseUs.png";
import WhyChooseUsImg from "@/images/WhyChooseUsImg.png";
import { Skeleton } from "@/components/ui/skeleton";
import { Rating } from "@/components/Ratings";

export const CompletionItem = () => {
  return (
    <div className="w-full max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 text-xl font-semibold	 text-gray-900 dark:text-white">
          10,121
        </h5>
        <span className="text-base text-gray-500 dark:text-gray-400">
          Order Served
        </span>
      </div>
    </div>
  );
};

export const CompletionSummary = () => {
  return (
    <div className="relative w-full grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-16">
      <CompletionItem />
      <CompletionItem />
      <CompletionItem />
    </div>
  );
};
