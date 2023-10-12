"use client";

import React, { Fragment, ReactNode } from "react";
import Contents from "@/components/Contents";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import { Prose } from "@/components/Prose";
import { Booking } from "@/components/section/Booking";

export default function BookingPage() {
  return (
    <Contents className="max-w-6xl mx-auto">
      <Heading level={1}>Booking’s</Heading>
      <Booking />
    </Contents>
  );
}
