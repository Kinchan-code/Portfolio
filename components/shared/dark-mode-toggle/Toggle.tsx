"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/lib/context/theme/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Abbr from "@/components/shared/tooltip/Tooltip";
import { Button } from "@/components/ui/button";

function Toggle() {
  const [isDark, setIsDark] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkMode = localStorage.getItem("mode") === "dark";
      setIsDark(darkMode);
    }
  }, []);

  return (
    <div className="flex items-center space-x-2 ">
      <Abbr title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setIsDark(!isDark);
            setTheme(isDark ? "light" : "dark");
          }}
        >
          {isDark ? <Moon /> : <Sun />}
        </Button>
      </Abbr>
    </div>
  );
}

export default Toggle;
