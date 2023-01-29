import React, { useCallback, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { EThemes } from "./types";
import Header from "./components/Header";
import About from "./components/blocks/About";
import { GlobalStyles } from "./styles/Global";
import Contacts from "./components/blocks/Contacts";
import { getValueFromLocalStorage } from "./helpers";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  .content {
    padding-top: 64px;
  }
`;

const theme = {
  light: {
    colors: {
      headerBg: "#fff",
      mainTextColor: "#000",
      sectionBg: "#fff",
    },
  },
  dark: {
    colors: {
      headerBg: "#252830",
      mainTextColor: "#fff",
      sectionBg: "#2b303e",
    },
  },
};

function App() {
  // LOCAL STATE
  const [currentTheme, setCurrentTheme] = useState<Partial<EThemes>>(
    getValueFromLocalStorage("theme") || EThemes.dark
  );

  // HANDLERS
  const handleChangeTheme = useCallback((t: Partial<EThemes>) => {
    setCurrentTheme(t);
  }, []);

  return (
    <Wrapper className="App">
      <ThemeProvider
        theme={currentTheme === "light" ? theme.light : theme.dark}
      >
        <GlobalStyles />

        <Header onChangeTheme={handleChangeTheme} currentTheme={currentTheme} />

        <div className="content">
          <About />

          <Contacts />
        </div>

        <Footer />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
