import AddTracerClientSide from "@/components/AddTracerClientSide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Tracer",
  description: "Page that adds new Tracer to your account",
};

const NewTracer = () => {
  return (
    <section className="space-y-8">
      <AddTracerClientSide />
    </section>
  );
};

export default NewTracer;
