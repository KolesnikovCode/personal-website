import React, { memo } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: ${(props) => props.theme.colors.sectionBg};
  color: ${(props) => props.theme.colors.mainTextColor};
  text-align: center;
  padding: 24px 0;
`;

const getYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <StyledFooter id="footer">
      &#169;1992 - {getYear()} Yuri Kolesnikov
    </StyledFooter>
  );
};

export default memo(Footer);
