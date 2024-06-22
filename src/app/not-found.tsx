import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center px-4 space-y-20 pt-20">
      <div className="w-[300px] h-[300px]">
        <Image
          src={
            "https://as1.ftcdn.net/v2/jpg/03/90/87/38/1000_F_390873826_BI4GzkcIocAr4zbZvfgN4stDLkhfi8Qj.jpg"
          }
          width={500}
          height={500}
          alt="Not-Found"
          className="w-full h-full object-cover rounded-full shadow-5xl"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-4xl text-center">
          Could not find requested resource
        </p>
        <Link href="/home">Return Home</Link>
      </div>
    </div>
  );
}
