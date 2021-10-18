import React from "react";
import { useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../Button";

type LinkButtonProps = {
  to: string;
} & ButtonProps;

const LinkButton = (props: LinkButtonProps) => {
  const navigate = useNavigate();

  const onNavigate = () => navigate(props.to);

  return (
    <Button onClick={onNavigate} {...props}>
      {props.children}
    </Button>
  );
};

export default LinkButton;
