import { fromthenet } from "@/devdata/fromthenet";
import { FromTheNetCard } from ".";

const Sidebyside = () => {
  return (
    <div className="w-full bg-white/10 rounded-lg lg:rounded-xl xl:rounded-[34px] hover:bg-white/10 flex flex-col min-h-[75vh] justify-between p-5 xl:p-10 border-none">
      {/* TOP  */}
      <h1 className="w-full flex justify-center xl:justify-start xl:text-start text-center text-[20px]">
        From the internet
      </h1>

      {/* ARTICLES  */}
      <div className="h-[90%] w-full flex flex-col xl:flex-row gap-2 xl:gap-7">
        {fromthenet.map((card, index) => (
          <FromTheNetCard
            key={card.id}
            articleLink={card.articleLink}
            articleThumbnail={card.articleThumbnail}
            articleTitle={card.articleTitle}
            id={card.id}
            snippet={card.snippet}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebyside;
