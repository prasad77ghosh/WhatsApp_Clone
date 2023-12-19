import React, { useState } from "react";
import Image from "next/image";
import {
  MdGroups,
  MdAlbum,
  MdChat,
  MdMoreVert,
  MdSearch,
  MdFilterList,
} from "react-icons/md";
import NewChat_Drawer from "../drawer/NewChat_Drawer";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="w-full bg-teal-200 flex flex-col gap-2 sticky top-0 h-[7.5rem]">
        <div className="flex px-2 pt-1 pb-2 bg-red-500 items-center">
          <div className="rounded-full h-[50px] basis-[40%]">
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
          <div className="flex justify-around items-center text-center text-white basis-[60%]">
            <div onClick={() => setIsOpen(true)} className="cursor-pointer">
              <MdGroups size={32} />
            </div>
            <MdAlbum size={26} />
            <MdChat size={26} />
            <MdMoreVert size={26} />
          </div>
        </div>
        <div className="flex justify-between items-center px-2 gap-2">
          <div className="flex items-center text-white px-1 py-[0.4rem] basis-[90%] bg-red-500 rounded-md">
            <div className="px-1">
              <MdSearch size={25} />
            </div>
            <input
              type="text"
              className="ml-2 bg-transparent border-none outline-none w-full"
            />
          </div>
          <div className="basis-[10%] flex items-center justify-center text-white">
            <MdFilterList size={25} />
          </div>
        </div>
      </nav>
      <NewChat_Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header="Header"
        width="w-[26rem]"
      >
        <h1>Drawer</h1>
      </NewChat_Drawer>
    </>
  );
};

export default SideNav;
