import { auth } from "@/auth";
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

export type Session = {
  user: {
    name: string;
    email: string;
    image: string;
    roles: string[];
    id: string;
  };
  expires: string;
};

const NewTracer = async ({ searchParams: { priority } }: Props) => {
  const session = (await auth()) as Session;
  return (
    <section className="space-y-8">
      <AddTracerClientSide newWithSelect={priority} session={session} />
    </section>
  );
};

export default NewTracer;
