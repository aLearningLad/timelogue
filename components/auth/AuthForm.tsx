"use client";

import { Auth } from "@supabase/auth-ui-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthForm = () => {
  const supabase = createClientComponentClient();

  const customTheme = {
    default: {
      colors: {
        brand: "#1DA1F2",
        brandAccent: "1DA1F2",
        brandButtonText: "white",
        // ..
      },
    },
    dark: {
      colors: {
        brandButtonText: "white",
        defaultButtonBackground: "#1DA1F2",
        defaultButtonBackgroundHover: "#000000",
        //..
      },
    },
    // You can also add more theme variations with different names.
    evenDarker: {
      colors: {
        brandButtonText: "white",
        defaultButtonBackground: "##000000",
        defaultButtonBackgroundHover: "##000000",
        //..
      },
    },
  };

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
