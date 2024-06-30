import { getTracers } from "@/services/getTracers";

const Tracer = async () => {
  const data = await getTracers();
  console.log(data);
  return <div>Tracer</div>;
};

export default Tracer;
