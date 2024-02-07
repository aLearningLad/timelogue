"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthForm = () => {
  const supabase = createClientComponentClient();

  return (
    <div className="w-full h-[60%] flex items-center justify-center flex-col">
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        showLinks={false}
        providers={[]}
        redirectTo="http://localhost:3000/auth/callback"
        appearance={{
          style: {
            button: {
              background: "#1DA1F2",
              color: "white",
              border: "none",
              height: "50px",
              width: "350px",
              borderRadius: "6px",
              fontSize: "19px",
              fontWeight: "900",
            },
            anchor: {
              color: "red",
              background: "black",
            },
            input: {
              background: "#62626B",
              opacity: "70%",
              color: "white",
              height: "50px",
              paddingLeft: "12px",
              paddingRight: "12px",
              borderRadius: "6px",
              border: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default AuthForm;
