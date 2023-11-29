import { ThemeProvider, DefaultTheme } from "styled-components";

/*add media queries pluggins as pluggables passed in to theme components*/

export const colors = {
  MainSampleWhite: "#FFFFFF",
  MainSampleBlue: "#1DCBEF",
  MainSampleYellow: "#FFC83E",
  MainSampleGreen: "#48D38A",
  MainSamplePurple: "#40196D",
  MainSampleDarkPurple: "#EFF1FF",
  MainSampleBlack: "#000000",
  MainSampleRed: "#FFDBDB",
  MainSampleDarkRed: "#FFDBDB",
  MainSampleGrey: "#CACACA",
  MainSampleDarkGrey: "#979797",
  MainSampleLightGrey: "#F9F9F9",
  MainSampleLighterGrey: "#F4F4F4",
  MainSampleLightPurple: "#8369A0",
  MainSampleInactivePurple: "#EFF1FF",
  MainSampleLightBlue: "#DBF8FF",
};

const fontSizes = {
  small: "1em",
  medium: "2em",
  large: "3em",
};

const radiuses = {
  sm: "5px",
};

const breakPoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  radiuses,
  breakPoints,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
