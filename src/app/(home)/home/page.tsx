import { UsersIcon } from "@heroicons/react/24/solid";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { BsExclamationCircle } from "react-icons/bs";
import ContactCard from "@/components/ContactCard";
import ButtonAddTracer from "@/components/ButtonAddTracer";
import SectionTracerCards from "@/components/SectionTracerCards";
import { BsExclamationDiamond } from "react-icons/bs";
import { getTracers } from "@/services/getTracers";

const Home = async () => {
  // ! server action of getting tracer
  const data = await getTracers();
  //! manipulating the data
  const high = data.filter((element) => element._id === "High");
  const medium = data.filter((element) => element._id === "Medium");
  const low = data.filter((element) => element._id === "Low");
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
        <SectionTracerCards
          data={high}
          title="High Tracers"
          icon={
            <BsExclamationDiamond
              size={30}
              style={{ margin: 0, color: "red" }}
            />
          }
        />
      </div>

      {
        // ! section Medium Tracers
      }

      <div className="">
        <SectionTracerCards
          data={medium}
          title="Medium Tracers"
          icon={
            <HiOutlineExclamationTriangle
              size={30}
              style={{ margin: 0, color: "yellow" }}
            />
          }
        />
      </div>

      {
        // ! section Lower Tracers
      }

      <div className="">
        <SectionTracerCards
          data={low}
          title="Low Tracers"
          icon={
            <BsExclamationCircle
              size={30}
              style={{ margin: 0, color: "green" }}
            />
          }
        />
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
