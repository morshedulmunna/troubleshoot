"use client";
import React, { Fragment } from "react";
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
import { Button } from "../Button";
export const MyAccount = () => {
  return (
    <div className="grid grid-cols-4 grid-flow-col gap-20 relative w-full py-10 xl:pt-10">
      <UserAccountTab />
      <div className="col-span-3">
        <UserProfileImage />
        <FormChangeTabBTN />
        <GeneralInfo />
      </div>
    </div>
  );
};
export const UserAccountTab = () => {
  return (
    <div className=" -mb-px text-sm font-medium text-gray-500 dark:text-gray-400">
      <li className="mr-2 list-none bg-primary-100">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image src={menIcon} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2"> My Account</span>
        </a>
      </li>
      <li className="mr-2 list-none	">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
          aria-current="page"
        >
          <Image src={addressIcon} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2"> My addresses</span>
        </a>
      </li>
      <li className="mr-2 list-none	">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image src={notificationIcon} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2">Notification</span>
        </a>
      </li>
      <li className="mr-2 list-none	">
        <a
          href="#"
          className="inline-flex items-center justify-start	 p-4  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
        >
          <Image src={logoutIcon} alt="Description" width={25} height={25} className="mt-0 mb-0" />
          <span className="ml-2"> Logout</span>
        </a>
      </li>
    </div>
  );
};

export const UserProfileImage = () => {
  return (
    <div className="flex items-center space-x-4 ">
      <label htmlFor="fileInput" className="cursor-pointer">
        <Image src={userDemoProfile} alt="Image" className="w-24 h-24 m-0 rounded-ful" />
      </label>
      {/* accept={allowedTypes.join(",")} */}
      <input type="file" id="fileInput" className="hidden" />
      <div className=" dark:text-white">
        <h4 className="text-xl font-medium">Arshan Sayed</h4>
        <h6 className="">Dhaka, Bangladesh</h6>
      </div>
    </div>
  );
};

export const GeneralInfo = () => {
  return (
    <form className="w-full ">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Email Address
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Phone number
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block  tracking-wide text-gray-700 text-xs font-bold mb-3" htmlFor="grid-first-name">
            Reference Code
          </label>
          <input
            className="appearance-none block w-full bg-primary-100 text-black rounded py-4 px-4 mb-3 leading-tight border-0 focus:bg-white focus:border-primary-500"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
        </div>
      </div>
      <div className="w-full text-center">
        <Button className="font-semibold mx-auto bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-2" variant="filled">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export const FormChangeTabBTN = () => {
  return (
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded px-16 py-2" variant="filled">
          General Info
        </Button>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <Button className="font-semibold bg-slate-100	 hover:bg-primary-500 text-black rounded px-16 py-2 border" variant="filled">
          Account Info
        </Button>
      </div>
    </div>
  );
};
