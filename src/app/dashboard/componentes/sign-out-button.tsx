"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/router";

const SignOutButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() =>
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/authentication");
            },
          },
        })
      }
      className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      Sair
    </button>
  );
};

export default SignOutButton;
