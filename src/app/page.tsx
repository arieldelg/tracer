import SignIn from "@/components/sign-in";

export default async function Home() {
  return (
    <main className="w-screen">
      <p>aqui va la pagina promocional</p>
      <SignIn provider="google" />
      <SignIn provider="github" />
    </main>
  );
}
