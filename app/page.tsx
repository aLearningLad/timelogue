import Link from "next/link";
import Image from "next/image";
import { AuthForm } from "@/components/auth";

export default function Home() {
  const authbg = "/assets/authclock.png";

  return (
    <main
      style={{ backgroundImage: `url(${authbg})` }}
      className="flex h-screen justify-center flex-col items-center bg-cover xl:p-5"
    >
      <div className="h-full w-full xl:p-1 xl:h-[95%] xl:w-[90%] xl:bg-white rounded-[50px] bg-black/30 backdrop-blur-md flex flex-col xl:flex-row items-center justify-center">
        <section className="hidden xl:flex h-full w-1/2 relative p-12 text-white">
          {/* NB ===> ADD ANIMATION TO THIS IMAGE. HAVE IT SLOWLY ZOOM IN & OUT */}
          <Image
            src={authbg}
            alt="authImg"
            className=" absolute overflow-clip rounded-[48px] z-0"
            fill
          />
          <section className=" w-full h-full flex flex-col items-start justify-between text-start z-10">
            <div className=" w-full flex gap-2 items-center">
              <h3>Timelogue</h3>
              <hr className="w-3/12 h-[2px] bg-white/30 rounded-lg" />
            </div>
            <div className="flex flex-col">
              <h1 className=" text-[30px] font-bold">
                Catalogue <br />
                All Your <br /> Timepieces
              </h1>
              <p className=" text-[14px]">
                {/* THIS TEXT SHOULD BE A SLIDESHOW OF 3 DIFFERENT PIECES OF TEXT. CHANGE EVERY 5 SECONDS */}
                From milestone collections, to dream watches and heirlooms,
                curate your entire set with Timelogue&copy;.
              </p>
            </div>
          </section>
        </section>
        <section className="flex h-full w-full text-white xl:text-black xl:w-1/2 xl:p-3 items-center justify-between flex-col">
          {/* TOP HEADER  */}
          <div className="w-full h-[10%] flex justify-center items-center">
            <h3 className="text-[24px] md:text-[22px] lg:text-[20px] 2xl:text-[18px] font-bold">
              Timelogue
            </h3>
          </div>

          {/* AUTHFORM  */}
          <div className="w-full h-[70%] flex flex-col items-center justify-center">
            <h3 className=" text-3xl">Sign In</h3>
            <AuthForm />
            <div className="flex flex-col xl:hidden items-center text-center p-5 ">
              <h1 className=" text-[30px] font-bold">
                Catalogue All Your Timepieces
              </h1>
              <p className=" text-[14px]">
                From milestone collections, to dream watches and heirlooms,
                curate your entire set with Timelogue&copy;.
              </p>
            </div>
          </div>

          {/* LOWER PORTION - DON'T HAVE AN ACC ECT. */}
          <div className="w-full h-[10%] flex flex-col items-center justify-center">
            <p className="text-[14px]">
              &copy; 2024 Hillsawft. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
