"use client";
import { TracerElement } from "@/lib/type";
import { FaRegCircleXmark } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import React, { startTransition, useOptimistic } from "react";
import { roboto } from "@/app/fonts";
import Link from "next/link";
import { updateTracerById } from "@/services/updateTracerById";
import { deleteTracerById } from "@/services/deleteTracerById";

type Props = {
  data: TracerElement[];
};

const TracerCard = ({ data }: Props) => {
  //! using optimistic
  const [tracerOptimistic, setTracerOptimistic] = useOptimistic(
    data,
    (state, { action, task }: { action: string; task: TracerElement }) => {
      switch (action) {
        case "delete":
          return state.filter(({ _id }) => _id !== task._id);
        case "update":
          return state.map((t) => {
            if (t._id === task._id) {
              return {
                _id: task._id,
                complete: !task.complete,
                priority: task.priority,
                text: task.text,
                title: task.title,
              };
            } else {
              return t;
            }
          });
        default:
          return [...state, task];
      }
    }
  );

  // ! event handler to update tracer and calls a server action
  const handleCheck = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    data: TracerElement
  ) => {
    e.preventDefault();
    startTransition(() =>
      setTracerOptimistic({
        action: "update",
        task: data,
      })
    );
    updateTracerById({
      title: data.title,
      text: data.text,
      complete: !data.complete,
      priority: data.priority,
      id: data._id,
    });
  };
  // ! event handler to delete tracer and calls a server action

  const handleDelete = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    data: TracerElement
  ) => {
    e.preventDefault();
    startTransition(() =>
      setTracerOptimistic({
        action: "delete",
        task: data,
      })
    );
    deleteTracerById({
      id: data._id,
    });
  };

  return (
    <>
      {tracerOptimistic.map((element) => {
        const url = element.title.split(" ").join("-");

        return (
          <Link
            key={element._id}
            href={`tracer/${url}-${element._id}`}
            className="w-full h-16 border rounded-xl shadow-6xl bg-[#222222] flex items-center justify-between px-2"
          >
            <div className="flex space-x-2 items-center">
              <CiSquareCheck
                size={42}
                className={`${element.complete ? "text-green-500" : null}`}
                onClick={(e) => handleCheck(e, element)}
              />
              <p className={`text-2xl capitalize ${roboto.className}`}>
                {element.title}
              </p>
            </div>
            <FaRegCircleXmark
              size={40}
              onClick={(e) => handleDelete(e, element)}
            />
          </Link>
        );
      })}
    </>
  );
};

export default TracerCard;
