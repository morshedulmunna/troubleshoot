"use client";
import React from "react";
import { Prose } from "@/components/Prose";
import Contents from "@/components/Contents";
import { ArrowRightIcon } from "@/components/Icons";
import { cn, truncate } from "@/lib/utils";
import { skillsContainer } from "@/utils/motion";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import menIcon from "@/images/icons/man1.png";
import addressIcon from "@/images/icons/placeholder1.png";
import notificationIcon from "@/images/icons/notification1.png";
import userDemoProfile from "@/images/Ellipse298.png";
import logoutIcon from "@/images/icons/enter1.png";
import BlurImage from "../BlurImage";
export const MyAccount = () => {
  return <UserAccountTab />;
};
export const UserAccountTab = () => {
  return (
      <ul className=" -mb-px text-sm font-medium text-gray-500 dark:text-gray-400">
        <li className="mr-2 list-none bg-black">
          <a
            href="#"
            className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <Image src={menIcon} alt="Description" width={25} height={25}  className="mt-0 mb-0"/>
            <span className="ml-2"> My Account</span>
          </a>
        </li>
        <li className="mr-2 list-none	">
          <a
            href="#"
            className="inline-flex items-center justify-start	 p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
            aria-current="page"
          >
            <Image src={addressIcon} alt="Description" width={25} height={25}  className="mt-0 mb-0"/>
            <span className="ml-2"> My addresses</span>
          </a>
        </li>
        <li className="mr-2 list-none	">
          <a
            href="#"
            className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >
            <Image
              src={notificationIcon}
              alt="Description"
              width={25}
              height={25}
              className="mt-0 mb-0"
            />
            <span className="ml-2">Notification</span>
          </a>
        </li>
        <li className="mr-2 list-none	">
          <a
            href="#"
            className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
          >          
            <Image
              src={logoutIcon}
              alt="Description"
              width={25}
              height={25}
              className="mt-0 mb-0"
            />
            <span className="ml-2"> Logout</span>
          </a>
        </li>
      </ul>

  );
};
