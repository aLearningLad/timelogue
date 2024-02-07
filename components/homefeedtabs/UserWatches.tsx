"use server";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { WatchCard } from "../commonui";
import { Iwatchcard } from "@/types";

const UserWatches = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: userWatches, error } = await supabase
    .from("timepieces")
    .select("*")
    .eq("user_id", user?.id)
    .order("maker", { ascending: true });

  console.log("theres are the watches:", userWatches);

  return (
    <div className="w-full min-h-[90vh] border-2 border-white flex flex-col text-center xl:text-start">
      <h1 className="text-[20px]">Your watch collection</h1>
      <div className="w-full gap-3 h-full pb-[15vh] overflow-auto grid grid-cols-1 xl:grid-cols-2 p-2 lg:p-4">
        {userWatches?.map((card: Iwatchcard) => (
          <WatchCard
            case_material={card.case_material}
            details={card.details}
            id={card.id}
            key={card.id}
            maker={card.maker}
            mechanical={card.mechanical}
            model={card.model}
            power_reserve_hours={card.power_reserve_hours}
            price={card.price}
            rating={card.rating}
            shopping_link={card.shopping_link}
            water_resistance={card.water_resistance}
          />
        ))}
      </div>
    </div>
  );
};

export default UserWatches;
