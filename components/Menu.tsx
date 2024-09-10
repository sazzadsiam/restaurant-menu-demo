"use client";

import { ScrollArea } from "./ui/scroll-area";

import Image from "next/image";

const Menu = () => {
  return (
    <div>
      <nav className="flex gap-2 text-sm tablet:gap-8 w-full tablet:justify-center items-center mt-6 flex-wrap">
        <button className="px-[18px] py-3 bg-primary text-white border-neutral-200 drop-shadow-sm font-medium rounded-sm">
          All
        </button>
        <button className="px-[18px] py-3 bg-white text-black border border-neutral-200 drop-shadow-sm font-medium rounded-sm">
          Starter
        </button>
        <button className="px-[18px] py-3 bg-white text-black border border-neutral-200 drop-shadow-sm font-medium rounded-sm">
          Wok specialties
        </button>
        <button className="px-[18px] py-3 bg-white text-black border border-neutral-200 drop-shadow-sm font-medium rounded-sm">
          Add on
        </button>
        <button className="px-[18px] py-3 bg-white text-black border border-neutral-200 drop-shadow-sm font-medium rounded-sm">
          Drinks
        </button>
        <button className="px-[18px] py-3 bg-white text-black border border-neutral-200 drop-shadow-sm font-medium rounded-sm">
          Special dishes
        </button>
      </nav>

      <ScrollArea
        style={{
          height: "80vh",
          width: "100%",
          padding: "8px 0px",
        }}
      >
        <section className="grid grid-cols-1 tablet:grid-cols-2 gap-6 mt-10">
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
          <Items />
        </section>
      </ScrollArea>
    </div>
  );
};
export default Menu;

export const Items = () => {
  return (
    <div className="flex flex-col tablet:flex-row gap-3 bg-white border border-neutral-300 drop-shadow-sm rounded-md items-center">
      <div className="w-auto h-full flex items-center p-4 bg-[#F0F0F0] rounded-sm">
        <Image
          src="/images/food-two.png"
          alt="food image"
          width={600}
          height={440}
          className="w-full aspect-[15/11] rounded-sm"
        />
      </div>

      <div className="flex flex-col gap-y-2 py-4 px-2">
        <h2 className="text-lg font-semibold">
          Chicken Skewers with Peanut Sauce
        </h2>
        <p className="text-sm leading-[180%]">
          Cauliflower, squash, onions, peppers, carrots and tofu, in a flavorful
          shacha sauce With your choice of: Chicken | Beef | Shrimp.
        </p>
        <div className="flex gap-x-3 items-start">
          <span className="text-primary font-bold text-sm">Price:</span>
          <div className="text-sm flex flex-col gap-y-1 ">
            <span>Chicken- 35 AED</span>
            <span>Beef- 37 AED</span>
            <span>Shrimp- 39 AED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
