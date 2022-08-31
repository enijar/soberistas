import { createGlobalStyle } from "styled-components";

const Reset = createGlobalStyle`
  :root {
    --root-scale: 3;
    --root-size: calc(var(--root-scale) * 1vh);
    --root-min: 16px;
    --root-max: 20px;
    --color-primary: #000000;
    --color-orange: #ff6c52;
    --color-teal: #9bd9da;
    --color-green: #69a6a7;
  }

  @media (orientation: portrait) {
    --root-size: calc(var(--root-scale) * 1vw);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  html,
  body,
  #__next,
  main {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    overflow: hidden;
  }

  img, svg, iframe, video {
    display: block;
  }

  html {
    font-size: clamp(var(--root-min), var(--root-size), var(--root-max));
    font-family: system-ui, sans-serif;
    font-weight: normal;
    line-height: 1em;
    touch-action: none;
    color: #000000;
  }

  main {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

export default Reset;
