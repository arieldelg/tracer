import TabClientSide from "@/components/TabClientSide";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Cookies",
  description: "A page that explains how to work with cookies",
};

const Cookies = () => {
  const getMyCookie = cookies();
  const cookieTab = getMyCookie.get("setCookies")?.value ?? "";
  return (
    <section className="space-y-4">
      <h1>section that explains how to use cookies</h1>
      <div className="w-full h-full flex flex-col space-y-4">
        <TabClientSide currentCookie={cookieTab} />
      </div>
    </section>
  );
};

export default Cookies;
