"use client";

interface SignOutBtnProps {
  textcolor: string;
}

const SignOutBtn: React.FC<SignOutBtnProps> = ({ textcolor }) => {
  const signOut = () => {
    alert("You have just signed out!");
  };

  return (
    <form
      className={`w-1/3 h-full hover:bg-white text-${textcolor} xl:hover:text-black rounded-lg`}
      action="/auth/signout"
      method="post"
    >
      <button
        onClick={signOut}
        className=" w-full h-full flex justify-center items-center"
      >
        Sign Out
      </button>
    </form>
  );
};

export default SignOutBtn;
