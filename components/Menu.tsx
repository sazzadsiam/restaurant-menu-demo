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

      <ScrollArea style={{ height: "80vh" }}>
        <section className="grid grid-cols-1 tablet:grid-cols-2 gap-6 mt-10">
          <div className="flex gap-x-4 bg-white border border-neutral-300 drop-shadow-sm p-6 rounded-md">
            <Image
              src="/images/food-one.png"
              alt="food image"
              width={280}
              height={220}
              className="w-[140px] h-[110px] tablet:w-[180px] tablet:h-[150px] laptop:w-[280px] laptop:h-[220px] object-cover rounded-sm"
            />
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl font-semibold">
                Chicken Skewers with Peanut Sauce
              </h2>
              <p className="text-sm">
                Cauliflower, squash, onions, peppers, carrots and tofu, in a
                flavorful shacha sauce
              </p>
              <p>
                <span className="text-sm font-bold">With your choice of: </span>
                <span className="text-sm">Chicken | Beef | Shrimp</span>
              </p>
              <div className="flex gap-x-2">
                <span className="text-sm font-bold">Price:</span>
                <div className="text-sm flex flex-col gap-y-1">
                  <span>Chicken- 35 AED</span>
                  <span>Beef- 37 AED</span>
                  <span>Shrimp- 39 AED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-x-4 bg-white border border-neutral-300 drop-shadow-sm p-6 rounded-md">
            <Image
              src="/images/food-one.png"
              alt="food image"
              width={280}
              height={220}
              className="w-[140px] h-[110px] tablet:w-[180px] tablet:h-[150px] laptop:w-[280px] laptop:h-[220px] object-cover rounded-sm"
            />
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl font-semibold">
                Chicken Skewers with Peanut Sauce
              </h2>
              <p className="text-sm">
                Cauliflower, squash, onions, peppers, carrots and tofu, in a
                flavorful shacha sauce
              </p>
              <p>
                <span className="text-sm font-bold">With your choice of: </span>
                <span className="text-sm">Chicken | Beef | Shrimp</span>
              </p>
              <div className="flex gap-x-2">
                <span className="text-sm font-bold">Price:</span>
                <div className="text-sm flex flex-col gap-y-1">
                  <span>Chicken- 35 AED</span>
                  <span>Beef- 37 AED</span>
                  <span>Shrimp- 39 AED</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollArea>
    </div>
  );
};
export default Menu;
