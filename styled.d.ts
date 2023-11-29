import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      SampleAppWhite: string;
      SampleAppBlue: string;
      SampleAppYellow: string;
      SampleAppGreen: string;
      SampleAppPurple: string;
      SampleAppDarkPurple: string;
      SampleAppBlack: string;
      SampleAppRed: string;
      SampleAppDarkRed: string;
      SampleAppGrey: string;
      SampleAppDarkGrey: string;
      SampleAppLightGrey: string;
      SampleAppLighterGrey: string;
      SampleAppLightPurple: string;
      SampleAppInactivePurple: string;
      SampleAppLightBlue: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    radiuses: {
      sm: string;
    };

    breakPoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
  }
}
