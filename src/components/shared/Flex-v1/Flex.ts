import styled from "styled-components";

import manageBreakpoints from "theme/manageBreakPoints";
import Base from "../Base";
import FlexIProps, { flexDisplays } from "./Flex.types";

const Flex = styled(Base)<FlexIProps>`
  display: flex;

  ${({ direction, theme }) =>
    manageBreakpoints("flex-direction", direction, theme)};

  ${({ alignItems, theme }) =>
    manageBreakpoints("align-items", alignItems, theme, flexDisplays)};

  ${({ justifyContent, theme }) =>
    manageBreakpoints("justify-content", justifyContent, theme, flexDisplays)};

  ${({ wrap, theme }) => manageBreakpoints("flex-wrap", wrap, theme)};

  ${({ gap, theme }) => manageBreakpoints("gap", gap, theme)};
`;

export default Flex;
