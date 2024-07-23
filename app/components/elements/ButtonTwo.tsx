import { NavLink } from "@remix-run/react";
import { ComponentPropsWithoutRef } from "react";
import { button } from "./ButtonTwo.css";

type ButtonTwoProps = ComponentPropsWithoutRef<typeof NavLink>;

export const ButtonTwo = ({ children, ...props }: ButtonTwoProps) => {
  return (
    <NavLink className={button} {...props}>
      {children}
    </NavLink>
  );
};
