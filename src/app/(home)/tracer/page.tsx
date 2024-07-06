import { auth } from "@/auth";
import TracerComponent from "@/components/TracerComponent";
import { GetTracer } from "@/lib/type";
import filterTracers from "@/services/filterTracers";
import TitleOptionsTracerPage from "@/components/TitleOptionsTracerPage";

type Props = {
  searchParams: {
    priority: string;
  };
};

const TracerPage = async ({ searchParams: { priority } }: Props) => {
  const session = await auth();
  const data = await filterTracers(session?.user?.id ?? "no-id", "false");
  let usingParams: GetTracer[] = [];
  let restParams: GetTracer[] = [];
  if (priority) {
    usingParams = data.filter((element) => element.priority === priority);
    restParams = data
      .filter((element) => element.priority !== priority)
      .sort((a, b) => a.level - b.level);
    console.log(usingParams, "usingParams");
    console.log(restParams, "restParams");
  } else {
    usingParams = data;
  }
  console.log(usingParams, "using params");
  return (
    <section className="space-y-4 h-auto w-full">
      <div>
        <TitleOptionsTracerPage />
      </div>
      <div className="space-y-4">
        {usingParams.map((element) => {
          return <TracerComponent key={element._id} data={element} />;
        })}
      </div>
      <div className="space-y-4">
        {restParams.map((element) => {
          return <TracerComponent key={element._id} data={element} />;
        })}
      </div>
    </section>
  );
};

export default TracerPage;
