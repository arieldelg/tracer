import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { FaNoteSticky } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { FaPowerOff } from "react-icons/fa";
import { roboto } from "../fonts";
import Button from "@/components/Button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log("hola layout");
  return (
    <main className="relative">
      <Navbar>
        <>
          <div className={`h-5/6 border-t-2 border-white/10 pl-4 pt-4`}>
            <ul className={roboto.className}>
              <li className="text-3xl">
                <Link href={"/settings"} className="flex items-center gap-4">
                  <IoSettingsOutline size={30} />
                  Settings
                </Link>
              </li>
              <li className="text-3xl mt-4">
                <Link href={"/tracers"} className="flex items-center gap-4">
                  <FaNoteSticky size={30} />
                  Tracers
                </Link>
              </li>
              <li className="text-3xl mt-4">
                <Link href={"/contacts"} className="flex items-center gap-4">
                  <RiContactsFill size={30} />
                  Contacts
                </Link>
              </li>
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
      <div className="w-full h-auto relative px-6 py-4">{children}</div>
    </main>
  );
};

//[calc(100vh-130px)]

export default Layout;
