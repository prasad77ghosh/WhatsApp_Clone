import React from "react";
import Image from "next/image";
import {
  MdSearch,
  MdPermPhoneMsg,
  MdVideocam,
  MdMoreVert,
  MdAdd,
  MdOutlineMic,
} from "react-icons/md";

const ManContNav = () => {
  return (
    <header className="flex items-center px-3 pb-2 pt-1 bg-blue-400 sticky top-0">
      <div className="flex basis-[80%] gap-3">
        <div className="rounded-full h-[50px]">
          <Image
            src="/profile.jpg"
            width={50}
            height={50}
            alt="profile"
            className="
              h-full
              rounded-full
              object-cover"
          />
        </div>
        <div>
          <p className="font-bold">Ranjit Sir SY</p>
          <p>Abhilash, Prasad, Gourav, Loushik, Biswa, Ranjit</p>
        </div>
      </div>
      <div className="flex basis-[20%] items-center justify-between">
        <MdPermPhoneMsg size={26} />
        <MdVideocam size={26} />
        <MdSearch size={26} />
        <MdMoreVert size={26} />
      </div>
    </header>
  );
};

export default ManContNav;
