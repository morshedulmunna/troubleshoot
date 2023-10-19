"use client";
import React, {Fragment} from "react";
import {Prose} from "@/components/Prose";
import Contents from "@/components/Contents";
import {ArrowRightIcon} from "@/components/Icons";
import {cn, truncate} from "@/lib/utils";
import {skillsContainer} from "@/utils/motion";
import {useAnimate} from "framer-motion";
import Image from "next/image";
import menIcon from "@/images/icons/man1.png";
import addressIcon from "@/images/icons/placeholder1.png";
import notificationIcon from "@/images/icons/notification1.png";
import userDemoProfile from "@/images/Ellipse298.png";
import logoutIcon from "@/images/icons/enter1.png";
import BlurImage from "../BlurImage";
import {Button} from "../Button";
import {Heading} from "../Heading";
import DemoBooking from "@/images/Rectangle 2104.png";
import {
    Settings,
    MapPin,
    ArrowRight,
    User2,
    MessagesSquare,
    Smartphone,
} from "lucide-react";
export const ProvidedServiceDetails = () => {
    return (
        <div className="grid grid-cols-3 grid-flow-col gap-8 relative w-full py-10 xl:pt-10">
            <div>
                <Service />
                <ContactInfo />
            </div>
            <div>
                <BookingInfo />
                <PaymentInfo />
            </div>
            <div>
                <Hint />
            </div>
        </div>
    );
};

const Service = () => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
                width={100}
                height={100}
                className="rounded-t-lg w-full m-0 p-0"
                src={DemoBooking}
                alt=""
            />

            <div className="">
                <div className="flex-1 min-w-0 p-5 ">
                    <h6 className="text-lg color-black font-medium  leading-6">
                        Data Recovery and backup solutations
                    </h6>
                    <h6 className="text-sm flex items-center gap-2 text[#868686]">
                        <Settings color="#868686" size={15} /> IT
                        Troubleshooting and Repair
                    </h6>
                    <h6 className="text-sm flex items-center  gap-2 text[#868686]">
                        {" "}
                        <MapPin color="#868686" size={15} />
                        Dhanmondi 32 road Bridge
                    </h6>
                    <h6 className="text-2xl text-primary-500 font-medium mt-2">
                        ৳3,500/Service
                    </h6>
                </div>
            </div>
        </div>
    );
};
const ContactInfo = () => {
    return (
        <div className="rounded-lg shadow p-5 mt-5">
            <div className="flex items-center ">
                <Button
                    className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded p-2"
                    variant="filled"
                >
                    <User2 size={15} />
                </Button>
                <h4 className="ml-2">Contact Customer</h4>
            </div>
            <div className="flex justify-between rounded-lg shadow-lg items-center p-2 mt-5 mb-5">
                <div>
                    <h4>Contact Customer</h4>
                    <h4>01720065881</h4>
                </div>
                <div className="flex gap-2">
                    <Button
                        className="font-semibold bg-primary-50 hover:bg-primary-100 text-black rounded p-3"
                        variant="filled"
                    >
                        <Smartphone size={10} />
                    </Button>
                    <Button
                        className="font-semibold bg-primary-50 hover:bg-primary-100 text-black rounded p-3"
                        variant="filled"
                    >
                        <MessagesSquare size={10} />
                    </Button>
                </div>
            </div>
        </div>
    );
};

const BookingInfo = () => {
    return (
        <div className="rounded-lg shadow py-7 px-5 ">
            <h4 className="text-black">Booking Time & Date</h4>
            <div className="flex gap-4">
                <h4 className="border-r-4 border-primary-500 pr-6 text-lg text-black">
                    20 <br /> Agust
                </h4>
                <h4 className="text-black">
                    Thursday <br /> 5:00 PM - 6:00 PM
                </h4>
            </div>
        </div>
    );
};

const PaymentInfo = () => {
    return (
        <div className="rounded-lg shadow py-7 px-5 mt-5">
            <Heading level={1}>Bill & payment</Heading>
            <div className="flex justify-between mt-5">
                <h4 className=" text-black">Sedon X</h4>
                <h4 className="text-black text-lg">৳3,500</h4>
            </div>
            <div className="flex justify-between">
                <h4 className=" text-black">Sub-Compact SUV X</h4>
                <h4 className="text-black text-lg">৳4,500</h4>
            </div>

            <div className="flex justify-between mt-10">
                <h4 className=" text-black">Subtotal</h4>
                <h4 className="text-black text-lg">৳7000</h4>
            </div>

            <div className="flex justify-between mt-3">
                <h4 className=" text-black">Delivery Charge</h4>
                <h4 className="text-black text-lg">৳0</h4>
            </div>
            <div className="flex justify-between mt-3">
                <h4 className=" text-black">Discount</h4>
                <h4 className="text-black text-lg">৳0</h4>
            </div>
            <div className="flex justify-between mt-3">
                <h4 className="text-lg  text-primary-500">Total</h4>
                <h4 className="text-primary-500 text-lg">৳7500</h4>
            </div>
        </div>
    );
};

const Hint = () => {
    return (
        <div className="rounded-lg shadow py-7 px-5 mt-5">
            <div className="flex gap-4">
                <Button
                    className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded px-10 py-2"
                    variant="filled"
                >
                    Accept
                </Button>
                <Button
                    className="font-semibold bg-slate-100 hover:bg-primary-500 text-white rounded px-10 py-2 text-black"
                    variant="filled"
                >
                    Accepted
                </Button>
            </div>
            <div className="py-10">
                <Heading level={1}>Hint</Heading>
                <p>
                    Troubleshoot is a start-up organization offering residents
                    of Bangladesh a complete IT corporate service. By developing
                    the reputation as a qualified, reasonably priced and trusted
                    service provider, troubleshoot quickly generated market
                    penetration and develop a solid foundation of repeat
                    customers. We are here to make your corporate life run
                    smoothly! We work on demand subject to availability,
                    nevertheless arrive on time, and are available for a same
                    day call-outs wherever possible. Our multi-skilled
                    troubleshooters work alone unless otherwise requested by
                    customers.
                </p>
            </div>
        </div>
    );
};
