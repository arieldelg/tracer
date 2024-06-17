"use client";
import {
  Bars3Icon,
  UserIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <section className={`border-b-2 border-white/20 `}>
      <div className="w-full h-20 relative ">
        <Bars3Icon className="w-8 absolute right-0 top-0 mr-4 mt-4" />
        <h1 className="text-center text-3xl font-bold p-4">Tracer-Track</h1>
      </div>
      <div className="flex justify-between px-4 pb-4">
        <HomeIcon className="w-8" onClick={() => router.push("/home")} />
        <MagnifyingGlassIcon
          className="w-8"
          onClick={() => router.push("/search")}
        />
        <UserIcon className="w-8" onClick={() => router.push("/profile")} />
      </div>
    </section>
  );
};

export default Navbar;
