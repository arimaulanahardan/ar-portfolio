"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DATA } from "@/data/resume";
import { useTheme } from "next-themes";
import { MonitorCog } from "lucide-react";

const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className="sticky top-0 bg-background/30 z-40">
      <div className="px-6 max-w-2xl mx-auto py-5 flex justify-between items-center backdrop-blur">
        <h2 className="font-bold text-2xl">Ar.</h2>
        <Dialog>
          <DialogTrigger>🎨</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center mb-2">
                Choose your favourite theme
              </DialogTitle>
              <DialogDescription>
                <span className="flex items-center justify-center gap-4 flex-wrap">
                  {DATA.themes.map((theme, indx) => (
                    <span key={indx} className="w-max">
                      <p className="text-center mb-3">{theme.title}</p>
                      <button
                        onClick={() => setTheme(theme.title.toLowerCase())}
                        className="border w-max h-max flex p-4 rounded-xl items-center justify-center cursor-pointer scale-100 hover:scale-110 -space-x-2 transition-all"
                      >
                        {theme.title.toLowerCase() === "system" && (
                          <MonitorCog />
                        )}
                        {theme.colors.map((clr, indx) => (
                          <span
                            key={indx}
                            className="w-6 h-6 rounded-full border"
                            style={{ backgroundColor: `rgb(${clr})` }}
                          ></span>
                        ))}
                      </button>
                    </span>
                  ))}
                </span>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
