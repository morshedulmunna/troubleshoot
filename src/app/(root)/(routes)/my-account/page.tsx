"use client";

import React, { Fragment, ReactNode } from "react";
import Contents from "@/components/Contents";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import { MyAccount } from "@/components/section/MyAccount";
import { Prose } from "@/components/Prose";

export default function MyAccountPage() {
  return (
    <Contents className="max-w-6xl mx-auto">
      <Heading level={1}>My account</Heading>
      <MyAccount />
    </Contents>
  );
}
