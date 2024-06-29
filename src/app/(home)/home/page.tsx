import { UsersIcon } from "@heroicons/react/24/solid";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
import { BsExclamationCircle } from "react-icons/bs";
import ContactCard from "@/components/ContactCard";
import ButtonAddTracer from "@/components/ButtonAddTracer";
import { Tracer } from "@/lib/type";
import SectionTracerCards from "@/components/SectionTracerCards";
import { BsExclamationDiamond } from "react-icons/bs";

const Home = async () => {
  // ! server action of getting tracer

  // ! call the url env
  const apiUrl = process.env.API_URL;
  // !making the fetch
  const response = await fetch(`${apiUrl}/api/addTracer`, {
    next: { tags: ["home"] },
  });
  //! manipulating the data
  const data: Tracer[] = await response.json();
  const noElements = "Add a new Tracer";
  const high = data.filter((element) => element._id === "High").length
    ? data.filter((element) => element._id === "High")
    : noElements;
  const medium =
    data.filter((element) => element._id === "Medium").length > 0
      ? data.filter((element) => element._id === "Medium")
      : noElements;
  const low =
    data.filter((element) => element._id === "Low").length > 0
      ? data.filter((element) => element._id === "Low")
      : noElements;
  // console.log(low);
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
