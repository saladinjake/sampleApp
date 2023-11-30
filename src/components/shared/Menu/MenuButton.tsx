import { useMenu } from "./Menu";

interface IProps {
  setShowMenu?: any;
  children: any;
}

const MenuButton = (props: IProps) => {
  const { children } = props;
  const { setShowMenu } = useMenu();

  if (typeof children === "function") return children(setShowMenu);

  return (
    <button
      type="button"
      style={{
        border: "1px solid",
        display: "flex",
        background: "transparent",
        cursor: "pointer",
        padding: 0,
        margin: 0,
      }}
      onClick={() => setShowMenu((state) => !state)}
    >
      {children}
    </button>
  );
};

export default MenuButton;
