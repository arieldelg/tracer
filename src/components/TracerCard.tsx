"use client";
import { GetTracer } from "@/lib/type";
import { FaRegCircleXmark } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import React from "react";
import { roboto } from "@/app/fonts";
import Link from "next/link";
import { updateTracerById } from "@/services/updateTracerById";
import { deleteTracerById } from "@/services/deleteTracerById";

type Props = {
  data: GetTracer;
};

const TracerCard = ({ data }: Props) => {
  // const [colorSVG, setColoSVG] = useState<string>("");
  const url = data.title.split(" ").join("-");
  // ! event handler to update tracer
  const handleCheck = async (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    const response = await updateTracerById({
      title: data.title,
      text: data.text,
      complete: !data.complete,
      priority: data.priority,
      id: data._id,
    });
    console.log(response);
  };

  // ! event handler to delete tracer
  const handleDelete = async (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.preventDefault();
    const id = data._id;
    const response = await deleteTracerById({
      id: id,
    });
    console.log(response);
  };

  return (
    <Link
      href={`tracer/${url}-${data._id}`}
      className="w-full h-16 border rounded-xl shadow-6xl bg-[#222222] flex items-center justify-between px-2"
    >
      <div className="flex space-x-2 items-center">
        <CiSquareCheck
          size={42}
          className={`${data.complete ? "text-green-500" : null}`}
          onClick={(e) => handleCheck(e)}
        />
        <p className={`text-2xl capitalize ${roboto.className}`}>
          {data.title}
        </p>
      </div>
      <FaRegCircleXmark size={40} onClick={(e) => handleDelete(e)} />
    </Link>
  );
};

export default TracerCard;
