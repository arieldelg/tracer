import SideMenu from "../SideMenu";
import WrapperClient from "./WrapperClient";

const Navbar = () => {
  return (
    <section className={`border-b-2 border-white/20`}>
      <WrapperClient>
        <SideMenu />
      </WrapperClient>
    </section>
  );
};

export default Navbar;
