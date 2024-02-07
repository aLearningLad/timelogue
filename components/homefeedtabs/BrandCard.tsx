import { Ibrandcarddata } from "@/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const BrandCard: React.FC<Ibrandcarddata> = ({
  id,
  img,
  sociallink,
  index,
  brandName,
}) => {
  return (
    <div className="flex flex-col items-center group ">
      <p className=" text-[18px] xl:text-[12px] xl:hidden group-hover:flex transition duration-500 ease-in-out mb-2 ">
        {brandName}
      </p>
      <div
        className={` h-[100px] xl:h-[190px] group ${
          (index === 0 &&
            "bg-white hover:scale-90 transition duration-500 ease-in-out") ||
          (index === 1 &&
            "bg-neutral-800 border-none hover:translate-y-3 transition duration-500 ease-in-out") ||
          (index === 2 &&
            "bg-cyan-100 hover:translate-x-5 transition duration-500 ease-in-out") ||
          (index === 3 &&
            "bg-black border-none hover:scale-105 transition duration-500 ease-in-out hover:bg-neutral-500")
        }  w-[100px] xl:w-[190px] rounded-xl flex flex-col items-center p-2`}
      >
        <div className="w-full h-[80%] relative overflow-clip rounded-xl">
          <Image
            src={img}
            alt="brandImage"
            className=" absolute"
            fill
            objectFit="contain"
          />
        </div>
        <Link
          href={sociallink}
          target="_blank"
          className={`w-fit group-hover:scale-110 transition duration-500 ease-in-out ${
            (index === 0 && "bg-black text-white") ||
            (index === 2 && "bg-black text-white")
          } px-4 py-1 bg-pink-100 text-black rounded-lg flex items-center justify-center h-[20%]`}
        >
          Follow
        </Link>
      </div>
    </div>
  );
};

export default BrandCard;
