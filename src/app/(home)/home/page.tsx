import { UsersIcon } from "@heroicons/react/24/solid";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { BsExclamationDiamond, BsExclamationCircle } from "react-icons/bs";
import ContactCard from "@/components/ContactCard";
import ButtonAddTracer from "@/components/ButtonAddTracer";
import { Sort } from "@/lib/type";

const Home = async () => {
  const response = await fetch(
    `${process.env.SERVER_ACTIONS_ENDPOINTS}/api/getAllTracers`,
    {
      next: { tags: ["home"] },
      cache: "no-store",
    }
  );
  const data: Sort = await response.json();

  return (
    <>
      {
        // ! button to add more tracers
      }
      <ButtonAddTracer />

      {
        // ! section High Tracers
      }

      <div>
        <div className="flex items-center space-x-4 pb-4 border-b-2 border-white/10">
          <p className="text-[30px] pr-2">1</p>
          <BsExclamationDiamond size={30} style={{ margin: 0, color: "red" }} />
          <h2 className="text-xl font-bold">High Tracers</h2>
        </div>
        <div className="py-4">
          {data.high.map((element) => {
            return <p key={element.id}>{element.title}</p>;
          })}
          {/* <ul>
            <li>
              Para tener un componente servidor dentro de un componente cliente
              se debe usar el metodo de envoltura directa ejemplo:
              <br />
              div-component-div
            </li>
          </ul> */}
        </div>
      </div>

      {
        // ! section Medium Tracers
      }

      <div className="">
        <div className="flex items-center space-x-4 pb-4 border-b-2 border-white/10">
          {/* <p>0</p> */}
          <HiOutlineExclamationTriangle
            size={30}
            style={{ margin: 0, color: "yellow" }}
          />
          <h2 className="text-xl font-bold">Medium Tracers</h2>
        </div>
        <div className="py-4">
          <ul>
            <li>
              Aqui van los traces con importancia media, osea no muy urgentes
            </li>
          </ul>
        </div>
      </div>

      {
        // ! section Lower Tracers
      }

      <div className="">
        <div className="flex items-center space-x-4 pb-4 border-b-2 border-white/10">
          <BsExclamationCircle
            size={30}
            style={{ margin: 0, color: "green" }}
          />
          <h2 className="text-xl font-bold">Low Tracers</h2>
        </div>
        <div className="py-4">
          <ul>
            <li>Aqui van los tracer de baja prioridad</li>
          </ul>
        </div>
      </div>

      {
        // ! section Contacts
      }

      <div className="">
        <div className="flex items-center space-x-4 pb-4 border-b-2 border-white/10">
          <UsersIcon className="w-8" />
          <h2 className="text-xl font-bold">Contacts</h2>
        </div>
        <div className="py-6 space-y-4">
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </div>
      </div>
    </>
  );
};

export default Home;
