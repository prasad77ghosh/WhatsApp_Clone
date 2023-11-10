import React from "react";
import AddressBox from "./cards/AddressBox";
import SideNav from "./cards/SideNav";

const SideBox = () => {
  return (
    <div className="h-full">
      <SideNav />
      <div className="overflow-y-auto flex flex-col gap-[0.4rem] p-1 h-[calc(100vh-8rem)]">
        {dummyBoxArr.map((box) => (
          <AddressBox
            key={box.id}
            name={box.name}
            time={box.time}
            imgLink={box.imgLink}
            lastMessage={box.lastMessage}
          />
        ))}
      </div>
    </div>
  );
};

const dummyBoxArr = [
  {
    id: 1,
    name: "SY- Announcement Group(No WFH)",
    time: "8:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
  {
    id: 2,
    name: "Yard One",
    time: "4:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
  {
    id: 3,
    name: "FJP5 Group",
    time: "12:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
  {
    id: 4,
    name: "FJP5 Group",
    time: "12:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
  {
    id: 5,
    name: "FJP5 Group",
    time: "12:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
  {
    id: 6,
    name: "FJP5 Group",
    time: "12:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
  {
    id: 7,
    name: "FJP5 Group",
    time: "12:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
  {
    id: 8,
    name: "FJP5 Group",
    time: "12:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
  {
    id: 9,
    name: "FJP5 Group",
    time: "12:22 PM",
    imgLink: "/group.jpg",
    lastMessage:
      "Image sabu vaneibaku deba and industry wise solution deiki seibhali theme re image pakeibaku chandannku adhe and sukant ku adhe deideba. Before Friday darkar ",
  },
];

export default SideBox;
