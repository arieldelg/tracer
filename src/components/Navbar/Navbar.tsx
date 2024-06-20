"use client";
import {
  Bars3Icon,
  UserIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import LinkComponent from "./Link";
import React, { useState } from "react";
import { ReplyIcon } from "@primer/octicons-react";
import { roboto } from "@/app/fonts";

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

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <section className={`border-b-2 border-white/20`}>
      {
        // ! uper title and 3 bar icon
      }
      <div className="w-full h-20  ">
        <Bars3Icon
          className="w-8 absolute right-0 top-0 mr-4 mt-4"
          onClick={() => setOpen((prev) => !prev)}
        />
        <h1 className="text-center text-3xl font-bold p-4">Tracer-Track</h1>
      </div>

      {
        // ! home, search and profile link component
      }
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

      {
        // ! side Menu component
      }
      <div
        className={`absolute bottom-0 left-0  w-5/6 h-full z-50 ${
          open
            ? "transition-all translate-x-0 duration-300"
            : "transition-all -translate-x-[calc(100%+72px)] duration-500"
        }`}
      >
        <div className="w-full h-full  bg-[#222222] border-r border-white/50 rounded-r-xl p-4">
          <div className="flex items-center space-x-4 h-[5%]">
            <button onClick={() => setOpen(false)}>
              <ReplyIcon size={40} className="" />
            </button>
            <h1
              className={`text-3xl font-bold text-center ${roboto.className}`}
            >
              Welcome Ariel
            </h1>
          </div>
          <div className="w-full flex flex-col justify-between h-[95%] pt-4">
            {children}
          </div>
        </div>

        {
          // ! the blur effect
        }
        <div
          className={`absolute top-0 -right-[72px] w-[86px] h-screen -z-50 ${
            open ? " bg-white/5 backdrop-blur-[5px]" : null
          }  `}
        ></div>
      </div>
    </section>
  );
};

export default Navbar;
