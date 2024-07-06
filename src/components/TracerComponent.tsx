import { GetTracer } from "@/lib/type";

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
  return (
    <div className="w-full h-28 border p-2 rounded-lg flex flex-col justify-between bg-[#1d1b1b]">
      <div className="flex items-center justify-between">
        <h1 className="capitalize">{data.title}</h1>
        <p className={`${textStyle}`}>{data.priority}</p>
      </div>
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
    </div>
  );
};

export default TracerComponent;
