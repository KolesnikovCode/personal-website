import React, { memo, useCallback } from "react";
import styled from "styled-components";

import { setValueToLocalStorage } from "../../helpers";
import { EThemes } from "../../types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
  }

  .emoji {
    font-size: 20px;
    user-select: none;
  }
`;

interface IProps {
  onChange: (t: Partial<EThemes>) => void;
  currentTheme: Partial<EThemes>;
}

const ThemeSwitcher = ({ onChange, currentTheme }: IProps) => {
  // HANDLERS
  const handleChangeTheme = useCallback(() => {
    const theme = currentTheme === EThemes.dark ? EThemes.light : EThemes.dark;

    onChange(theme);
    setValueToLocalStorage("theme", theme);
  }, [currentTheme, onChange]);

  return (
    <Wrapper
      tabIndex={0}
      onClick={handleChangeTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleChangeTheme();
        }
      }}
    >
      <div className="emoji">🌓</div>
    </Wrapper>
  );
};

export default memo(ThemeSwitcher);
