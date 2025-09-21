"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useLayoutStore } from "@/store/layout-store";

const AppHeader = dynamic(() => import("../components/layout/header"));
const AppSidebar = dynamic(() => import("../components/layout/sidebar"));

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const { mobileOpen } = useLayoutStore();

  return (
    <ThemeProvider attribute="class">
      <TooltipProvider>
        <Suspense>
          <div className="relative flex items-start min-h-screen bg-background text-foreground pb-24 md:pb-0">
            <AppSidebar />
            <div
              className={`mx-auto ${
                mobileOpen
                  ? "w-full md:w-[calc(100%-4.7rem)]"
                  : "w-full md:w-[calc(100%-15.200rem)]"
              }`}
            >
              <AppHeader />
              <main className="app-container">{children}</main>
            </div>
          </div>
        </Suspense>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default MainProvider;
