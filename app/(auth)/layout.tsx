import { APP_COPYRIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center min-h-screen highlight-link pt-4 md:pt-8">
      <header className="mt-auto">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={64}
            height={64}
            priority
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
      </header>

      <main className="mx-auto max-w-sm min-w-80 p-4 mb-4 md:mb-8">
        {children}
      </main>

      <footer className="mt-auto bg-gray-800 w-full flex flex-col gap-4 items-center p-8 text-sm">
        <div className="flex justify-center space-x-4">
          <Link href="/page/conditions-of-use">Conditions of Use</Link>
          <Link href="/page/privacy-policy">Privacy Notice</Link>
          <Link href="/page/help">Help</Link>
        </div>
        <div>
          <p className="text-gray-400">{APP_COPYRIGHT}</p>
        </div>
      </footer>
    </div>
  );
}
