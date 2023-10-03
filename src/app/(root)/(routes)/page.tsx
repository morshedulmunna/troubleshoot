"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useAlertModal } from "@/hooks/use-alert-modal";
import { Prose } from "@/components/Prose";
import Contents from "@/components/Contents";
import { cn, truncate } from "@/lib/utils";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios";
import { Categories, Hero, Services } from "@/components/section";
import { RecommendedServices } from "@/components/section/Services";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";
import { TrendingServices } from "@/components/section/TrendingServices";
import { SeriviceSteps } from "@/components/section/ServiceSteps";
import BlurImage from "@/components/BlurImage";
import { WhyUs } from "@/components/section/WhyUs";

export default function Home() {
  const { onOpen } = useAlertModal();
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement | null>(null);

  // const getServices = async () => {
  // 	// const csrf = await axios.post("/refresh-csrf");
  // 	// console.log("csrf", csrf);
  // 	try {
  // 		const response = await axios.get("/auth/customer");
  // 		const data = await response.data;
  // 		console.log("data", data);
  // 	} catch (error) {
  // 		console.log("error", error);
  // 	}
  // };
  // useEffect(() => {
  // 	getServices();
  // 	// @ts-ignore
  // 	console.log("customer", customer);
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Contents className="max-w-7xl mx-auto ">
      {/* hero section */}
      <Prose enable={false} className="relative w-full flex justify-center items-center">
        <Hero />
      </Prose>
      {/* Categories section */}
      <div className="relative max-w-5xl mx-auto w-full space-y-8 py-8">
        <Button className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded-xl px-4 py-2" variant="filled">
          All Recommended
        </Button>

        <Prose enable={false} className="relative w-full overflow-scroll">
          <Categories />
        </Prose>
      </div>
      {/* Services section */}
      <div className="relative max-w-5xl mx-auto w-full space-y-8 ">
        <Button className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded-xl px-4 py-2" variant="filled">
          Recommended Services
        </Button>

        <Prose enable={false} className="relative w-full ">
          <RecommendedServices />
        </Prose>
      </div>
      {/*Trending Services section */}
      <div className="relative max-w-5xl mx-auto w-full space-y-8  py-16">
        <Button className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded-xl px-4 py-2" variant="filled">
          Trending
        </Button>

        <Prose enable={false} className="relative w-full ">
          <TrendingServices />
        </Prose>
      </div>

      {/* Service workflow */}
      <div className="relative max-w-5xl mx-auto w-full space-y-8  py-16">
        <Button className="font-semibold bg-primary-500/90 hover:bg-primary-500 text-white rounded-xl px-4" variant="filled">
          How IT Works
        </Button>
        <p className="text-2xl">Easiest way to get a service</p>
        <Prose enable={false} className="relative w-full ">
          <SeriviceSteps />
        </Prose>
      </div>

      {/* Why us */}

      <div className="relative max-w-5xl mx-auto w-full space-y-8  py-16 ">      
        <p className="text-lg"> Why choose us ?</p>
        <p className="text-4xl">We are at your side whenever you<br/> need...</p>
        <Prose enable={false} className="relative w-full ">
          <WhyUs />
        </Prose>
      </div>
    </Contents>
  );
}
