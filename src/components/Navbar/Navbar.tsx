"use client";
import {
  Bars3Icon,
  UserIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import LinkComponent from "./Link";
import React, { useEffect, useState } from "react";
import { ReplyIcon } from "@primer/octicons-react";
import { roboto } from "@/app/fonts";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNoteSticky, FaCartShopping } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import Button from "@/components/Button";
import { MdCookie } from "react-icons/md";
import { signOut } from "next-auth/react";

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

const routesSideMenu = [
  {
    url: "/settings",
    icons: <IoSettingsOutline size={30} />,
    text: "Settings",
  },
  { url: "/tracer", icons: <FaNoteSticky size={30} />, text: "Tracers" },
  { url: "/contacts", icons: <RiContactsFill size={30} />, text: "Contacts" },
  { url: "/cookies", icons: <MdCookie size={30} />, text: "Cookies" },
  { url: "/products", icons: <FaCartShopping size={30} />, text: "Products" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [_document, set_Document] = useState<Document>();
  {
    // ! aqui estoy mostrando que lo guardo en un estado
  }
  useEffect(() => {
    set_Document(document);
  }, []);

  {
    // ! para vercel es necesario checar si document no es undefined, en este caso yo cheque si no era undefined y lo guarde en un estado
  }
  const handleOpen = () => {
    if (open) {
      if (_document !== undefined) {
        return document.body.classList.add("overflow-hidden");
      }
    } else if (open === false) {
      if (_document !== undefined) {
        return document.body.classList.remove("overflow-hidden");
      }
    }
  };

  return (
    <section
      className={`border-b-2 border-white/20 fixed top-0 left-0 z-50 bg-[#222222] w-screen h-[130px]`}
    >
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
        // ! side Menu component the complete component
      }
      <div
        className={`absolute top-0 left-0  w-5/6 h-screen z-50 ${handleOpen()} ${
          open
            ? "transition-all translate-x-0 duration-300"
            : "transition-all -translate-x-[calc(100%+72px)] duration-500"
        }`}
      >
        {
          // ! aqui adentro se encuentra el titulo del sideMenu y el children donde se van a renderizar lo demas del sideMenu, se uso children para que se siga trabajando con side server component
        }
        <div className="w-full h-screen  bg-[#222222] border-r border-white/50 rounded-r-xl p-4">
          <div className="flex items-center space-x-4 h-[10%]">
            <button onClick={() => setOpen(false)}>
              <ReplyIcon size={40} />
            </button>
            <h1
              className={`text-3xl font-bold text-center ${roboto.className}`}
            >
              Welcome Ariel
            </h1>
          </div>
          <div className="w-full flex flex-col justify-between h-[90%] pt-4">
            <div className={`h-5/6 border-t-2 border-white/10 pl-4 pt-4`}>
              <ul className={roboto.className}>
                {routesSideMenu.map((element) => {
                  return (
                    <li key={element.url}>
                      <LinkComponent
                        url={element.url}
                        icon={element.icons}
                        text={element.text}
                        onClick={setOpen}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <Button
                url="/login"
                type="button"
                color="red"
                name="Log Out"
                onlyOne={true}
                font={roboto.className}
                onClick={signOut}
              >
                {<FaPowerOff />}
              </Button>
            </div>
          </div>
        </div>

        {
          // ! the blur effect es un div sin nada adentro, con el classname de absolute
        }
        <div
          className={`absolute top-0 left-0 w-screen h-screen -z-50 ${
            open ? " bg-white/5 backdrop-blur-[5px]" : null
          }  `}
        ></div>
      </div>
    </section>
  );
};

export default Navbar;
