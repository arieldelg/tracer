import {
  Bars3Icon,
  UserIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import LinkComponent from "./Link";

{
  // ! type of Routes
}

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

const Navbar = () => {
  return (
    <section className={`border-b-2 border-white/20 `}>
      <div className="w-full h-20 relative ">
        <Bars3Icon className="w-8 absolute right-0 top-0 mr-4 mt-4" />
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
    </section>
  );
};

export default Navbar;
