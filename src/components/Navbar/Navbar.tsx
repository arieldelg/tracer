"use client";
import {
  Bars3Icon,
  UserIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { LinkComponent } from "@/components";
import React from "react";
import { sideMenu } from "@/store";

// ! type of the routes Routes (type script)

type TypeRoutes = {
  url: string;
  icon?: any;
  text?: string;
};

// ! array of routes (top menu)

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

// ! component Navbar

export const Navbar = () => {
  const openSideMenu = sideMenu((state) => state.openSideMenu);

  return (
    <section
      className={`border-b-2 border-white/20 fixed top-0 left-0 z-10 bg-[#222222] w-screen h-[130px]`}
    >
      {
        // ! uper title and 3 bar icon
      }
      <div className="w-full h-20  ">
        <Bars3Icon
          className="w-8 absolute right-0 top-0 mr-4 mt-4"
          onClick={() => openSideMenu()}
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
    </section>
  );
};
