/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

// import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import Image from "next/image";

import logo from "@/public/images/logo.png";
import Menu from "@/components/Menu";

const HomePage = () => {
  const [menu, setMenu] = useState(false);
  const [app, setApp] = useState(false);
  // const [review, setReveiw] = useState(false);
  // const [story, setStory] = useState(false);

  const lgScreen = useMediaQuery("(min-width: 768px)");
  const [height, setHeight] = useState(0);
  const shape = useRef(null);

  useEffect(() => {
    const element = shape.current;

    if (element) {
      // Create a ResizeObserver to observe changes in the element's height
      const observer = new ResizeObserver((entries) => {
        // Get the height of the element
        const newHeight = entries[0].contentRect.height;
        setHeight(newHeight);
      });

      // Start observing the element
      observer.observe(element);

      // Clean up the observer on unmount
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <main className="min-h-[800px] h-screen relative">
        <section className="flex gap-x-4 text-white absolute right-1/2 translate-x-1/2 tablet:translate-x-0  tablet:right-16 top-4 items-center">
          <img src="./icons/fac.svg" alt="instagram icon" />
          <img src="./icons/insta.svg" alt="facebook icon" />
          <p>Contact us</p>
        </section>
        <section className="flex flex-col gap-y-16 items-center h-screen pt-[20vh] laptop:pt-[8vh]">
          <Image
            src={logo}
            alt="logo"
            priority
            className="min-w-[360px] w-[32vw]"
          />
          <button
            className="px-10 py-4 bg-primary text-white font-bold text-xl tablet:text-[1.5vw] rounded-sm"
            onClick={() => setMenu(true)}
          >
            Menu
          </button>
        </section>
        <section
          style={{ height: height }}
          className="absolute bottom-0 left-0 w-full"
        >
          <div
            className="w-full flex gap-6 tablet:gap-16 laptop:gap-40 flex-shrink-0 justify-center z-[1] absolute"
            style={{ bottom: height / 2 }}
          >
            <button
              className="w-[100px] tablet:w-[130px] aspect-square bg-white text-primary flex flex-col justify-center gap-y-2 items-center rounded-sm font-bold flex-shrink-0"
              onClick={() => setApp(true)}
            >
              <img
                src="./icons/mobile-icon.svg"
                alt="mobile icon"
                className="w-9"
              />
              <p>App</p>
            </button>
            <button className="w-[100px] tablet:w-[130px] aspect-square bg-white text-primary flex flex-col justify-center gap-y-2 items-center rounded-sm font-bold flex-shrink-0">
              <img
                src="./icons/review-icon.svg"
                alt="review icon"
                className="w-11"
              />
              <p>Reviews</p>
            </button>
            <button className="w-[100px] tablet:w-[130px] aspect-square bg-white text-primary flex flex-col justify-center gap-y-2 items-center rounded-sm font-bold flex-shrink-0">
              <img
                src="./icons/book-icon.svg"
                alt="story icon"
                className="w-9"
              />
              <p>Our story</p>
            </button>
          </div>
          {lgScreen ? (
            <img
              ref={shape}
              src="./icons/round-shape.svg"
              alt="illustration"
              className="w-full absolute bottom-0"
            />
          ) : (
            <img
              ref={shape}
              src="./icons/round-shape-mobile.svg"
              alt="illustration"
              className="w-full absolute bottom-0"
            />
          )}
        </section>
        <Sheet open={menu} onOpenChange={(open) => setMenu(open)}>
          <SheetContent
            side={"bottom"}
            className="max-w-[100vw] w-full h-[100%] bg-white"
          >
            <Menu />
          </SheetContent>
        </Sheet>

        <Sheet open={app} onOpenChange={(open) => setApp(open)}>
          <SheetContent
            side={"bottom"}
            className="max-w-[100vw] w-full bg-white h-[50vh]"
          >
            <p>Comming soon</p>
          </SheetContent>
        </Sheet>
      </main>
    </>
  );
};
export default HomePage;
