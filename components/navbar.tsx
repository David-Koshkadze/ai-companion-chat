"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary">
      <div className="flex items-center">
        <Menu className="block md:hidden" />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-2xl font-bold text-primary",
              font.className
            )}
          >
            Companion
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <Button variant="blue" size="sm">
          Upgrade
          <Sparkles className="w-4 h-4 fill-white text-white ml-2" />
        </Button>
        <UserButton />
      </div>
    </div>
  );
}
