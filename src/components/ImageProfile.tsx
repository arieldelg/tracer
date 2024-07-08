"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const ImageProfile = () => {
  const { data } = useSession();
  const [hoverImage, setHoverImage] = useState(data?.user?.image);
  return (
    <div className="w-52 h-52">
      <Image
        src={hoverImage!}
        width={200}
        height={200}
        alt="ariel"
        quality={100}
        className="w-full h-full rounded-full object-cover"
        onMouseEnter={() =>
          setHoverImage(
            "https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?t=st=1720421581~exp=1720425181~hmac=19411bf1b9bcd8e139158b300c0347a0a3f067e2a76436ffe14cc2dd9fc17701&w=1380"
          )
        }
        onMouseLeave={() => setHoverImage(data?.user?.image)}
      />
    </div>
  );
};

export default ImageProfile;
