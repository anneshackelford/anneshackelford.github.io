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
        {/* <option value="dark-theme">Dark Mode</option> */}
        <option value="splash">Splash</option>
        <option value="splash-new">New Splash</option>
        <option value="dark-splash-new">Dark New Splash</option>
        {/* <option value="dark-splash">Dark Splash</option> */}
        <option value="plant">Plant</option>
        {/* <option value="dark-plant">Dark Plant</option> */}
        {/* <option value="cafe-au-lait">Cafe au Lait</option> */}
        {/* <option value="cafe-au-lait2">Double Cafe au Lait</option>         */}
        {/* <option value="cafe-au-lait3">Triple Cafe au Lait</option> */}
        {/* <option value="cafe-au-lait4">2 Double Cafes au Lait, please</option> */}
        <option value="sea-foam">Sea Foam</option>
        {/* <option value="dark-sea-foam">Dark Sea Foam</option> */}
        {/* <option value="peach-trees">Peach Trees</option> */}
        {/* <option value="dark-peach-trees">Dark Peach Trees</option> */}

      </select>
    </div>
  );
}

export default ThemeSelector;
