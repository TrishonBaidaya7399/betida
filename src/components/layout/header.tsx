"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function AppHeader() {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("?auth-tab=login");
    toast("Login functionality is not implemented yet.");
  };

  const handleRegisterClick = () => {
    router.push("?auth-tab=register");
    toast("Registration functionality is not implemented yet.");
  };

  return (
    <header className="sticky top-0 left-0 z-40 w-full border-b bg-background transition-all">
      <div className="app-container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <span>
              <Image
                src="/logos/logo.webp"
                alt="Branch logo"
                width={32}
                height={32}
                loading="lazy"
              />
            </span>
            <span className="hidden lg:block text-lg text-foreground font-semibold  ">
              BRAND NAME
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" asChild onClick={() => handleLoginClick()}>
            Login
          </Button>

          <Button
            onClick={() => handleRegisterClick()}
            variant="orangeGradient"
            asChild
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
}
