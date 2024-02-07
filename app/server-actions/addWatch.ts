"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function addWatch(formData: FormData | any) {
  const maker = formData.get("maker");
  const model = formData.get("model");
  const shoppinglink = formData.get("shoppinglink");
  const rating = formData.get("rating");
  const details = formData.get("details");
  const casematerials = formData.get("casematerials");
  const strapmaterials = formData.get("strapmaterials");
  const waterresistance = formData.get("waterresistance");
  const reservepower = formData.get("reservepower");
  const mechanical = formData.get("mechanical");
  const price = formData.get("price");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("This user is not authenticated");
    return;
  }

  const waterResistance = formData.get("waterresistance") === "true";
  const ismechanical = formData.get("mechanical") === "true";

  const { data, error } = await supabase.from("timepieces").insert([
    {
      user_id: user.id,
      maker,
      model,
      shopping_link: shoppinglink,
      rating,
      details,
      case_material: casematerials,
      strap_material: strapmaterials,
      water_resistance: waterResistance,
      power_reserve_hours: reservepower,
      mechanical: ismechanical,
      price,
    },
  ]);

  if (error) {
    console.error("Error inserting data", error);

    console.log("user_id is:", user.id);
    return;
  }

  revalidatePath("/home");

  return { message: "Success" };
}
