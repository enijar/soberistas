import styled, { css } from "styled-components";

export const HeaderLinkHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25em;

  a {
    display: flex;
    align-items: center;
    gap: 0.25em;

    :hover {
      text-decoration: none;
    }
  }

  svg {
    color: #007b3c;
  }
`;

export const HeaderLinkListInner = styled.div`
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  border-bottom: 2px solid #69a6a7;
`;

export const HeaderLinkList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 8em;
  display: none;
  white-space: nowrap;
  padding-block-start: 1.5em;
  z-index: -1;
`;

export const HeaderLinkWrapper = styled.div<{ hasList?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25em;
  font-size: 0.8em;
  font-weight: normal;
  cursor: pointer;
  position: relative;
  z-index: 1;

  :hover, :focus-within {
    ${HeaderLinkList} {
      display: block;
    }
  }

  @media (max-width: 1060px) {
    font-size: 0.6em;
  }

  ${({ hasList = false }) => {
    if (!hasList) return;
    return css`
      ${HeaderLinkList} {
        border-bottom: 1px solid #eee;

        :last-child {
          border-bottom: none;
        }

        a {
          width: 100%;
          padding: 1em;

          :hover {
            background-color: #9bd9da;
          }
        }
      }
    `;
  }}};
`;

export const HeaderLinksList = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 4.5em;

    @media (max-width: 1060px) {
      height: 3em;
    }
  }
`;

export const HeaderLinksInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  justify-content: space-between;
  padding-inline: 1em;
  padding-block: 0.5em;
`;

export const HeaderLinksWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0 0 25px 0 rgb(0 0 0 / 30%);
`;

export const HeaderActionDivider = styled.div`
  width: 2px;
  height: 1em;
  background-color: currentColor;
  margin-inline: 0.5em;

  @media (max-width: 650px) {
    display: none;
  }
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

  @media (max-width: 650px) {
    font-size: 0.65em;
    padding-inline: 0.5em;
  }

  ${({ color }) => {
    return css`
      background-color: var(--color-${color});
    `;
  }};

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

  @media (max-width: 650px) {
    ${HeaderAction}:nth-child(2), ${HeaderAction}:nth-child(3) {
      display: none;
    }
  }
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
