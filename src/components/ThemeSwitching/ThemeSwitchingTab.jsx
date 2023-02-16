// import { ThemeProvider } from "styled-components";
import themeList from "./Theme.styled";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";
import ThemeButton from "./ThemeButton";
import Select from "../StatsTable/Select/Select";
import { SelectionWrapper } from "../StatsTable/StatsTable.styled";

const ThemeSwitchingTab = () => {
  const { changeTheme, currentTheme } = useContext(ThemeContext)

  return (

    <div style={{ width: "400px" }}>
      <SelectionWrapper style={{ paddingBottom: 0 }}>
        <Select
          list={themeList}
          title={currentTheme.name}
          name={"Theme"}
          onChange={(_, id) => {

            if (!id && id !== 0) return console.log(id, typeof id)
            changeTheme(themeList[+id])
          }}
          CustomComponent={ThemeButton}
        />
      </SelectionWrapper>
    </div>

  );
}

export default ThemeSwitchingTab;

