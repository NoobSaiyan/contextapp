import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { themeToggle } = useContext(ThemeContext);
  return <button onClick={themeToggle}>Change theme</button>;
};

export default ThemeToggle;
