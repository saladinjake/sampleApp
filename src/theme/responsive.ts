import { css } from "styled-components";
export const MediaScreens = {
  mobileSmall: "320px",
  mobileMedium: "375px",
  mobileLarge: "425px",
  tablets: "768px",
  laptopSmall: "1074px", //1024
  laptopsLarge: "1440px",
  desktops: "2560px", // large mac desktops
  nonRetinaMinWidth: "1200px",
  nonRetinaMaxWidth: "1600px",
  retinaMinWidth: "1024px",
  retinaMaxWidth: "1920px",
  smallMobilePhonesGeneric: {
     min:"320px",
     max:"480px"
  },
  largeMobilePhonesGeneric: {
    min:"360px",
    max:"640px"
  },
  miniLaptops: {
    min:"1024px",
    max:"1920px"
  },
  smallLaptopsGeneric: {
    min:"768px",
    max:"1520px"
  },
  largeLaptopsGeneric:{
    min:"1030px",
    max:"1366px"
  },
  tabletsPortraits: {
    min:"768px",
    max:"1007px",
    orientation:"portrait"
  },
  tabletsLandScape: {
    min:"768px",
    max:"1007px",
    orientation:"landscape"
  }
 
};
export const screenDeviceManager = {
  mobileSmall: `only screen  and (max-width: ${MediaScreens.mobileSmall})`,
  mobileMedium: `only  screen  and (max-width: ${MediaScreens.mobileMedium})`,
  mobileLarge: `only  screen  and (max-width: ${MediaScreens.mobileLarge})`,
  tablets: `only  screen  and (max-width: ${MediaScreens.tablets})`,
  laptopSmall: `only  screen  and (max-width: ${MediaScreens.laptopSmall})`,
  laptopsLarge: `only  screen  and (max-width: ${MediaScreens.laptopsLarge})`,
  laptopNonRetina: `only  screen 
   and (min-device-width: ${MediaScreens.nonRetinaMinWidth}) 
   and (max-device-width: ${MediaScreens.nonRetinaMaxWidth}) 
   and (-webkit-min-device-pixel-ratio: 1)`,
  laptopRetina: `only screen 
   and (min-device-width: ${MediaScreens.retinaMinWidth}) 
   and (max-device-width: ${MediaScreens.retinaMaxWidth}) 
   and (-webkit-min-device-pixel-ratio: 2)
   and (min-resolution: 192dpi)`,
  desktops: `only  screen and (min-width: ${MediaScreens.desktops})`, //mac desktops

  smallMobilePhonesGeneric: `only screen   
   and (min-device-width : ${MediaScreens.smallMobilePhonesGeneric.min})   
   and (max-device-width : ${MediaScreens.smallMobilePhonesGeneric.max}) `,
  largeMobilePhonesGeneric: `only screen   
   and (min-device-width : ${MediaScreens.largeMobilePhonesGeneric.min})   
   and (max-device-width : ${MediaScreens.largeMobilePhonesGeneric.max})`,
  miniLaptops: `only screen   
  and (min-device-width : 768px)   
  and (max-device-width : 1024px)`,
  smallLaptopsGeneric: `only screen   
    and (min-device-width : ${MediaScreens.smallLaptopsGeneric.min})   
    and (max-device-width : ${MediaScreens.smallLaptopsGeneric.max})`, //1024
  largeLaptopsGeneric: `only screen   
    and (min-width: ${MediaScreens.largeLaptopsGeneric.min})   
    and (max-width: ${MediaScreens.largeLaptopsGeneric.max})`,
  tabletsPortraits: `only screen   
   and (orientation : ${MediaScreens.tabletsPortraits.orientation})   
   and (-webkit-min-device-pixel-ratio: 1)   
   and (min-device-width : ${MediaScreens.tabletsPortraits.min})   
   and (max-device-width : ${MediaScreens.tabletsLandScape.max})`,
  tabletsLandScape: `only screen   
   and (orientation : ${MediaScreens.tabletsLandScape.orientation})   
   and (-webkit-min-device-pixel-ratio: 1)  
   and (min-device-width : ${MediaScreens.tabletsLandScape.min})   
   and (max-device-width : ${MediaScreens.tabletsLandScape.max}) `,
};

function convertPixelToRemOrEx(breakpoints, ratio = 16, unit) {
  const newBreakpoints = {};

  for (let key in breakpoints) {
    const point = breakpoints[key];

    if (String(point).includes("px")) {
      newBreakpoints[key] = +(parseInt(point) / ratio) + unit;
      continue;
    }

    newBreakpoints[key] = point;
  }

  return newBreakpoints;
}

