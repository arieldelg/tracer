"use client";
import { TracerElement } from "@/lib/type";
import { FaRegCircleXmark } from "react-icons/fa6";
import { CiSquareCheck } from "react-icons/ci";
import React, { startTransition, useOptimistic, useState } from "react";
import { roboto } from "@/app/fonts";
import Link from "next/link";
import { updateTracerById } from "@/services/updateTracerById";
import { deleteTracerById } from "@/services/deleteTracerById";

type Props = {
  data: Array[];
  title: string;
  icon: JSX.Element;
};

type Array = {
  _id: string;
  tracer: TracerElement[];
};

const SectionTracerCards = ({ data, title, icon }: Props) => {
  const urlSelect = title.split(" ")[0];
  let validate: TracerElement[];
  let id: string;
  if (data.length > 0) {
    validate = data[0].tracer;
    id = data[0]._id;
  } else {
    validate = [];
  }
  //! using optimistic
  const [tracerOptimistic, setTracerOptimistic] = useOptimistic(
    validate!,
    (state, { action, task }: { action: string; task: TracerElement }) => {
      switch (action) {
        case "delete":
          return state?.filter(({ _id }) => _id !== task._id);
        case "update":
          return state?.map((t) => {
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
          return [...state!, task];
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

  const notCompleted = tracerOptimistic?.filter(
    (element) => !element.complete
  ).length;

  let number: number;

  switch (id!) {
    case "High":
      number = 3;
      break;
    case "Medium":
      number = 2;
      break;
    case "Low":
      number = 1;
      break;
    default:
      number = 3;
  }

  return (
    <>
      <div className="flex items-center space-x-4 pb-4 border-b-2 border-white/10 h-14">
        <p className="text-[30px] pr-2 w-6">
          {notCompleted !== undefined && notCompleted > 0 ? notCompleted : null}
        </p>
        {icon}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="py-8 space-y-6">
        {typeof data === "string" && <p>{data}</p>}
        {tracerOptimistic.length > 0 ? (
          tracerOptimistic?.slice(0, number).map((element) => {
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
                  <p className={`text-xl capitalize ${roboto.className}`}>
                    {element.title}
                  </p>
                </div>
                <FaRegCircleXmark
                  size={40}
                  onClick={(e) => handleDelete(e, element)}
                />
              </Link>
            );
          })
        ) : (
          <Link
            href={`/home/new_tracer?priority=${urlSelect}`}
            className={`${roboto.className} w-full p-0`}
          >
            <p className="text-center">Try adding a new Tracer!!</p>
          </Link>
        )}
        <div>
          {tracerOptimistic.length > number && (
            <Link href={"/tracer"}>
              <p className="text-center underline underline-offset-4">
                Show More +
              </p>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default SectionTracerCards;
