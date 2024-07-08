"use client";
import { LuListPlus } from "react-icons/lu";
import { roboto } from "@/app/config/fonts";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { deleteCookie } from "@/services/resetCookie";

type Props = {
  cookie: string;
};

const TitleOptionsTracerPage = (props: Props) => {
  const [open, setOpen] = useState(false);
  const route = useRouter();

  const handleCookie = (object: { 1: string; 2: string }) => {
    if (props.cookie === "false") {
      setCookie("filterTracer", object[2]);
    } else {
      setCookie("filterTracer", object[2]);
    }
    if (props.cookie === object[2]) {
      setCookie("filterTracer", object[1]);
    } else if (props.cookie === object[1]) {
      console.log("ok");

      setCookie("filterTracer", object[2]);
    }
  };

  return (
    <div className="flex items-center justify-between relative h-12">
      <h1 className={`${roboto.className} text-3xl`}>Tracers</h1>
      <LuListPlus size={40} onClick={() => setOpen((prev) => !prev)} />
      {open && (
        <div
          className={`absolute top-full right-2 border bg-[#171515] h-auto px-4 rounded-lg shadow-3xl text-sm py-2 ${roboto.className}`}
        >
          <p className={`pb-2`}>Filter By:</p>
          <hr />
          <div className="space-y-2 py-2">
            <p
              onClick={() => {
                handleCookie({ 1: "dateCreated_1", 2: "dateCreated_-1" });
                setOpen(false);
                route.refresh();
              }}
            >
              Date Created
            </p>
            <p
              onClick={() => {
                handleCookie({ 1: "dateUpdated_1", 2: "dateUpdated_-1" });
                setOpen(false);
                route.refresh();
              }}
            >
              Date Updated
            </p>
            <hr />
            <p>Priority</p>
            <Link
              href={`/tracer?priority=High`}
              onClick={async () => {
                await deleteCookie();
                setOpen(false);
              }}
            >
              <p>&nbsp;&nbsp; High</p>
            </Link>
            <Link
              href={`/tracer?priority=Medium`}
              onClick={async () => {
                await deleteCookie();
                setOpen(false);
              }}
            >
              <p>&nbsp;&nbsp; Medium</p>
            </Link>
            <Link
              href={`/tracer?priority=Low`}
              onClick={async () => {
                await deleteCookie();
                setOpen(false);
              }}
            >
              <p>&nbsp;&nbsp; Low</p>
            </Link>
          </div>
          <hr />
          <Link href={"/filterTracer"}>
            <span className="flex items-center justify-between h-8 pt-2">
              <p>Custom</p>
              <MdOpenInNew size={20} />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TitleOptionsTracerPage;
