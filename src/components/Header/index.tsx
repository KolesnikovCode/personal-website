import React, { memo } from "react";
import styled from "styled-components";

import { getNav } from "./constants";
import { EThemes } from "../../types";
import ThemeSwitcher from "../ThemeSwither";

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 0 48px;
  height: 64px;
  background: ${(props) => props.theme.colors.headerBg};
  color: ${(props) => props.theme.colors.mainTextColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;

  @media screen and (max-width: 576px) {
    padding: 0 24px;
  }

  a {
    color: ${(props) => props.theme.colors.mainTextColor};
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
    }
  }

  .header {
    &__left {
      a {
        font-size: 20px;

        &:first-child {
          display: inline-block;
        }

        &:last-child {
          display: none;
        }

        @media screen and (max-width: 576px) {
          &:first-child {
            display: none;
          }

          &:last-child {
            display: inline-block;
          }
        }
      }
    }

    &__right {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-theme-switcher {
        margin-right: 28px;

        @media screen and (max-width: 576px) {
          margin-right: 0;
          position: fixed;
          right: 20px;
          bottom: 22px;
        }
      }

      nav {
        margin: 0 -8px;

        @media screen and (max-width: 576px) {
          margin: 0 -4px;
        }

        a {
          margin: 0 8px;

          @media screen and (max-width: 576px) {
            margin: 0 4px;
          }
        }
      }
    }
  }
`;

interface IProps {
  onChangeTheme: (theme: Partial<EThemes>) => void;
  currentTheme: Partial<EThemes>;
}

const Header = ({ onChangeTheme, currentTheme }: IProps) => {
  return (
    <StyledHeader>
      <div className="header__left">
        <a href="/#">Yuri Kolesnikov</a>
        <a href="/#">YK</a>
      </div>

      <div className="header__right">
        <div className="header__right-theme-switcher">
          <ThemeSwitcher onChange={onChangeTheme} currentTheme={currentTheme} />
        </div>

        <nav>
          {getNav().map((el) => (
            <a href={el.link} target={el.target} key={el.text}>
              {el.text}
            </a>
          ))}
        </nav>
      </div>
    </StyledHeader>
  );
};

export default memo(Header);
