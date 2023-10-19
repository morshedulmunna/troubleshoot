"use client";

import Contents from "@/components/Contents";
import {Heading} from "@/components/Heading";
import {MyAccount} from "@/components/section/MyAccount";

export default function MyAccountPage() {
    return (
        <Contents className="max-w-6xl mx-auto">
            <Heading level={1}>My account</Heading>
            <MyAccount />
        </Contents>
    );
}
