"use client";

import { useState } from "react";
import { Details } from ".";

interface ViewDetailsProps {
  details: string;
}

const ViewDetails: React.FC<ViewDetailsProps> = ({ details }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    // alert("Handle modal clicked!");
    setModal((prev) => !prev);
  };

  return (
    <>
      {modal && <Details details={details} handleModal={handleModal} />}
      <button
        onClick={handleModal}
        className="xl:group-hover:border-2 text-xl py-3 rounded-lg xl:group-hover:border-white absolute xl:text-transparent xl:group-hover:absolute xl:group-hover:text-white top-4 left-5 right-5 text-white"
      >
        More
      </button>
    </>
  );
};

export default ViewDetails;
