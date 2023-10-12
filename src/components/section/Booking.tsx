"use client";
import React, { Fragment } from "react";
import { Prose } from "@/components/Prose";
import Contents from "@/components/Contents";
import { ArrowRightIcon } from "@/components/Icons";
import { cn, truncate } from "@/lib/utils";
import { skillsContainer } from "@/utils/motion";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import selectIcon from "@/images/icons/select-all.png";
import PendingIcon from "@/images/icons/expired1.png";
import completedIcon from "@/images/icons/completed-task1.png";
import progressIcon from "@/images/icons/progress1.png";
import cancelIcon from "@/images/icons/cancel.png";
import DemoBooking from "@/images/Rectangle 2201.png";


import BlurImage from "../BlurImage";
import { Button } from "../Button";
import { Settings, MapPin } from "lucide-react";
export const Booking = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-col gap-20 relative w-full py-10 xl:pt-10">
      <BookingTab />
      <div className="col-span-3">
        <Services />
      </div>
    </div>
  );
};
export const BookingTab = () => {
  return (
    <div className=" -mb-px text-sm font-medium text-gray-500 dark:text-gray-400">
      <li className="mr-2 list-none bg-primary-100">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image
            src={selectIcon}
            alt="Description"
            width={25}
            height={25}
            className="mt-0 mb-0"
          />
          <span className="ml-2"> All Services</span>
        </a>
      </li>
      <li className="mr-2 list-none	">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
          aria-current="page"
        >
          <Image
            src={PendingIcon}
            alt="Description"
            width={25}
            height={25}
            className="mt-0 mb-0"
          />
          <span className="ml-2">Pending</span>
        </a>
      </li>
      <li className="mr-2 list-none	">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image
            src={progressIcon}
            alt="Description"
            width={25}
            height={25}
            className="mt-0 mb-0"
          />
          <span className="ml-2">Accepted</span>
        </a>
      </li>
      <li className="mr-2 list-none	">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image
            src={completedIcon}
            alt="Description"
            width={25}
            height={25}
            className="mt-0 mb-0"
          />
          <span className="ml-2"> Completed</span>
        </a>
      </li>
      <li className="mr-2 list-none	">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image
            src={cancelIcon}
            alt="Description"
            width={25}
            height={25}
            className="mt-0 mb-0"
          />
          <span className="ml-2">Canceled</span>
        </a>
      </li>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="grid flex-col w-full bg-primary-50  rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
      <div className="flex py-3 sm:py-4 px-4  space-x-4">
        <h1 className="text-2xl text-black font-medium">01</h1>
        <div>
          <Image
            height={100}
            width={100}
            className="m-0"
            src={DemoBooking}
            alt="Neil image"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h6 className="text-lg color-black font-medium mr-10 leading-6">
            IT Troubleshooting and Repair (Troubleshooting){" "}
          </h6>
          <h6 className="text-sm flex items-center gap-2 text[#868686]">
            <Settings color="#868686" size={15} /> IT Troubleshooting and Repair
          </h6>
          <h6 className="text-sm flex items-center  gap-2 text[#868686]">
            {" "}
            <MapPin color="#868686" size={15} />
            Dhanmondi 32 road Bridge
          </h6>
        </div>
        <div className="flex flex-col items-start dark:text-white h-full">
          <h6 className="text-base text-gray-900">
            Date: 01/01/2023, Time: 12:00 PM
          </h6>
          <h6 className="text-2xl text-primary-500 font-medium mt-5">৳3,500</h6>
        </div>
      </div>
    </div>
  );
};
