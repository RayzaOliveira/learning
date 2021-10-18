import React from "react";

import { Button as ButtonUi, ButtonProps as ButtonUiProps } from "theme-ui";

type ButtonProps = ButtonUiProps;

const Button = ({ children, sx, ...props }: ButtonProps) => {
  return (
    <ButtonUi
      {...props}
      sx={{
        paddingY: "24px",
        borderRadius: "0.8rem",
        fontFamily: "heading",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.2s",
        color: "buttonText",
        ...sx,
      }}
    >
      {children}
    </ButtonUi>
  );
};

export { ButtonProps };

export default Button;
