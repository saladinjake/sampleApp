import styled from "styled-components";

import Box from "components/shared/Box-v1";
import { useMenu } from "./Menu";

interface IProps {
  children: any;
  width?: string;
  node?: any;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const MenuItems = (props: IProps) => {
  const { children, width = "100%", top, right, left, bottom } = props;
  const { showMenu, node, setShowMenu } = useMenu();

  return showMenu ? (
    <StyledMenuItems
      ref={node}
      width={width}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      onClick={() => setShowMenu(false)}
    >
      {children}
    </StyledMenuItems>
  ) : null;
};

export default MenuItems;

const StyledMenuItems = styled(Box)<{
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}>`
  position: absolute;
  top: ${(props) => (props.top ? props.top : "unset")};
  left: ${(props) => (props.left ? props.left : "unset")};
  right: ${(props) => (props.right ? props.right : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom : "unset")};
  z-index: 1;
`;
