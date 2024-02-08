import { SignOutBtn } from "@/components/auth";
import {
  BrandSocials,
  Sidebyside,
  UserWatches,
  WatchCare,
} from "@/components/homefeedtabs";
import { navlinks } from "@/devdata/navlinks";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: watches, error } = await supabase
    .from("timepieces")
    .select("*")
    .eq("user_id", user?.id);

  if (error) {
    console.error(`Error while fetching timepieces.`);
  }

  return (
    <div className="w-full relative h-screen flex flex-col lg:flex-row bg-gradient-to-br from-black via-[#002244] to-black text-white p-1 md:p-3 lg:p-10">
      <nav className="flex xl:hidden fixed bottom-0 z-10 left-0 right-0 h-[15vh] bg-white/70 backdrop-blur-sm">
        {navlinks.map((link) => (
          <Link
            className="w-1/3 flex justify-center flex-col items-center text-black rounded-lg"
            key={link.id}
            href={link.uniqueLink}
          >
            <p className="flex">{link.title}</p>

            <div className="flex group-hover:hidden transition duration-500 ease-in-out">
              {link.img}
            </div>
          </Link>
        ))}
        <SignOutBtn textcolor="black" />
      </nav>
      <section className="hidden xl:flex h-full w-4/12 flex-col justify-between">
        {/* TOP SECTION  */}
        <div className="w-full h-[60%] flex flex-col items-start text-start p-4">
          <div className="w-[180px] h-[180px] rounded-full overflow-clip relative">
            <Image
              src="/assets/clock.png"
              alt="clock"
              fill
              className=" absolute"
            />
          </div>
          <h1 className="mt-3 text-[12px]">
            Signed in as <p className="text-xl font-bold">{user?.email}</p>
          </h1>
          <p className=" text-[14px]">
            Browse and learn more about timepieces. Or jump right in to create
            and curate your catalogue.
          </p>
          <div className="w-full flex justify-center mt-9 h-[20%] py-3">
            {navlinks.map((link) => (
              <Link
                className="group w-1/3 flex justify-center items-center hover:bg-white text-white hover:text-black rounded-lg"
                key={link.id}
                href={link.uniqueLink}
              >
                <p className="hidden group-hover:flex">{link.title}</p>

                <div className="flex group-hover:hidden transition duration-500 ease-in-out">
                  {link.img}
                </div>
              </Link>
            ))}
            <SignOutBtn textcolor="white" />
          </div>
        </div>

        {/* BOTTOM SECTION  */}
        <div className=" w-full h-[40%]">
          <div className="w-full h-full flex items-end justify-center">
            <p className="text-[14px]">
              &copy; 2024 Hillsawft. All rights reserved.
            </p>
          </div>
        </div>
      </section>
      <section className="flex h-full overflow-auto w-full xl:w-8/12 flex-col gap-6 p-4">
        <WatchCare />
        <Sidebyside />
        <BrandSocials />
        <UserWatches />
      </section>
    </div>
  );
};

export default HomePage;
