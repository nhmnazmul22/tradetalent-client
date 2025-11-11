import useTheme from "@/hooks/useTheme";
import React from "react";
import { Switch } from "@/components/ui/switch";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div onClick={handleToggleTheme}>
      <span>
        
      </span>
      <Switch></Switch>
    </div>
  );
};

export default ToggleTheme;
