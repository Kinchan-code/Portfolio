"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/use-theme";
import { Abbr } from "@/components/shared/abbr";
import { Button } from "@/components/ui/button";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2 ">
      <Abbr title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? <Moon /> : <Sun />}
        </Button>
      </Abbr>
    </div>
  );
}
