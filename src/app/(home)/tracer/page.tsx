import { getTracers } from "@/services/getTracers";

type Props = {
  searchParams: {
    priority: string;
  };
};

const Tracer = async ({ searchParams: { priority } }: Props) => {
  const data = await getTracers();
  const usingParams = data.filter((element) => element._id === priority);
  const restParams = data
    .filter((element) => element._id !== priority)
    .sort((a, b) => a.level - b.level);
  const withoutParams = data.sort((a, b) => a.level - b.level);
  console.log(withoutParams, "aloha");
  // console.log(data);
  return (
    <section>
      <h1>Tracers</h1>
    </section>
  );
};

export default Tracer;
