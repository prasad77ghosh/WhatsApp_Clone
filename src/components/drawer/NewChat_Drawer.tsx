import { ReactNode } from "react";

type DrawerProps = {
  children: ReactNode;
  isOpen: boolean;
  header?: string;
  width?: string;
  height?: string;
  side?: string;
  setIsOpen: (isOpen: boolean) => void;
};

// https://codesandbox.io/s/react-with-tailwinds-drawer-bjbfr?file=/src/Drawer.js:0-1064
const NewChat_Drawer = ({
  children,
  isOpen,
  header,
  width,
  height,
  side,
  setIsOpen,
}: DrawerProps) => {
  let classStr = {
    mainStr: `${
      isOpen
        ? "transition-opacity opacity-100 duration-500 translate-x-0"
        : "transition-all delay-500 opacity-0 -translate-x-full"
    }`,
    sectionStr: `w-screen ${width ? width : "max-w-lg"} left-0 h-full ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`,
    articleStr: `w-screen ${
      width ? width : "max-w-lg"
    } h-full pb-10 flex flex-col space-y-6 overflow-y-scroll`,
  };
  // switch (side) {
  //   case "left":
  //     classStr = "";
  // }
  return (
    <main
      className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${classStr.mainStr}`}
    >
      <section
        className={`absolute bg-white shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${classStr.sectionStr}`}
      >
        <article className={`relative ${classStr.articleStr}`}>
          {header ? (
            <header className="p-4 font-bold text-lg">{header}</header>
          ) : null}
          {children}
        </article>
      </section>
      <section
        className="w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default NewChat_Drawer;
