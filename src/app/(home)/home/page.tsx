import { UsersIcon } from "@heroicons/react/24/solid";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { BsExclamationDiamond, BsExclamationCircle } from "react-icons/bs";
import ContactCard from "@/components/ContactCard";
import ButtonAddTracer from "@/components/ButtonAddTracer";
import { GetTracer } from "@/lib/type";
import TracerCard from "@/components/TracerCard";

const Home = async () => {
  const getTracers = async () => {
    "use server";
    const apiUrl = process.env.API_URL;
    console.log(apiUrl, "perro");
    const response = await fetch(`${apiUrl}/api/addTracer`, {
      next: { tags: ["home"] },
    });
    const data: GetTracer[] = await response.json();
    const sort = data.sort((a, b) => a.priority.localeCompare(b.priority));

    const high: GetTracer[] = [];
    const medium: GetTracer[] = [];
    const low: GetTracer[] = [];
    sort.forEach((element) => {
      if (element.priority === "High") {
        high.push(element);
      } else if (element.priority === "Medium") {
        medium.push(element);
      } else if (element.priority === "Low") {
        low.push(element);
      }
    });
    const object = {
      high: high,
      medium: medium,
      low: low,
    };
    return object;
  };
  const data = await getTracers();
  console.log(data);
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
          <p className="text-[30px] pr-2">{data.high.length}</p>
          <BsExclamationDiamond size={30} style={{ margin: 0, color: "red" }} />
          <h2 className="text-3xl font-bold">High Tracers</h2>
        </div>
        <div className="py-8 space-y-6">
          {data.high.map((element) => {
            return <TracerCard key={element._id} data={element} />;
          })}
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
