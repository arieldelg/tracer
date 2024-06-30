import AddTracerClientSide from "@/components/AddTracerClientSide";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Tracer",
  description: "Page that adds new Tracer to your account",
};
type Props = {
  searchParams: {
    priority: string;
  };
};

const NewTracer = ({ searchParams: { priority } }: Props) => {
  console.log(priority);
  return (
    <section className="space-y-8">
      <AddTracerClientSide newWithSelect={priority} />
    </section>
  );
};

export default NewTracer;
