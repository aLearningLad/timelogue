import Link from "next/link";
import { BrandCard } from ".";
import { brandcarddata } from "@/devdata/brandcarddata";

const BrandSocials: React.FC = () => {
  return (
    <div className="w-full rounded-lg lg:rounded-xl xl:rounded-[34px] bg-white/10 min-h-[40vh] grid grid-cols-2 xl:flex flex-row justify-center items-center gap-2 xl:gap-5">
      {brandcarddata.map((brandcard, index) => (
        <BrandCard
          id={brandcard.id}
          img={brandcard.img}
          sociallink={brandcard.sociallink}
          key={brandcard.id}
          index={index}
          brandName={brandcard.brandName}
        />
      ))}
    </div>
  );
};

export default BrandSocials;
