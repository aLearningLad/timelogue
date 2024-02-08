import Link from "next/link";
import { BrandCard } from ".";
import { brandcarddata } from "@/devdata/brandcarddata";

const BrandSocials: React.FC = () => {
  return (
    <div className="min-h-[40vh] gap-5 w-full flex flex-col text-start bg-white/10 rounded-lg lg:rounded-xl xl:rounded-[34px] p-3 xl:p-5">
      <h1 className="text-[20px]">Leading watchmakers</h1>

      <div className="w-full h-[80%] grid grid-cols-2 xl:flex flex-row justify-center items-center gap-2 xl:gap-5">
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
    </div>
  );
};

export default BrandSocials;
