import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import "./App.css";
import SwitchButton from "./components/SwitchButton";

function App() {
  const { currentTheme } = useThemeSwitcher();
  console.log(currentTheme);

  return (
    <div className="myButton">
      <h1 style={{ marginLeft: "-40%" }}>
        The current theme is {currentTheme}
      </h1>
      <SwitchButton />
    </div>
  );
}

export default App;
