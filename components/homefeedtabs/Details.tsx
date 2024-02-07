import React from "react";

interface DetailsProps {
  details: string;
  handleModal: any;
}

const Details: React.FC<DetailsProps> = ({ details, handleModal }) => {
  return (
    <div className="w-full p-4 lg:p-5 flex justify-center items-center flex-col text-center z-10 hover:bg-black absolute top-0 bottom-0 left-0 right-0 bg-white/50 backdrop-blur-md rounded-xl md:rounded-3xl xl:rounded-[36px]">
      <p className="h-[80%] text-black group-hover:text-white w-full p-3 text-[18px]">
        {details ? details : "You haven't saved any details about this watch"}
      </p>
      <button
        className="py-3 w-full h-fit text-xl bg-black text-white group-hover:text-black group-hover:bg-white rounded-xl"
        onClick={handleModal}
      >
        Close
      </button>
    </div>
  );
};

export default Details;
