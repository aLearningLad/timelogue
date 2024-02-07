"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteWatch(formData: FormData | any) {
  const watchId = formData.get("id");

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

  const { error } = await supabase.from("timepieces").delete().match({
    id: watchId,
    user_id: user.id,
  });
  if (error) {
    console.error("Error deleting data", error);
    console.log("watchId:", watchId);
    console.log("user_id is:", user.id);
    return;
  }

  revalidatePath("/home");

  return { message: "Success" };
}
