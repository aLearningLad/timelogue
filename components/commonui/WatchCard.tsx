import { deleteWatch } from "@/app/server-actions/deleteWatch";
import { Iwatchcard } from "@/types";
import { FaBatteryQuarter } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { GiProcessor, GiVibratingShield } from "react-icons/gi";
import { IoWater } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { ViewDetails } from "../homefeedtabs";

const WatchCard: React.FC<Iwatchcard> = ({
  case_material,
  details,
  id,
  maker,
  mechanical,
  model,
  power_reserve_hours,
  price,
  rating,
  shopping_link,
  water_resistance,
}) => {
  return (
    <div className="w-full group hover:scale-90 transition duration-500 ease-in-out hover:bg-black hover:text-white relative text-center min-h-[60vh] bg-white/40 rounded-xl md:rounded-3xl xl:rounded-[36px] flex flex-col p-3 lg:p-5 xl:p-7 items-center justify-center ">
      <ViewDetails details={details} />
      <section className=" flex flex-col items-center text-center">
        <h1 className=" text-3xl xl:text-5xl font-bold">{model}</h1>
        <p>by</p>
        <h2 className="text-xl xl:text-2xl flex items-start">
          {maker} <p className="text-[8px] h-full flex items-start">&copy;</p>
        </h2>
      </section>
      <section className=" w-full flex justify-around gap-2">
        <div className=" flex flex-col items-center gap-1 text-[10px]">
          <GiVibratingShield size={30} />
          {rating}%
        </div>
        <div className=" flex flex-col items-center gap-1 text-[10px]">
          <IoWater size={30} />
          {water_resistance ? "Water resistant" : "Vulnerable"}
        </div>
        <div className=" flex flex-col items-center text-[10px] gap-1">
          <FaBatteryQuarter size={30} />
          {power_reserve_hours} hours
        </div>
        <div className=" flex flex-col items-center gap-1 text-[10px]">
          {mechanical ? (
            <FaScrewdriverWrench size={30} />
          ) : (
            <GiProcessor size={30} />
          )}

          {mechanical ? "Mechanical" : "Digital"}
        </div>
      </section>
      <section className="w-full absolute bottom-3 flex justify-center gap-2 items-center">
        <form id={id as string} action={deleteWatch}>
          <input type="hidden" id={id as string} value={id} name="id" />
          <button className="flex flex-col items-center gap-1" type="submit">
            <MdDeleteForever size={30} />
            <p className="text-[12px] xl:text-transparent xl:group-hover:text-white transition duration-500 ease-in-out">
              Delete {model}
            </p>
          </button>
        </form>
      </section>
    </div>
  );
};

export default WatchCard;
