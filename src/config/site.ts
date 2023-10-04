import type { FooterItem, MainNavItem } from "@/types/types";

export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://twitter.com/",
  github: "https://github.com/",
  githubAccount: "https://github.com/",
  discord: "https://discord.com/",
  calDotCom: "https://cal.com/",
};

export const siteConfig = {
  name: "Projectzero",
  description:
    "Adipisicing sit ipsum amet nulla dolor aute voluptate ipsum do ipsum..",
  url: "http://localhost:3000",

  mainNav: [
    {
      title: "কোর্স",
      href: "/courses",
      description: "Read our latest blog posts.",
      items: [
        {
          title: "ডিজিটাল মার্কেটিং",
          description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
          items: [],
          href: "/courses?type=marketing",
          icon: "/images/courses/marketing.png",
        },
        {
          title: "ডিজাইন",
          description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
          items: [],
          icon: "/images/courses/design.png",
          href: "/courses?type=design",
        },
        {
          title: "ডেভেলপমেন্ট",
          description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
          items: [],
          icon: "/images/courses/development.png",
          href: "/courses?type=development",
        },
        {
          title: "বিজনেস",
          description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
          items: [],
          icon: "/images/courses/business.png",
          href: "/courses?type=bussiness",
        },
        {
          title: "ভিডিও ও এনিমেশন 2",
          description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
          href: "/courses?type=video-animation",
          icon: "/images/courses/video.png",
          items: [],
        },
        {
          title: "টেকনোলজি",
          description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
          icon: "/images/courses/technology.png",
          items: [],
          href: "/courses?type=technology",
        },
      ],
    },

    {
      title: "আমাদের সম্পর্কে",
      href: "/about",
      description: "All the products we have to offer.",
      items: [],
    },
    {
      title: "স্টুডেন্ট রিভিউ",
      href: "/reviews",
      description: "All the products we have to offer.",
      items: [],
    },
    {
      title: "ইনস্ট্রাক্টর",
      href: "/instructors",
      description: "All the products we have to offer.",
      items: [],
    },
  ] satisfies MainNavItem[],
  links,
  footerNav: [
    {
      title: "কুইক লিংক",
      items: [
        {
          title: "আপকামিং লাইভ ব্যাচ",
          href: "/",
          external: false,
        },
        {
          title: "লাইভ ক্লাস",
          href: "/",
          external: false,
        },
        {
          title: "আপকামিং লাইভ ব্যাচ",
          href: "/",
          external: false,
        },
      ],
    },
    {
      title: "কোম্পানি",
      items: [
        {
          title: "আমাদের সম্পর্কে",
          href: "/about",
          external: false,
        },
        {
          title: "রিফান্ড পলিসি",
          href: "/contact",
          external: false,
        },
        {
          title: "প্রাইভেসী পলিসি",
          href: "/terms",
          external: false,
        },
        {
          title: "টার্মস এবং শর্তাবলী",
          href: "/privacy",
          external: false,
        },
      ],
    },
    {
      title: "টার্মস এবং শর্তাবলী",
      items: [
        {
          title: "Phone: 01798 - 84753",
          href: links.twitter,
          external: true,
        },
        {
          title: "Email: ecoacademy@gmail.com",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Location: Tangail, Dhaka, Bangladesh",
          href: links.discord,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[],
};