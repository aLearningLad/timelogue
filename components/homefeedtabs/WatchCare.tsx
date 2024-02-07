"use client";

import Image from "next/image";

const WatchCare = () => {
  return (
    <div className="w-full bg-white/10 p-2 xl:p-5 rounded-lg lg:rounded-xl xl:rounded-[34px] min-h-[55vh] xl:gap-3 flex xl:flex-row flex-col items-center xl:items-start justify-center">
      {/* IMAGE  */}
      <div className="w-full xl:w-4/12 h-full relative rounded-xl xl:rounded-[32px] overflow-clip">
        <Image
          src="/assets/watchcare.png"
          alt="watchcareImg"
          fill
          className="absolute brightness-[85%]"
          objectFit="cover"
        />
      </div>

      {/* TEXT SIDE  */}
      <div className="w-full xl:w-8/12 h-full z-5 flex flex-col items-start justify-center text-start">
        <h1 className=" text-4xl font-bold">
          Tips on caring <br /> for your collection
        </h1>
        <p>
          How to safely dust-off, polish, encase and store your timepieces.{" "}
          <br /> Including recommended products, routines and discounts.
          Membership benefits and coupons below.
        </p>
        <div className="w-full h-[30%] flex justify-start items-start pt-1 gap-2">
          <button className="w-full hover:scale-90 transition duration-500 ease-in-out active:bg-white/70 h-fit xl:w-fit xl:px-5 bg-white text-black rounded-lg py-2 xl:text-xl">
            Claim coupon
          </button>
          <button className="w-full active:bg-white/50 hover:scale-90 transition duration-500 ease-in-out h-fit xl:w-fit xl:px-5 bg-transparent border-[2px] border-white text-white rounded-lg py-2 xl:text-xl">
            Read article
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchCare;
