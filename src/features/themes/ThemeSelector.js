import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./themeSlice";

function ThemeSelector() {
  const dispatch = useDispatch();
  const selectedTheme = useSelector((state) => state.theme.selectedTheme);

  return (
    <div className="themeSelector">
      <select
        id="theme-selector"
        onChange={(e) =>
          dispatch(
            changeTheme({ oldTheme: selectedTheme, newTheme: e.target.value })
          )
        }
        value={selectedTheme}
      >
        <option value="default">Default</option>
        <option value="dark-theme">Dark Mode</option>
        <option value="sea-foam">Sea Foam</option>
        <option value="dark-sea-foam">Dark Sea Foam</option>
        <option value="peach-trees">Peach Trees</option>
        <option value="dark-peach-trees">Dark Peach Trees</option>
        <option value="rain-coats">Sailing</option>
        <option value="dark-rain-coats">Dark Sailing</option>
      </select>
    </div>
  );
}

export default ThemeSelector;
