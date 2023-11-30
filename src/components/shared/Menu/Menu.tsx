import { useState, useRef, createContext, useContext } from "react";
import Flex from "components/shared/Flex-v1";
import useOnClickOutside from "utils/hooks/useOnClickOutside";

const MenuContext = createContext({
  showMenu: false,
  setShowMenu: (value) => {},
  node: null,
});

const Menu = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const node = useRef();
  const { children } = props;

  const handleClick = () => {
    setShowMenu(false);
  };

  useOnClickOutside(node, handleClick);

  return (
    <MenuContext.Provider
      value={{
        showMenu,
        setShowMenu,
        node,
      }}
      {...props}
    >
      <Flex direction="column" position="relative">
        {children}
      </Flex>
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);

export default Menu;
