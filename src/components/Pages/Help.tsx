import Image from "next/image";
import React from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  useParallax,
} from "react-scroll-parallax";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Help = () => {
  return (
    <div className="h-full my-20">
      <ParallaxBanner
        layers={[{ image: "/assets/png/call-bg.jpg", speed: -20 }]}
        className="aspect-[2/1] h-[500px] relative"
      >
        {/* Background Color Layer */}
        <ParallaxBannerLayer speed={-10}>
          <div className="absolute inset-0 bg-blue-600 opacity-70"></div>
        </ParallaxBannerLayer>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold w-[40%] text-center text-white">
            Do you need Emergency Medical Care? Call @ 1234 56789
          </h1>
          <p className="mt-5 w-[40%] text-center text-white text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            porttitor dictum turpis nec gravida.
          </p>
          <div className="my-10 flex gap-3">
            <Button
              className={cn(
                "group relative isolate overflow-hidden rounded-md bg-white px-8 text-blue-600 py-6",
                "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-blue-600  before:transition-transform before:duration-300 before:ease-in-out",
                "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-blue-600  after:transition-transform after:duration-300 after:ease-in-out",
                "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-white"
              )}
              variant={"default"}
            >
              Contact Now
            </Button>
            <Button
              className={cn(
                "group relative isolate overflow-hidden rounded-md bg-transparent border px-8 text-primary-foreground py-6",
                "before:absolute before:inset-y-0 before:right-0 before:z-[-1] before:w-[51%] before:origin-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:ease-in-out",
                "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:w-[51%] after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out",
                "hover:before:scale-x-100 hover:after:scale-x-100 hover:text-blue-600"
              )}
              variant={"default"}
            >
              Learn More
            </Button>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Help;
