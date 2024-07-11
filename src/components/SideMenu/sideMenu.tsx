"use client";
import { ReplyIcon } from "@primer/octicons-react";
import { roboto } from "@/config/fonts";
import { FaPowerOff } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNoteSticky, FaCartShopping } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { MdCookie } from "react-icons/md";
import { sideMenu } from "@/store";
import { useEffect } from "react";
import { Button, LinkComponent } from "@/components";

// ! array of routes (side menu)

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

const SideMenu = () => {
  const isSideMenuOpen = sideMenu((state) => state.isSideMenuOpen);
  const closeMenu = sideMenu((state) => state.closeSideMenu);

  useEffect(() => {
    if (isSideMenuOpen) {
      return document.body.classList.add("overflow-hidden");
    } else {
      return document.body.classList.remove("overflow-hidden");
    }
  }, [isSideMenuOpen]);

  return (
    <section
      className={` fixed top-0 left-0  w-5/6 h-screen z-50 ${
        isSideMenuOpen
          ? "transition-all translate-x-0 duration-300"
          : "transition-all -translate-x-[calc(100%+72px)] duration-500"
      }`}
    >
      {
        // ! aqui adentro se encuentra el titulo del sideMenu y el children donde se van a renderizar lo demas del sideMenu, se uso children para que se siga trabajando con side server component
      }
      <div className="w-full h-screen  bg-[#222222] border-r border-white/50 rounded-r-xl p-4">
        <div className="flex items-center space-x-4 h-[10%]">
          <button onClick={() => closeMenu()}>
            <ReplyIcon size={40} />
          </button>
          <h1 className={`text-3xl font-bold text-center ${roboto.className}`}>
            Welcome Ariel
          </h1>
        </div>
        <div className="w-full flex flex-col justify-between h-[90%] pt-4">
          <div className={`h-5/6 border-t-2 border-white/10 pl-4 pt-4`}>
            <ul className={roboto.className}>
              {routesSideMenu.map((element) => {
                return (
                  <li key={element.url} onClick={() => closeMenu()}>
                    <LinkComponent
                      url={element.url}
                      icon={element.icons}
                      text={element.text}
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
              action="logout"
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
          isSideMenuOpen ? " bg-white/5 backdrop-blur-[5px]" : null
        }  `}
      />
    </section>
  );
};

export default SideMenu;
