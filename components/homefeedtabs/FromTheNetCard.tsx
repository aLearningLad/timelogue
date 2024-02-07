import { Ifromthenet } from "@/types";
import Link from "next/link";
import { IoBookSharp } from "react-icons/io5";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

const FromTheNetCard: React.FC<Ifromthenet> = ({
  articleLink,
  articleThumbnail,
  articleTitle,
  id,
  snippet,
}) => {
  return (
    <div className="w-full overflow-clip h-full hover:scale-90 group transition duration-500 ease-in-out odd:text-neutral-900 text-black p-5 rounded-xl lg:rounded-3xl flex flex-col items-start justify-between bg-pink-100 even:bg-orange-100 gap-2 xl:gap-6 relative">
      <Link
        href={articleLink}
        target="_blank"
        className="z-10 gap-2 absolute hidden group-hover:flex top-0 bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm justify-center items-center text-black text-2xl flex-col"
      >
        <FaEye size={30} />
        <p className="w-fit h-fit px-4 py-2 bg-black text-white rounded-lg">
          Open Article
        </p>
        <p className="text-center text-black text-[18px]">{articleTitle}</p>
      </Link>
      <section className="w-full flex flex-col gap-1">
        <div className="w-full flex justify-start text-start gap-2 items-start">
          <IoBookSharp size={20} />
          <h3 className="text-2xl">{articleTitle}</h3>
        </div>
        <span className=" w-full flex gap-2 ">
          <IoBookSharp className=" text-transparent" size={20} />
          <h4 className=" text-[14px] ">
            {snippet} ... <p className=" text-[12px] font-semibold">Read on</p>
          </h4>
        </span>
      </section>
      <section className="w-full h-full relative rounded-xl xl:rounded-2xl">
        <Image
          src={articleThumbnail}
          className="absolute rounded-xl xl:rounded-2xl"
          fill
          objectFit="cover"
          alt="articleThumbnail"
        />
      </section>
    </div>
  );
};

export default FromTheNetCard;
