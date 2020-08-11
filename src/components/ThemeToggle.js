import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { themeToggle } = this.context;
    return <button onClick={themeToggle}>Change theme</button>;
  }
}

export default ThemeToggle;
