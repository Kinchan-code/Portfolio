"use client";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/lib/context/theme/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Abbr from "@/components/shared/tooltip/Tooltip";

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
      <Switch
        id="dark-mode-toggle"
        checked={isDark}
        onCheckedChange={() => {
          setIsDark(!isDark);
          setTheme(isDark ? "light" : "dark");
        }}
      />
      <label
        htmlFor="dark-mode-toggle"
        // className='hover:transition-all hover:duration-100 hover:scale-125'
      >
        {isDark ? (
          <Abbr title="Switch to Light Mode">
            <Moon />
          </Abbr>
        ) : (
          <Abbr title="Switch to Dark Mode">
            <Sun />
          </Abbr>
        )}
      </label>
    </div>
  );
}

export default Toggle;
