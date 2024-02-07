import { addWatch } from "@/app/server-actions/addWatch";
import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";

const AddWatchPage = () => {
  return (
    <div className="w-full h-screen p-1 md:p-3 xl:p-8 flex flex-col items-center bg-gradient-to-br from-black via-[#002244] to-black">
      <header className="hidden xl:flex w-full justify-start items-center h-[10vh]">
        <Link href="/home">
          <IoReturnUpBackOutline size={30} className="text-white" />
        </Link>
      </header>
      <section className="w-full xl:w-10/12 h-screen justify-center xl:h-[90vh] flex xl:flex-row flex-col relative">
        {/* LEFT SIDE  */}
        <div className="h-full relative hidden xl:flex flex-col items-start text-start p-5 text-white bg-blue-950/40 rounded-[36px] w-9/12 z-[3] left-0">
          <h1 className="w-6/12 text-2xl font-semibold">
            Add a special {"timepiece's"} <br /> details to your catalogue.
          </h1>
          <p className="w-6/12 text-[14px]">
            Everything from chassis and strap build materials, to quirks and
            unique features the watch might have.
            <br />
            Record it all here.
          </p>
          <button
            type="submit"
            form="watchForm"
            className="absolute border-2 border-white hover:bg-transparent hover:text-white transition duration-500 ease-in-out text-[20px] bottom-5 left-5 bg-white text-black w-fit px-7 py-2 rounded-xl"
          >
            Submit
          </button>
        </div>

        {/* RIGHT SIDE  */}
        <div className=" w-full xl:w-6/12 rounded-[36px] bg-neutral-50 h-[90vh] xl:h-full z-[5] absolute right-0 newbox">
          {/* MAKER, MODEL, SHOPPING LINK, RATING, DETAILS,
           CASE MATERIAL, STRAP MATERIAL, 
           WATER RESISTANCE, POWER RESERVE HOURS,
            MECHANICAL, FEATURES, PRICE */}
          <form
            className="text-black w-full h-full flex flex-col items-center p-3 xl:p-5"
            action={addWatch}
            id="watchForm"
          >
            <h1>Timepiece details</h1>

            <section className="mt-5 h-full w-full overflow-auto flex flex-col items-center gap-2">
              <div className="flex flex-col items-center text-center">
                <label htmlFor="maker">Maker</label>
                <input type="text" id="maker" name="maker" required />
              </div>
              <div className="flex flex-col items-center text-center">
                <label htmlFor="model">Model</label>
                <input type="text" id="model" name="model" required />
              </div>
              <div className="flex flex-col items-center text-center">
                <label htmlFor="shoppinglink">Shopping Link</label>
                <input
                  type="text"
                  id="shoppinglink"
                  name="shoppinglink"
                  required
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <label htmlFor="rating">Rating</label>
                <input
                  id="rating"
                  name="rating"
                  type="number"
                  max={99}
                  min={0}
                />
              </div>
              <div className="flex flex-col items-center text-center w-full">
                <label htmlFor="details">Details</label>
                <textarea
                  name="details"
                  id="details"
                  className=" w-full min-h-[40vh] bg-blue-950/50 placeholder:text-neutral-200 rounded-xl xl:rounded-[32px] text-white p-3 lg:p-5 xl:p-7"
                  placeholder="This watch is unique because..."
                />
              </div>
              <div className="flex flex-col items-center text-center w-full">
                <label htmlFor="casematerials">Case materials</label>
                <textarea
                  name="casematerials"
                  id="casematerials"
                  className=" w-full min-h-[40vh] bg-blue-950/50 placeholder:text-neutral-200 rounded-xl xl:rounded-[32px] text-white p-3 lg:p-5 xl:p-7"
                  placeholder="Chassis and casing are made of..."
                />
              </div>
              <div className="flex flex-col items-center text-center w-full">
                <label htmlFor="strapmaterials">Strap materials</label>
                <textarea
                  name="strapmaterials"
                  id="strapmaterials"
                  className=" w-full min-h-[40vh] bg-blue-950/50 placeholder:text-neutral-200 rounded-xl xl:rounded-[32px] text-white p-3 lg:p-5 xl:p-7"
                  placeholder="Watch strap is made of..."
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <label htmlFor="waterresistance">Water resistance</label>
                <select name="waterresistance" id="waterresistance">
                  <option value="false">Select...</option>
                  <option value="true">1. True</option>
                  <option value="false">2. False</option>
                </select>
              </div>
              <div className="flex flex-col items-center text-center">
                <label htmlFor="reservepower">Power Reserve Hours</label>
                <input
                  name="reservepower"
                  id="reservepower"
                  type="number"
                  max={50}
                  min={1}
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <label htmlFor="mechanical">Is it mechanical?</label>
                <select name="mechanical" id="mechanical">
                  <option value="false">Select...</option>
                  <option value="true">1. Yes</option>
                  <option value="false">2. No</option>
                  <option value="false">3. I don't know</option>
                </select>
              </div>
              <div className="flex flex-col items-center text-center w-full">
                <label htmlFor="features">Other features</label>
                <textarea
                  name="features"
                  id="features"
                  className=" w-full min-h-[40vh] bg-blue-950/50 placeholder:text-neutral-200 rounded-xl xl:rounded-[32px] text-white p-3 lg:p-5 xl:p-7"
                  placeholder="Any peculiarities about this watch? Add them here..."
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <label htmlFor="price">Price in ZAR</label>
                <input
                  type="number"
                  min={1000}
                  id="price"
                  name="price"
                  required
                />
              </div>
            </section>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddWatchPage;
