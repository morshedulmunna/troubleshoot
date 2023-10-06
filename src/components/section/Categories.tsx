"use client";
import React, { Fragment, useEffect, useState } from "react";
import BlurImage from "@/components/BlurImage";
import { Heading } from "@/components/Heading";
import axios from "@/lib/axios";
import Image from "next/image";
import { LocateIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import heroImage from "@/images/hero.png";
import { Skeleton } from "@/components/ui/skeleton";
import { Rating } from "@/components/Ratings";
import { cn, truncate } from "@/lib/utils";
import AliceCarousel from "react-alice-carousel";

interface CategoryProps {
  category: Category; // Make sure the expected prop name and type match
  className?: string;
}
const responsive = {
  0: { items: 1 },
  568: { items: 5 },
  1024: { items: 6 },
};

export const Category: React.FC<CategoryProps> = ({ category, className }) => {
  return (
    <Fragment>
      <Link href="#" className={cn("relative rounded-lg h-24 w-32 overflow-hidden ", className)}>
        <div className="relative overflow-hidden h-16 flex items-center justify-center">
          <BlurImage src={category.image} alt="" width={400} height={200} className="relative object-cover" />
        </div>
        <div className="relative">
          <h2 className="line-clamp-1 text-center">{truncate(category.name, 15)}</h2>
        </div>
      </Link>
    </Fragment>
  );
};

export const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        const request = await axios.get(`/categories`);
        const response: AxiosResponse = await request.data;
        if (response.status) {
          const categories = response.data.categories;
          setCategories(categories);
          setCarouselItems(categories?.map((category: any) => <Category category={category} />));
        }
      } catch (error) {
        setCategories([]);
      }
      setLoading(false);
    };
    getServices();
  }, []);

  return (
    <Fragment>
      <div className="relative w-full bg-primary-50 h-36 rounded-md gap-5 flex items-center">
        <div className="relative flex items-center gap-4 px-8 ">
          {/* {Array.from({ length: 10 }).map((_, i) => (
						<CategorySkeleton
							className={cn(
								i > 7 && "xl:hidden",
								i > 8 && "lg:hidden"
							)}
							key={i}
						/>
					))} */}
          {loading ? (
            <Fragment>
              {Array.from({ length: 10 }).map((_, i) => (
                <CategorySkeleton className={cn(i > 7 && "xl:hidden", i > 8 && "lg:hidden")} key={i} />
              ))}
            </Fragment>
          ) : (
            <Fragment>
              <AliceCarousel
                disableDotsControls
                mouseTracking
                responsive={responsive}
                items={carouselItems}
                // renderNextButton={() => {
                //   return (
                //     <div className="flex justify-start mt-10">
                //       <div className="w-9 h-2.5 bg-gray-400 rounded-lg" />
                //     </div>
                //   );
                // }}
                // renderPrevButton={() => {
                //   return (
                //     <div className="flex justify-end  mt-10">
                //       <div className="w-16 h-2.5 bg-primary-500 rounded-lg" />
                //     </div>
                //   );
                // }}
              />
              {/* {categories?.map((category, i) => (
                <Fragment key={category.id}>
                  <Category
                    // className={cn(
                    // 	i > 7 && "xl:hidden",
                    // 	i > 8 && "lg:hidden"
                    // )}
                    category={category}
                  />
                  <span className="h-5 w-0.5 bg-primary-500"></span>
                </Fragment>
              ))} */}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

const CategorySkeleton = ({ ...props }) => {
  return (
    <div className={cn("relative bg-white h-20 rounded-lg overflow-hidden", props?.className)}>
      <Skeleton className="h-14 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={cn("h-12 w-12 text-slate-300")}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </Skeleton>
      <div className="relative p-3 my-4">
        <div className="flex space-x-2 overflow-hidden">
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
};
