"use client";

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {clerkAppearance} from "@/app/components/ui/ClerkAppearance";

export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.search.includes("redirect_url")) {
      router.replace("/sign-in");
    }
  }, [router]);

  return (
      <div className="min-h-[80vh] flex items-center justify-center">
          <SignIn forceRedirectUrl="/" appearance={clerkAppearance} />
      </div>
  );
}
