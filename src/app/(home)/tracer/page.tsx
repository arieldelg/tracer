import { GetTracer } from "@/lib/type";
import filterTracers from "@/services/filterTracers";
import { TitleOptionsTracerPage } from "@/components";
import { cookies } from "next/headers";
import { TracerComponent } from "@/components";
import Link from "next/link";

type Props = {
  searchParams: {
    type: string;
  };
};

const TracerPage = async ({ searchParams }: Props) => {
  const getMyCookie = cookies();
  const cookie = getMyCookie.get("filterTracer")?.value ?? "false";
  const data = await filterTracers(cookie);

  if (typeof data === "string") {
    return;
  }

  let usingParams: GetTracer[] = [];
  if (Object.values(searchParams).length > 0) {
    const key = Object.keys(searchParams)[0];
    const value = Object.values(searchParams)[0];
    usingParams = data.filter((element) => {
      const labels: Record<string, string | boolean> = {
        ["complete"]: element.complete,
        ["priority"]: element.priority,
      };
      // console.log(labels[key]);
      // console.log(String(value) == "true");
      if (typeof labels[key] === "boolean") {
        const newValue = String(value) == "true";
        return labels[key] === newValue;
      } else {
        return labels[key] === value;
      }
    });
    // console.log(usingParams);
  } else {
    usingParams = data;
  }
  return (
    <section className="space-y-4 h-auto w-full">
      <div>
        <TitleOptionsTracerPage cookie={cookie} />
      </div>
      {Object.values(searchParams).length > 0 && (
        <Link href={"/tracer"}>Remove Filters</Link>
      )}
      <div className="space-y-4">
        {usingParams.map((element) => {
          return <TracerComponent key={element._id} data={element} />;
        })}
      </div>

      {/* <div className="space-y-4">
        {restParams.map((element) => {
          return <TracerComponent key={element._id} data={element} />;
        })}
      </div> */}
    </section>
  );
};

export default TracerPage;
