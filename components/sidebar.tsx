"use client";

import { cn } from "@/lib/utils";
import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter()  

  const routes = [
    {
      icon: Home,
      href: "/",
      label: "Home",
      protect: false,
    },
    {
      icon: Plus,
      href: "/companion/new",
      label: "Create",
      protect: true,
    },
    {
      icon: Settings,
      href: "/settings",
      label: "Settings",
      protect: false,
    },
  ];

  function onNavigate(url: string, protect: boolean) {
    return router.push(url)
  }

  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-2 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route, idx) => (
            <div
              key={idx}
              className={cn(
                "text-muted-foreground text-sm group flex p-3 w-full justify-start cursor-pointer font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "bg-primary/10 text-primary" : ""
              )}
              onClick={() => onNavigate(route.href, route.protect)}
            >
              <div className="flex flex-col gap-y-3 items-center flex-1">
                <route.icon className="w-5 h-5"/>
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
