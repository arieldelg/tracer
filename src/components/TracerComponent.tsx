import { GetTracer } from "@/lib/type";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiBookmarkRemove } from "react-icons/ci";
import Link from "next/link";

type Props = {
  data: GetTracer;
};

const TracerComponent = ({ data }: Props) => {
  // console.log(data);
  let textStyle: string = "";
  switch (data.priority) {
    case "High":
      textStyle = "text-red-500";
      break;
    case "Medium":
      textStyle = "text-yellow-500";
      break;
    case "Low":
      textStyle = "text-green-500";
      break;
    default:
      textStyle = "";
  }
  const url = data.title.split(" ").join("-");
  return (
    <div className="w-full h-[135px] border rounded-lg bg-[#1d1b1b]">
      <Link
        href={`tracer/${url}-${data._id}`}
        className="h-full flex justify-between flex-col p-2"
      >
        <div className="flex items-start justify-between">
          <h1 className="capitalize">{data.title}</h1>
          <div className="flex flex-col items-end">
            <p className={`${textStyle}`}>{data.priority}</p>
            <span className="flex gap-2 items-center">
              Status:{" "}
              {data.complete ? (
                <CiBookmarkCheck size={30} className="text-green-500" />
              ) : (
                <CiBookmarkRemove size={30} className="text-red-500" />
              )}
            </span>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-center">Created at:</p>
            <p>{data.dateCreated}</p>
          </div>
          <div>
            <p className="text-center">Updated at:</p>
            <p>{data.dateUpdated}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TracerComponent;
