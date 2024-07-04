import { signIn } from "@/auth";

type Props = {
  provider: string;
};

const SignIn = ({ provider }: Props) => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, { redirectTo: "/home" });
      }}
    >
      <button type="submit">
        Signin with <strong className="capitalize">{provider}</strong>
      </button>
    </form>
  );
};

export default SignIn;
