import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutButton from "./componentes/sign-out-button";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;
