"use client";
import { LuListPlus } from "react-icons/lu";
import { roboto } from "@/app/fonts";
import { useState } from "react";
import { MdOpenInNew } from "react-icons/md";
import Link from "next/link";

const TitleOptionsTracerPage = () => {
  const [open, setOpen] = useState(false);
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
            <p>Date Created</p>
            <p>Date Updated</p>
            <hr />
            <p>Priority</p>
            <p>&nbsp;&nbsp; High</p>
            <p>&nbsp;&nbsp; Medium</p>
            <p>&nbsp;&nbsp; Low</p>
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
