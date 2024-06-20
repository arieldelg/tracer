import Navbar from "@/components/Navbar/Navbar";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import { roboto } from "../fonts";
import Button from "@/components/Button";
import LinkComponent from "@/components/Navbar/Link";

const routes = [
  {
    url: "/settings",
    icons: <IoSettingsOutline size={30} />,
    text: "Settings",
  },
  { url: "/tracers", icons: <FaNoteSticky size={30} />, text: "Tracers" },
  { url: "/contacts", icons: <RiContactsFill size={30} />, text: "Contacts" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log("hola layout");
  return (
    <main className="relative">
      {
        // ! Navbar component (Client Component)
      }
      <Navbar>
        <>
          <div className={`h-5/6 border-t-2 border-white/10 pl-4 pt-4`}>
            <ul className={roboto.className}>
              {routes.map((element) => {
                return (
                  <li key={element.url}>
                    <LinkComponent
                      url={element.url}
                      icon={element.icons}
                      text={element.text}
                      font={roboto.className}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <Button
              url="/login"
              color="red"
              name="Log Out"
              onlyOne={true}
              font={roboto.className}
            >
              {<FaPowerOff />}
            </Button>
          </div>
        </>
      </Navbar>
      {
        // ! children render
      }
      <div className="w-full h-auto relative px-6 py-4">{children}</div>
    </main>
  );
};

//[calc(100vh-130px)]

export default Layout;
