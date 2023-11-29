import React from "react";
import { StyledButton, StyledText } from "./Button.styles";

import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "primary",
  size = "md",
  loading,
  onClick,
  iconLeft,
  iconRight,
  disabled,
  children,
  width,
  height,
  margin,
  type,
}) => {
  return (
    <StyledButton
      size={size}
      width={width}
      height={height}
      variant={variant}
      color={color}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? (
        <>loading...</>
      ) : (
        <>
          {iconLeft && <span className="icon-left">{iconLeft}</span>}
          <StyledText>{children}</StyledText>
          {iconRight && <span className="icon-right">{iconRight}</span>}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
