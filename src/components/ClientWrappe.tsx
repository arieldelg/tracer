"use client";
import React, { useEffect, useState } from "react";

// type Scroll = {
//   y: number;
//   yLast: number;
// };

const ClientWrappe = ({ children }: { children: React.ReactNode }) => {
  //   const [style, setStyle] = useState<string>("");
  //   const [scroll, setScroll] = useState<Scroll>({
  //     y: 0,
  //     yLast: 0,
  //   });
  //   useEffect(() => {
  //     setStyle("");
  //     setTimeout(() => {
  //       setStyle("transition-all -translate-y-16 duration-500");
  //     }, 1000);
  //   }, []);

  //   useEffect(() => {
  //     const handlescroll = () => {
  //       setScroll((prev) => {
  //         return {
  //           y: window.scrollY,
  //           yLast: prev.y,
  //         };
  //       });
  //     };
  //     window.addEventListener("scroll", handlescroll);
  //     return () => removeEventListener("scroll", handlescroll);
  //   }, [scroll]);
  //   console.log(scroll);
  return <div>{children}</div>;
};

export default ClientWrappe;
