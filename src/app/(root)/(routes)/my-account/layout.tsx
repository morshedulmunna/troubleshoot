import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";
export const metadata: Metadata = constructMetadata({
	title: "My Account",
	description: "One-stop Solution for your Services.",
});

export default function MyAccountLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