export function convertPixelToEm(breakpoints, ratio = 16) {
  return convertPixelToRemOrEx(breakpoints, ratio, "em");
}

export function convertPixelToRem(breakpoints, ratio = 16) {
  return convertPixelToRemOrEx(breakpoints, ratio, "rem");
}

export const responsiveBreakPoints = {
  xs: "400px",
  sm: "600px",
  md: "900px",
  lg: "1280px",
  xl: "1440px",
  xxl: "1920px",
  ...MediaScreens
};

export const defaultBreakpoints = {
  xl: "1440px",
  xxl: "1170px",
  md: "768px",
  xs: "450px",
  sm: "600px",
  ...MediaScreens
};

function getSizeFromBreakpoint(breakpointValue, breakpoints = {}) {
  if (!breakpoints) breakpoints = defaultBreakpoints;

  if(typeof(breakpoints[breakpointValue]) =="object"){
    return breakpoints[breakpointValue]?.max ?? 0
  }else{
    if (breakpoints[breakpointValue]) {
      return breakpoints[breakpointValue];
    } else if (parseInt(breakpointValue) ) {
      return breakpointValue;
    } else {
      return "0";
    }
  }
  
}

export function generateMedia(breakpoints = defaultBreakpoints) {
  const mobileSmall = (cssStrings) => css`
    @media ${screenDeviceManager.smallMobilePhonesGeneric} {
      ${cssStrings}
    }
  `;

  const mobileLarge = (cssStrings) => css`
    @media ${screenDeviceManager.largeMobilePhonesGeneric} {
      ${cssStrings};
    }
  `;

  const laptopSmall = (cssStrings) => css`
    @media ${screenDeviceManager.smallLaptopsGeneric} {
      ${cssStrings}
    }
  `;
  const laptopsLarge = (cssStrings) => css`
    @media ${screenDeviceManager.largeLaptopsGeneric} {
      ${cssStrings};
    }
  `;

  const tabletsLandScape = (cssStrings) => css`
    @media ${screenDeviceManager.tabletsLandScape} {
      ${cssStrings}
    }
  `;
  const tabletsPortraits = (cssStrings) => css`
    @media ${screenDeviceManager.tabletsPortraits} {
      ${cssStrings};
    }
  `;

  /*add more functions*/

  const mediaSets = {
    xs: (cssString) => css`
      @media only screen and (max-width: ${responsiveBreakPoints.xs}) {
        ${cssString};
      }
    `,
    sm: (cssString) => css`
      @media only screen  and (max-width: ${responsiveBreakPoints.sm}) {
        ${cssString};
      }
    `,
    md: (cssString) => css`
      @media only screen and (max-width: ${responsiveBreakPoints.md}) {
        ${cssString};
      }
    `,
    lg: (cssString) => css`
      @media only screen and (max-width: ${responsiveBreakPoints.lg}) {
        ${cssString};
      }
    `,
    xl: (cssString) => css`
      @media only screen and (max-width: ${responsiveBreakPoints.xl}) {
        ${cssString};
      }
    `,
    xxl: (cssString) => css`
      @media only screen and (max-width: ${responsiveBreakPoints.xxl}) {
        ${cssString};
      }
    `,
  };

  const lessThan = (breakpoint) => (cssString) =>
    css`
      @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
        ${cssString};
      }
    `;

  const greaterThan = (breakpoint) => (cssString) =>
    css`
      @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
        ${cssString};
      }
    `;

  const between = (firstBreakpoint, secondBreakpoint) => (cssString) =>css`
    @media (min-width: ${getSizeFromBreakpoint(firstBreakpoint, breakpoints)}) and
      (max-width: ${getSizeFromBreakpoint(secondBreakpoint, breakpoints)}) {
      ${cssString};
    }
`;
  

  const oldStyle = Object.keys(breakpoints).reduce(
    (acc, label) => {
      const size = breakpoints[label];

      acc.to[label] = (cssString) => {
        return css`
          @media (max-width: ${size}) {
             ${cssString};
          }
        `;
      };

      acc.from[label] = (cssString) => {
        return css`
          @media (min-width: ${size}) {
             ${cssString};
          }
        `;
      };

      return acc;
    },
    { to: {}, from: {} }
  );

  return Object.assign(
    {
      mobileSmall,
      mobileLarge,
      tabletsLandScape,
      tabletsPortraits,
      laptopSmall,
      laptopsLarge,
      mediaSets,
      lessThan,
      greaterThan,
      between,
    },
    oldStyle,
  );
}

export const mediaGenerator = generateMedia();


export default  mediaGenerator

