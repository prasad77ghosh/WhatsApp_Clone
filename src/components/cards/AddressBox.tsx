import Image from "next/image";
import React from "react";

type BOX_TYPE = {
  name: string;
  time: string;
  imgLink: string;
  lastMessage: string;
};

const AddressBox = ({ name, time, imgLink, lastMessage }: BOX_TYPE) => {
  return (
    <div className="flex w-full gap-4 items-center bg-gray-500 p-2 rounded-md cursor-pointer">
      <div className="rounded-full h-[50px]">
        <Image
          src={imgLink}
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
        <div className="flex justify-between">
          <p className="font-semibold">
            {name.length > 25 ? `${name.slice(0, 25)}...` : name}
          </p>
          <span>{time}</span>
        </div>
        <div>
          <p>
            {lastMessage.length > 40
              ? `${lastMessage.slice(0, 40)}...`
              : lastMessage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressBox;
