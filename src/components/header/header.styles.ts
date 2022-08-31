import styled, { css } from "styled-components";

export const HeaderActionDivider = styled.div`
  width: 2px;
  height: 1em;
  background-color: currentColor;
  margin-inline: 0.5em;
`;

type ActionProps = {
  color?: "orange";
};

export const HeaderAction = styled.div<ActionProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  padding-inline: 1em;

  ${({ color }) => {
    return css`
      background-color: var(--color-${color});
    `;
  }}

  svg,
  img {
    width: auto;
    height: 1em;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const HeaderActions = styled.div`
  background-color: var(--color-green);
  width: max-content;
  height: 1.75em;
  margin-inline-start: auto;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

export const HeaderActionsWrapper = styled.div`
  background-color: var(--color-teal);
  padding-inline: 1em;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 60em;
  margin-inline: auto;
`;

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
`;
