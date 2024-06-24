"use client";
import { GetTracer } from "@/lib/type";
import { FaRegCircleXmark } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import React, { useState } from "react";
import { roboto } from "@/app/fonts";
import Link from "next/link";

type Props = {
  data: GetTracer;
};

const TracerCard = ({ data }: Props) => {
  const [colorSVG, setColoSVG] = useState<string>("");
  const url = data.title.split(" ").join("-");
  const handleCheck = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    setColoSVG("text-green-500");
  };
  return (
    <Link
      href={`tracer/${url}`}
      className="w-full h-16 border rounded-xl shadow-6xl bg-[#222222] flex items-center justify-between px-2"
    >
      <div className="flex space-x-2 items-center">
        <CiSquareCheck
          size={42}
          className={`${colorSVG}`}
          onClick={(e) => handleCheck(e)}
        />
        <p className={`text-2xl capitalize ${roboto.className}`}>
          {data.title}
        </p>
      </div>
      <FaRegCircleXmark size={40} />
    </Link>
  );
};

export default TracerCard;
