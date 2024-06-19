"use client";
import {
  Bars3Icon,
  UserIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import LinkComponent from "./Link";
import { useState } from "react";

// ! type of Routes

type TypeRoutes = {
  url: string;
  icon?: any;
  text?: string;
};

// ! array of routes

const routes: TypeRoutes[] = [
  {
    url: "/home",
    icon: <HomeIcon className="w-8" />,
  },
  {
    url: "/search",
    icon: <MagnifyingGlassIcon className="w-8" />,
  },
  {
    url: "/profile",
    icon: <UserIcon className="w-8" />,
  },
];

const WrapperClient = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div className="w-full h-20  ">
        <Bars3Icon
          className="w-8 absolute right-0 top-0 mr-4 mt-4"
          onClick={() => setOpen((prev) => !prev)}
        />
        <h1 className="text-center text-3xl font-bold p-4">Tracer-Track</h1>
      </div>
      <div className="flex justify-between px-4 pb-4">
        {routes.map((element) => {
          return (
            <LinkComponent
              url={element.url}
              key={element.url}
              icon={element.icon}
            />
          );
        })}
      </div>

      <section
        className={`absolute bottom-0 left-0 bg-[#222222] border-r border-white/50 rounded-r-xl w-5/6 h-full z-50 ${
          open
            ? "transition-all translate-x-0 duration-500"
            : "transition-all -translate-x-full duration-500"
        }`}
      >
        {children}
      </section>
    </>
  );
};

export default WrapperClient;
