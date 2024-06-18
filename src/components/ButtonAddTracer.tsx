"use client";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

// ! Button Component (check if we can reuse this button in the future)

const ButtonAddTracer = () => {
  const route = useRouter();

  return (
    <div>
      <button
        className="absolute right-4 top-2"
        onClick={() => route.push("/home/new_tracer")}
      >
        <PlusCircleIcon className="w-12 active:text-green-500 active:animate-ping z-10" />
        <PlusCircleIcon className="w-12 absolute top-0 -z-20" />
      </button>
    </div>
  );
};

export default ButtonAddTracer;
